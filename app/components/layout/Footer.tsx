import Link from "next/link";
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Send } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <div className="w-full flex justify-center items-center px-18 py-12 border-t border-gray-600 dark:bg-black">
      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-8xl px-8">
        <div className="flex flex-col gap-4">
          <div className="text-primary text-3xl font-bold flex items-center space-x-2">
            <span className="p-2 mask-l-from-40% mr-2 px-3.5 bg-primary text-white font-bold text-2xl rounded-md">
              N
            </span>
            NeonCoding
          </div>
          <div className="text-lg">
            Building Digital Experiences with passion and precision. Let's
            create something amazing together. 
          </div>
          <div className="w-full flex">
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
        <div className="flex flex-col gap-4 items-center justify-center">
            <div className="text-2xl font-medium">Quick Links</div>
            <div className="flex flex-col gap-3 text-xl">
                <div className="hover:text-2xl transition-all hover:text-primary"><Link href="/">Home</Link></div>
                <div className="hover:text-2xl transition-all hover:text-primary"><Link href="/about">About</Link></div>
                <div className="hover:text-2xl transition-all hover:text-primary"><Link href="/skills">Skills</Link></div>
                <div className="hover:text-2xl transition-all hover:text-primary"><Link href="/projects">Projects</Link></div>
                <div className="hover:text-2xl transition-all hover:text-primary"><Link href="/experiance">Experiance</Link></div>
            </div>
        </div>
        <div className="flex flex-col gap-4 items-start justify-center">
            <div className="text-2xl font-medium">Contacts</div>
            <div className="flex flex-col gap-3 text-xl">
            <div className="flex items-center gap-2"><span className="text-primary"><Mail /></span> <Link href="mailto:Khaydarovdilshod9@gmail.com">Khaydarovdilshod9@gmail.com</Link></div>
            <div className="flex items-center gap-2"><span className="text-primary"><Phone /></span> <Link href="tel:+821077766701">+821077766701</Link></div>
            <div className="flex items-center gap-2"><span className="text-primary"><MapPin /></span> Seoul, South Korea</div>
            </div>
        </div>
      </div>
    </div>
  );
}
