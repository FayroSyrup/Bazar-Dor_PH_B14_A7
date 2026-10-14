"use client";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const SocialButtons = () => {
  const login = () => {
    authClient.signIn.social({ provider: "github", callbackURL: "/" });
  };

  return (
    <button onClick={login} className="btn btn-outline w-full">
      <FaGithub className="size-5" /> GitHub দিয়ে চালিয়ে যান
    </button>
  );
};

export default SocialButtons;