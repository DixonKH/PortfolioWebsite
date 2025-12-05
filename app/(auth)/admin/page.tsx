import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Admin() {
  const session = await getServerSession(authOptions);
  console.log("session", session);

  if (!session) redirect("/login");
  if (session.user?.role !== "ADMIN") {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 to-blue-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl text-white max-w-2xl w-full">
        <h1 className="text-5xl font-bold text-center mb-10">
          ADMIN TEST PANEL
        </h1>

        <div className="space-y-6 text-lg">
          <p>
            <strong>Ism:</strong> {session.user?.name || "Yo‘q"}
          </p>
          <p>
            <strong>Email:</strong> {session.user?.email || "Yo‘q"}
          </p>
          <p>
            <strong>User ID:</strong>{" "}
            <code className="bg-black/30 px-3 py-1 rounded">
              {session.user?.id}
            </code>
          </p>

          <div className="bg-yellow-600/30 p-6 rounded-xl border-2 border-yellow-500">
            <p className="text-3xl font-bold">
              ROLE:{" "}
              <span className="text-yellow-300">
                {session.user?.role || "USER"}
              </span>
            </p>
            {session.user?.role === "ADMIN" ? (
              <p className="text-2xl mt-4">Siz ADMIN siz! 🎉</p>
            ) : (
              <p className="text-xl mt-4 text-red-300">
                Role hali "USER". MongoDB’da "ADMIN" qilib qo‘ying!
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 text-center">
          <form action="/api/auth/signout" method="post">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-xl font-bold">
              Chiqish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
