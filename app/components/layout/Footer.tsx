import Link from "next/link";
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Send } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-18 py-12 border-t border-gray-600 dark:bg-black">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start items-center w-full lg:max-w-8xl px-8">
        <div className="flex flex-col gap-4 items-center lg:items-start justify-center mb-6 lg:mb-0">
          <div className="text-primary text-3xl font-bold flex items-center space-x-2">
            <span className="p-2 mask-l-from-40% mr-2 px-3.5 bg-primary text-white font-bold text-2xl rounded-md">
              N
            </span>
            <Link href="/">NeonCoding</Link>
          </div>
          <div className="text-lg lg:text-left text-center max-w-md">
            Building Digital Experiences with passion and precision. Let's
            create something amazing together. 
          </div>
          <div className="w-full flex lg:justify-start justify-center mt-2">
            <div className="border rounded-lg border-primary m-2 p-3">
              <Link href="/contact"><Github /></Link>
            </div>
            <div className="border rounded-lg border-primary m-2 p-3">
              <Link href="/about"><Linkedin /></Link>
            </div>
            <div className="border rounded-lg border-primary m-2 p-3">
              <Link href="/projects"><Send /></Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center lg:mt-0 mt-4">
            <div className="text-2xl font-medium">Quick Links</div>
            <div className="flex flex-col lg:items-start items-center justify-center gap-3 text-xl">
                <div className="hover:text-2xl transition-all hover:text-primary"><Link href="/">Home</Link></div>
                <div className="hover:text-2xl transition-all hover:text-primary"><Link href="/about">About</Link></div>
                <div className="hover:text-2xl transition-all hover:text-primary"><Link href="/skills">Skills</Link></div>
                <div className="hover:text-2xl transition-all hover:text-primary"><Link href="/projects">Projects</Link></div>
                <div className="hover:text-2xl transition-all hover:text-primary"><Link href="/experiance">Experiance</Link></div>
            </div>
        </div>
        <div className="flex flex-col gap-4 lg:items-start items-center justify-center lg:mt-0 mt-10">
            <div className="text-2xl font-medium">Contacts</div>
            <div className="flex flex-col gap-3 lg:items-start items-center text-xl">
            <div className="flex items-center gap-2"><span className="text-primary"><Mail /></span> <Link href="mailto:Khaydarovdilshod9@gmail.com">Khaydarovdilshod9@gmail.com</Link></div>
            <div className="flex items-center gap-2"><span className="text-primary"><Phone /></span> <Link href="tel:+821077766701">+821077766701</Link></div>
            <div className="flex items-center gap-2"><span className="text-primary"><MapPin /></span> Seoul, South Korea</div>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full border-t-gray-600 border-t py-6 mt-10 text-xl text-gray-500">2024 NeonCoding. All Rights Reserved!</div>
    </div>
  );
}
