"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { FirebaseError } from "firebase/app";
import { toast } from "sonner";

import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const { login, googleLogin } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

const [showPassword, setShowPassword] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      await login(email, password);

      toast.success("Welcome back!", {
        description:
          "You have successfully signed in. Redirecting to your dashboard...",
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-credential":
            toast.error("Invalid email or password", {
              description:
                "The email address or password you entered is incorrect.",
            });
            break;

          case "auth/user-disabled":
            toast.error("Account disabled", {
              description:
                "Your account has been disabled. Please contact support.",
            });
            break;

          case "auth/network-request-failed":
            toast.error("Network error", {
              description:
                "Please check your internet connection and try again.",
            });
            break;

          default:
            toast.error("Login failed", {
              description: "Something went wrong. Please try again.",
            });
        }
      } else {
        toast.error("Login failed", {
          description: "Something went wrong. Please try again.",
        });
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    try {
      setLoading(true);

      await googleLogin();

      toast.success("Welcome to EarnHub!", {
        description:
          "Google sign in successful. Redirecting to your dashboard...",
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
          Welcome Back
        </h1>

        <p className="mb-6 text-center text-slate-400">
          Sign in to your EarnHub account
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none transition focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 pr-12 text-white outline-none transition focus:border-blue-500"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
  >
    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
  </button>
</div>

<div className="flex justify-end">
  <Link
    href="/forgot-password"
    className="text-sm text-blue-400 transition hover:text-blue-300"
  >
    Forgot Password?
  </Link>
</div>

<button
  type="submit"
  disabled={loading}
  className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
>
  {loading ? "Signing In..." : "Sign In"}
</button>
        </form>

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-slate-700" />
          <span className="px-4 text-sm text-slate-500">OR</span>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        <button
  onClick={handleGoogleLogin}
  disabled={loading}
  className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-700 bg-slate-800 p-3 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
>
  <FcGoogle size={22} />

  Continue with Google
</button>
<p className="mt-6 text-center text-sm text-slate-400">
  Don't have an account?{" "}
  <Link
    href="/register"
    className="font-semibold text-blue-400 hover:text-blue-300"
  >
    Create Account
  </Link>
</p>
      </div>
    </main>
  );
}