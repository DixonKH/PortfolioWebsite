"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc"
import { SiGithub, SiKakao } from "react-icons/si"
import { RiKakaoTalkFill } from "react-icons/ri";
import "../../globals.css";

export default function LoginClient() {
       const [loading, setLoading] = useState<string | null>(null);

       const handleSignIn = async (provider: string) => {
        setLoading(provider)
        await signIn(provider, { callbackUrl: "/" });
       }
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-10">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Welcome
            </h1>
            <p className="text-gray-300 mt-4 text-lg">Enter by one of the following methods</p>
          </div>

          <div className="space-y-5">
            {/* Google */}
            <button
              onClick={() => handleSignIn("google")}
              disabled={loading === "google"}
              className="group w-full cursor-pointer flex items-center justify-center gap-4 bg-white text-gray-800 py-5 px-6 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-70"
            >
              <FcGoogle size={28} />
              <span>Google</span>
              {loading === "google" && <span className="animate-spin">↻</span>}
            </button>

            {/* Kakao */}
            <button
              onClick={() => handleSignIn("kakao")}
              disabled={loading === "kakao"}
              className="group w-full flex cursor-pointer items-center justify-center gap-4 bg-[#FEE500] text-[#371D1E] py-5 px-6 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-70"
            >
              <RiKakaoTalkFill size={28} />
              <span>Kakao</span>
              {loading === "kakao" && <span className="animate-spin">↻</span>}
            </button>

            {/* GitHub */}
            <button
              onClick={() => handleSignIn("github")}
              disabled={loading === "github"}
              className="group w-full flex cursor-pointer items-center justify-center gap-4 bg-gray-900 text-white py-5 px-6 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-70"
            >
              <SiGithub size={28} />
              <span>GitHub</span>
              {loading === "github" && <span className="animate-spin">↻</span>}
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-400 text-sm mt-10">
            © 2024 Dixon — Full-Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
}
