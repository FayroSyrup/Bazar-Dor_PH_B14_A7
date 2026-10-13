"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialButtons from "@/components/SocialButtons";
import { authClient } from "@/lib/auth-client";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name")).trim();
    const email = String(form.get("email")).trim();
    const password = String(form.get("password"));

    if (!name || !email || !password) {
      setError("সবগুলো ঘর পূরণ করুন");
      toast.error("সবগুলো ঘর পূরণ করুন");
      return;
    }
    if (password.length < 8) {
      setError("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }

    setLoading(true);
    setError("");
    const { error } = await authClient.signUp.email({ name, email, password });
    setLoading(false);

    if (error) {
      setError(error.message || "সাইন আপ ব্যর্থ হয়েছে");
      toast.error(error.message || "সাইন আপ ব্যর্থ হয়েছে");
      return;
    }

    toast.success("সাইন আপ সফল! এখন সাইন ইন করুন");
    router.push("/signin");
  };

  return (
    <div className="mx-auto max-w-md space-y-5 rounded-2xl bg-base-100 p-6 shadow-sm sm:p-8">
      <h1 className="text-center text-2xl font-bold">সাইন আপ</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" type="text" placeholder="নাম" className="input input-bordered w-full" />
        <input name="email" type="email" placeholder="ইমেইল" className="input input-bordered w-full" />
        <input name="password" type="password" placeholder="পাসওয়ার্ড (কমপক্ষে ৮ অক্ষর)" className="input input-bordered w-full" />
        {error && <p className="text-sm text-error">{error}</p>}
        <button disabled={loading} className="btn btn-primary w-full">
          {loading ? <span className="loading loading-spinner" /> : "সাইন আপ"}
        </button>
      </form>

      <div className="divider text-xs">অথবা</div>
      <SocialButtons />

      <p className="text-center text-sm">
        আগে থেকেই অ্যাকাউন্ট আছে?{" "}
        <Link href="/signin" className="font-semibold text-primary">
          সাইন ইন করুন
        </Link>
      </p>
    </div>
  );
};

export default SignUp;