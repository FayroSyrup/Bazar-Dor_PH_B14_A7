"use client";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import { authClient } from "@/lib/auth-client";

const Profile = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-md space-y-4 rounded-2xl bg-base-100 p-6 text-center shadow-sm sm:p-8">
        <div className="avatar placeholder">
          <div className="w-24 rounded-full bg-primary text-3xl text-primary-content">
            {user?.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.image} alt={user.name} referrerPolicy="no-referrer" />
            ) : (
              <span>{user?.name.charAt(0).toUpperCase()}</span>
            )}
          </div>
        </div>
        <h1 className="text-2xl font-bold">{user?.name}</h1>
        <p className="text-base-content/70">{user?.email}</p>
        <Link href="/profile/update" className="btn btn-primary btn-sm sm:btn-md">
          তথ্য আপডেট করুন
        </Link>
      </div>
    </ProtectedRoute>
  );
};

export default Profile;