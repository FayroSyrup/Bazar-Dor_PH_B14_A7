"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ProtectedRoute from "@/components/ProtectedRoute";
import { authClient } from "@/lib/auth-client";

const UpdateProfile = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = String(new FormData(e.currentTarget).get("name")).trim();

    if (!name) {
      toast.error("নাম লিখুন");
      return;
    }

    setLoading(true);
    const { error } = await authClient.updateUser({ name });
    setLoading(false);

    if (error) {
      toast.error(error.message || "আপডেট ব্যর্থ হয়েছে");
      return;
    }

    toast.success("তথ্য আপডেট হয়েছে");
    router.push("/profile");
  };

  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-md space-y-5 rounded-2xl bg-base-100 p-6 shadow-sm sm:p-8">
        <h1 className="text-center text-2xl font-bold">তথ্য আপডেট</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* key makes the field fill again once the session has loaded */}
          <input
            key={session?.user.name}
            name="name"
            defaultValue={session?.user.name}
            placeholder="নাম"
            className="input input-bordered w-full"
          />
          <button disabled={loading} className="btn btn-primary w-full">
            {loading ? <span className="loading loading-spinner" /> : "তথ্য আপডেট করুন"}
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
};

export default UpdateProfile;