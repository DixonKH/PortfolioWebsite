// src/app/admin/page.tsx
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"
import Image from "next/image"
import { FiLogOut, FiUsers, FiShield } from "react-icons/fi"
import { SiKakao } from "react-icons/si"
import Link from "next/link"
import "../../globals.css"

export default async function AdminPanel() {
  const session = await getServerSession(authOptions)

  if (!session) redirect("/login")
  if (session.user?.role !== "ADMIN") redirect("/")

  // Barcha userlarni olish
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      role: true,
      emailVerified: true,
    },
    orderBy: { emailVerified: "desc" },
  })

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-950 via-blue-950 to-indigo-950 p-6">
      {/* Background blur effect */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            ADMIN PANEL
          </h1>
          <p className="text-gray-300 text-xl mt-4">
            Welcome, <span className="font-bold text-purple-300">{session.user?.name}</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-center">
            <FiUsers className="w-12 h-12 mx-auto text-purple-400 mb-4" />
            <p className="text-5xl font-bold text-white">{users.length}</p>
            <p className="text-gray-300">All Users</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-center">
            <FiShield className="w-12 h-12 mx-auto text-green-400 mb-4" />
            <p className="text-5xl font-bold text-white">
              {users.filter(u => u.role === "ADMIN").length}
            </p>
            <p className="text-gray-300">Admins</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-center">
            <div className="w-12 h-12 mx-auto bg-yellow-500 rounded-full mb-4 flex items-center justify-center text-2xl">
              <SiKakao size={32} />
            </div>
            <p className="text-5xl font-bold text-white">
              {users.filter(u => u.email?.includes("kakao")).length}
            </p>
            <p className="text-gray-300">Kakao Users</p>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="p-8 border-b border-white/10">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <FiUsers /> Users Lists
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-300 border-b border-white/10">
                  <th className="p-6">Avatar</th>
                  <th className="p-6">Name</th>
                  <th className="p-6">Email</th>
                  <th className="p-6">Role</th>
                  <th className="p-6">Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-6">
                      {user.image ? (
                        <Image
                          src={user.image}
                          alt={user.name || "User"}
                          width={48}
                          height={48}
                          className="rounded-full ring-2 ring-purple-500/50"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                          {user.name?.[0] || "U"}
                        </div>
                      )}
                    </td>
                    <td className="p-6 text-white font-medium">{user.name || "Noma'lum"}</td>
                    <td className="p-6 text-gray-300">{user.email}</td>
                    <td className="p-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                        user.role === "ADMIN"
                          ? "bg-purple-600 text-white"
                          : "bg-gray-600 text-gray-300"
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="p-6">
                      {user.emailVerified ? (
                        <span className="text-green-400 flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          Verified
                        </span>
                      ) : (
                        <span className="text-yellow-400">Panding</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Logout */}
        <div className="text-center mt-12">
          <Link href="/">
            <button className="bg-linear-to-r cursor-pointer from-red-600 to-pink-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition transform hover:scale-105">
              <FiLogOut className="inline mr-3" />
              Go back
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}