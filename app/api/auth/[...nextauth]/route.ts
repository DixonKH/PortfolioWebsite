import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.NEXTAUTH_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.NEXTAUTH_GITHUB_CLIENT_SECRET as string,
    }),
    KakaoProvider({
      clientId: process.env.NEXTAUTH_KAKAO_CLIENT_ID! as string,
      clientSecret: process.env.NEXTAUTH_KAKAO_CLIENT_SECRET! as string,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name:
            profile.kakao_nickname ||
            profile.properties?.nickname ||
            `User${profile.id}`, // name bo‘lmasa – fallback
          email: profile.kakao_account?.email || null,
          image: profile.kakao_account?.profile?.profile_image_url || null,
          role: "USER",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    session: async ({ session, user }: any) => {
      session.user.id = user.id;
      session.user.role = user.role;
      return session;
    },
  },
};

const handler = NextAuth(authOptions as any);
export { handler as GET, handler as POST };
