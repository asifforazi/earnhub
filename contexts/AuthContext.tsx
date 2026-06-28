"use client";

import { createUserProfile } from "@/services/firebase";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import {
  User,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

type AuthContextType = {
  user: User | null;
  loading: boolean;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  register: (
  fullName: string,
  email: string,
  password: string,
  referralCode?: string
) => Promise<void>;

  googleLogin: () => Promise<void>;

  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  async function login(
    email: string,
    password: string
  ) {
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  async function register(
  fullName: string,
  email: string,
  password: string,
  referralCode?: string
) {
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  await updateProfile(userCredential.user, {
    displayName: fullName,
  });

  await createUserProfile(
  userCredential.user.uid,
  userCredential.user.email || email,
  fullName,
  referralCode || null
);

  // Referral system (next step)
  if (referralCode) {
    console.log("Referral Code:", referralCode);
  }
}


  async function googleLogin() {
  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(auth, provider);

  const user = result.user;

  await createUserProfile(
    user.uid,
    user.email || "",
    user.displayName || "User"
  );
}

  async function logout() {
    await signOut(auth);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        googleLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}