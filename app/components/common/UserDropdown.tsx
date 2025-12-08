import { useState } from "react"
import { signOut } from "next-auth/react"
import Image from "next/image"
import { FiLogOut, FiUser } from "react-icons/fi"
import Link from "next/link"

export default function UserDropdown({session}: {session: any}) {
    const [isOpen, setIsOpen] = useState(false)
    return (
    <div className="relative">
      {/* Avatar – bosilganda dropdown ochiladi */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center gap-3 hover:ring-2 hover:ring-primary rounded-full transition-all"
      >
        {session.user?.image ? (
          <Image
            src={session.user.image}
            alt="Avatar"
            width={34}
            height={34}
            className="rounded-full ring-2 ring-primary shadow-lg"
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {session.user?.name?.[0] || "U"}
          </div>
        )}
        <span className="hidden md:block font-medium text-gray-700 dark:text-gray-300">
          {session.user?.name}
        </span>
      </button>

      {/* Dropdown – faqat ochiq bo‘lsa ko‘rinadi */}
      {isOpen && (
        <>
          {/* Backdrop – tashqariga bosganda yopiladi */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown menu */}
          <div className="absolute cursor-pointer right-0 mt-3 w-56 bg-white/10 backdrop-blur-2xl border rounded-2xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <p className="font-semibold text-gray-900 dark:text-white">
                {session.user?.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {session.user?.email}
              </p>
              {session.user?.role === "ADMIN" && (
                <Link href="/admin" className="inline-block mt-2 px-3 py-1 bg-purple-600 text-white text-xs rounded-full font-medium">
                  ADMIN
                </Link>
              )}
            </div>

            <div className="p-2">
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors text-primary font-medium"
              >
                <FiLogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}