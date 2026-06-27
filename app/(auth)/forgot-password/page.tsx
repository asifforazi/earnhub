"use client";

import { useState } from "react";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";
import { FirebaseError } from "firebase/app";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      await sendPasswordResetEmail(auth, email);

      toast.success("Reset email sent!", {
        description:
          "Please check your email inbox to reset your password.",
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error("Failed to send email", {
          description: error.message,
        });
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

        <h1 className="text-center text-3xl font-bold text-white">
          Forgot Password
        </h1>

        <p className="mt-2 text-center text-slate-400">
          Enter your email to receive a password reset link.
        </p>

        <form onSubmit={handleReset} className="mt-8 space-y-4">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

        </form>

        <Link
          href="/login"
          className="mt-6 block text-center text-blue-400 hover:text-blue-300"
        >
          ← Back to Login
        </Link>

      </div>
    </main>
  );
}