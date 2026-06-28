"use client";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FirebaseError } from "firebase/app";
import { toast } from "sonner";

import { useAuth } from "@/contexts/AuthContext";

export default function RegisterPage() {
  const { register, googleLogin } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  useEffect(() => {
  const ref = searchParams.get("ref");

  if (ref) {
    setReferralCode(ref);
  }
}, [searchParams]);

  async function handleRegister(e: React.FormEvent) {
  e.preventDefault();

  if (password !== confirmPassword) {
    toast.error("Passwords do not match", {
      description: "Please make sure both passwords are the same.",
    });
    return;
  }

  try {
    setLoading(true);

    await register(
  fullName,
  email,
  password,
  referralCode
);

    toast.success("Account created successfully!", {
      description:
        "Welcome to EarnHub. Redirecting you to the sign in page...",
    });

    setTimeout(() => {
      router.push("/login");
    }, 1500);
  } catch (error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/email-already-in-use":
          toast.error("Account already exists", {
            description:
              "An account with this email already exists. Please sign in instead.",
          });
          break;

        case "auth/invalid-email":
          toast.error("Invalid email address", {
            description: "Please enter a valid email address.",
          });
          break;

        case "auth/weak-password":
          toast.error("Weak password", {
            description:
              "Password must contain at least 6 characters.",
          });
          break;

        case "auth/network-request-failed":
          toast.error("Network error", {
            description:
              "Please check your internet connection and try again.",
          });
          break;

        default:
          toast.error("Registration failed", {
            description:
              "Something went wrong. Please try again.",
          });
      }
    } else {
      toast.error("Registration failed", {
        description:
          "Something went wrong. Please try again.",
      });
    }
  } finally {
    setLoading(false);
  }
}

  async function handleGoogleRegister() {
    try {
      setLoading(true);

      await googleLogin();

      toast.success("Google sign in successful!", {
        description:
          "Welcome to EarnHub. Redirecting to your dashboard...",
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error("Google sign in failed", {
          description: "Please try again.",
        });
      } else {
        toast.error("Google sign in failed");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-white">
          Create Your Account
        </h1>

        <p className="mb-6 text-center text-slate-400">
          Join EarnHub and start earning today
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
  type="text"
  placeholder="Full Name"
  className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none transition focus:border-green-500"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  required
/>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none transition focus:border-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 pr-12 text-white outline-none transition focus:border-green-500"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    minLength={6}
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>
<div className="relative">
  <input
    type={showConfirmPassword ? "text" : "password"}
    placeholder="Confirm Password"
    className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 pr-12 text-white outline-none transition focus:border-green-500"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    required
  />

  <button
    type="button"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
  >
    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-green-600 p-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-slate-700" />
          <span className="px-4 text-sm text-slate-500">OR</span>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        <button
  onClick={handleGoogleRegister}
  disabled={loading}
  className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-700 bg-slate-800 p-3 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
>
  <FcGoogle size={22} />

  Continue with Google
</button>
      </div>
    </main>
  );
}