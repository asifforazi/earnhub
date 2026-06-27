import Link from "next/link";
import {
  FaFacebook,
  FaTelegram,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Earn<span className="text-emerald-400">Hub</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Complete surveys, install apps, watch videos, complete offerwall tasks, invite friends and earn rewards securely.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-bold text-white">
              Company
            </h3>

            <div className="space-y-3">
              <Link href="/" className="block text-slate-400 hover:text-white">
                Home
              </Link>

              <Link href="/login" className="block text-slate-400 hover:text-white">
                Login
              </Link>

              <Link href="/register" className="block text-slate-400 hover:text-white">
                Register
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-bold text-white">
              Legal
            </h3>

            <div className="space-y-3">
              <a href="#" className="block text-slate-400 hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="block text-slate-400 hover:text-white">
                Terms of Service
              </a>

              <a href="#" className="block text-slate-400 hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-bold text-white">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl text-slate-400">
              <a href="#">
                <FaFacebook className="hover:text-white" />
              </a>

              <a href="#">
                <FaTelegram className="hover:text-white" />
              </a>

              <a href="#">
                <FaDiscord className="hover:text-white" />
              </a>

              <a href="#">
                <FaGithub className="hover:text-white" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">
          © {new Date().getFullYear()} EarnHub. All rights reserved.
        </div>

      </div>
    </footer>
  );
}