import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Send } from "lucide-react";
import { Mail } from "lucide-react";
import { CodeXml } from 'lucide-react';
import { Users } from 'lucide-react';
import HomeImg from "../../../public/HomeImg.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center mt-40">
      <div className="lg:w-1/2 flex flex-col justify-between items-center lg:items-start gap-4">
        <div className="text-primary font-bold text-lg border min-w-60 text-center rounded-full p-2 px-4 shadow-indigo-500/50 shadow-xl/30">
          Full Stack Developer
        </div>
        <div className="md:text-7xl text-4xl font-bold max-w-3xl text-center lg:text-left">
          Building Digital <span className="text-primary">Experiences</span>
        </div>
        <div className="md:text-xl text-md max-w-2xl min-w-80 dark:text-gray-400 text-center lg:text-left mt-5">
          +3 years of craftting exeptional web and mobile applications with
          modern technologies and best practices.
        </div>
        <div className="mt-6 flex flex-col lg:flex-row gap-6">
          <Link
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full font-medium min-w-45 py-4"
            href="/projects"
          >
            View My Work
            <span>
              <MoveRight />
            </span>
          </Link>
          <Link
            className="flex items-center justify-center dark:bg-gray-900 gap-2 border rounded-full font-medium min-w-50 py-4 shadow-indigo-500/50 shadow-xl/30"
            href="#contact"
          >
            Contact Me
            <span>
              <Mail />
            </span>
          </Link>
        </div>
        <div className="w-full flex lg:justify-start justify-center mt-6 mb-2">
          <Link
            className="border rounded-lg border-primary m-2 p-3"
            href="https://github.com/DixonKH" 
          >
            <Github />
          </Link>
          <Link
            className="border rounded-lg border-primary m-2 p-3"
            href="tme:@NeonCoding"
          >
            <Send />
          </Link>
          <Link
            className="border rounded-lg border-primary m-2 p-3"
            href="www.linkedin.com/in/dilshod-khaydarov-380260200"
          >
            <Linkedin />
          </Link>
          <Link
            className="border rounded-lg border-primary m-2 p-3"
            href="mailto:Khaydarovdilshod9@gmail.com"
          >
            <Mail />
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center">
        <div className="min-w-100 border border-primary px-8 py-14 flex flex-col gap-6 rounded-2xl backdrop-blur-3xl ">
          <div className="w-70 h-50 border-2 rounded-full blur-3xl bg-indigo-500 absolute -z-99 ml-14"></div>
          <div>
            <Image
              src={HomeImg}
              alt="Hero Image"
                className="rounded-2xl border border-primary w-full h-auto"
            />
          </div>
          <div className="w-full flex justify-between mt-4 text-xl font-medium gap-6">
            <div className="w-1/2 h-30 border border-primary rounded-2xl p-4">
                <div className="flex justify-between items-center text-lg text-gray-500">Projects<span className="text-primary"><CodeXml size={26} /></span></div>
                <div className="text-4xl font-black mt-2">20+</div>
            </div>
            <div className="w-1/2 h-30 border border-primary rounded-2xl p-4">
                <div className="flex justify-between items-center text-lg text-gray-500">Cliets<span className="text-primary"><Users size={24} /></span></div>
                <div className="text-4xl font-black mt-2">10+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
