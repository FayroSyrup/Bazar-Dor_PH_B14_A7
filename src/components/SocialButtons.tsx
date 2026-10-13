"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const SocialButtons = () => {
  const login = (provider: "google" | "github") => {
    authClient.signIn.social({ provider, callbackURL: "/" });
  };

  return (
    <div className="space-y-2">
      <button onClick={() => login("google")} className="btn btn-outline w-full">
        <FcGoogle className="size-5" /> Google দিয়ে চালিয়ে যান
      </button>
      <button onClick={() => login("github")} className="btn btn-outline w-full">
        <FaGithub className="size-5" /> GitHub দিয়ে চালিয়ে যান
      </button>
    </div>
  );
};

export default SocialButtons;