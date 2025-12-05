import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {prisma} from "@/lib/prisma";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.NEXTAUTH_GITHUB_ID as string,
            clientSecret: process.env.NEXTAUTH_GITHUB_SECRET as string,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
    callbacks: {
         session: async ({ session, user } : any) => {
            session.user.id = user.id;
            session.user.role = user.role;
            return session;
        },
    },
};

const handler = NextAuth(authOptions as any);
export { handler as GET, handler as POST };