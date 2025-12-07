import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LoginClient from "../loginClient/page";

export default async function Login() {
  const session = await getServerSession(authOptions);
  console.log("session login user", session);
  if (session) redirect("/");

  return <LoginClient />;
}