"use client";
import Link from "next/link";
import ToggleTheme from "../common/ToggleTheme/page";
import { usePathname } from "next/navigation";

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experiance", href: "/experiance" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="dark:bg-black bg-white stiky w-full p-8 flex justify-between items-center shadow-md px-24 py-6">
      <div className="text-primary text-3xl font-bold flex items-center space-x-2 mb-4">
        <span className="p-2 mask-l-from-40% mr-2 px-3.5 bg-primary text-white font-bold text-2xl rounded-md">
          N
        </span>
        NeonCoding
      </div>
      <div className="flex items-center  space-x-4 text-2xl gap-4">
        <div className="flex space-x-6 text-lg font-medium">
          {NavLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={
                  isActive ? "font-bold text-primary text-2xl" : "text-2xl"
                }
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <ToggleTheme />
        <div className="bg-primary text-primary-foreground rounded-full font-medium px-6 py-3">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
