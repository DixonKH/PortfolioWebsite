"use client";
import Link from "next/link";
import ToggleTheme from "../common/ToggleTheme/page";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
const NavLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experiance", href: "#experiance" },
];

export default function Navbar() {
 // const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="dark:bg-black bg-white fixed top-0 right-0 left-0 z-999 w-full p-8 flex justify-between items-center shadow-md lg:px-24 py-5 lg:py-6">
      <div className="text-primary lg:text-2xl text-xl font-bold flex items-center">
        <span className="p-2 mask-l-from-40% mr-2 px-3.5 bg-primary text-white font-bold text-xl lg:text-2xl rounded-md">
          N
        </span>
        <Link href="#hero">NeonCoding</Link>
      </div>
      <nav className="flex items-center lg:text-xl gap-4">
        <div className="hidden lg:flex space-x-6 lg:text-lg md:text-sm font-medium">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <ToggleTheme />
        <div className="hidden lg:flex bg-primary text-primary-foreground rounded-full font-medium px-5 py-2">
          <Link href="#contact">Contact</Link>
        </div>
        <button className="flex lg:hidden" onClick={() => setIsOpen(true)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-background bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <div>
            <Link
              className="bg-primary text-primary-foreground text-xl rounded-full font-medium px-6 py-3"
              href="#contact"
            >
              Contact
            </Link>
          </div>
          <div className="text-primary lg:text-3xl text-2xl font-bold flex items-center absolute top-8 left-8">
            <span className="p-2 mask-l-from-40% mr-2 px-3.5 bg-primary text-white font-bold lg:text-2xl  rounded-md">
              N
            </span>
            <Link href="#hero">NeonCoding</Link>
          </div>
          <button
            className="absolute top-8 right-8 text-3xl"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>
        </div>
      )}
    </div>
  );
}
