"use client";
import { signIn } from "next-auth/react";

export default function LoginClient() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-12 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-10">Kirish</h1>
        <div className="space-y-4">
          <button onClick={() => signIn("google", { callbackUrl: "/" })}>
            <button className="w-full py-4 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700">
              Google bilan kirish
            </button>
          </button>
          <button onClick={() => signIn("github", { callbackUrl: "/" })}>
            <button className="w-full py-4 bg-gray-800 text-white rounded-lg font-medium hover:bg-black">
              GitHub bilan kirish
            </button>
          </button>
          <button onClick={() => signIn("kakao", { callbackUrl: "/" })}>
            <button className="w-full py-4 bg-gray-800 text-white rounded-lg font-medium hover:bg-black">
              KakaoTalk bilan kirish
            </button>
          </button>
        </div>
      </div>
    </div>
  );
}
