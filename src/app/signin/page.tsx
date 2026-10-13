"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialButtons from "@/components/SocialButtons";
import { authClient } from "@/lib/auth-client";

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email")).trim();
    const password = String(form.get("password"));

    if (!email || !password) {
      setError("ইমেইল ও পাসওয়ার্ড দিন");
      toast.error("ইমেইল ও পাসওয়ার্ড দিন");
      return;
    }

    setLoading(true);
    setError("");
    const { error } = await authClient.signIn.email({ email, password });
    setLoading(false);

    if (error) {
      setError(error.message || "সাইন ইন ব্যর্থ হয়েছে");
      toast.error(error.message || "সাইন ইন ব্যর্থ হয়েছে");
      return;
    }

    toast.success("সফলভাবে সাইন ইন হয়েছে");
    // go back to the page the user wanted, only if it is a local path
    const redirect = new URLSearchParams(window.location.search).get("redirect");
    router.push(redirect && redirect.startsWith("/") ? redirect : "/");
  };

  return (
    <div className="mx-auto max-w-md space-y-5 rounded-2xl bg-base-100 p-6 shadow-sm sm:p-8">
      <h1 className="text-center text-2xl font-bold">সাইন ইন</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="email" type="email" placeholder="ইমেইল" className="input input-bordered w-full" />
        <input name="password" type="password" placeholder="পাসওয়ার্ড" className="input input-bordered w-full" />
        {error && <p className="text-sm text-error">{error}</p>}
        <button disabled={loading} className="btn btn-primary w-full">
          {loading ? <span className="loading loading-spinner" /> : "সাইন ইন"}
        </button>
      </form>

      <div className="divider text-xs">অথবা</div>
      <SocialButtons />

      <p className="text-center text-sm">
        অ্যাকাউন্ট নেই?{" "}
        <Link href="/signup" className="font-semibold text-primary">
          সাইন আপ করুন
        </Link>
      </p>
    </div>
  );
};

export default SignIn;