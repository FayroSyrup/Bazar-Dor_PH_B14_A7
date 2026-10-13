"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const pathname = usePathname();

  // not logged in: show a toast and send to signin, then come back after login
  useEffect(() => {
    if (!isPending && !session) {
      toast.error("এই পেজ দেখতে আগে সাইন ইন করুন", { id: "auth-required" });
      router.replace(`/signin?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [isPending, session, router, pathname]);

  if (isPending || !session) {
    return (
      <div className="space-y-4">
        <div className="skeleton h-40 w-full" />
        <div className="skeleton h-24 w-full" />
        <div className="skeleton h-64 w-full" />
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;