import Link from "next/link";
import ToggleTheme from "../common/ToggleTheme/page";

export default function Navbar() {
    return (
        <div className="dark:bg-gray-800 bg-white p-4 flex space-x-4"> 
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/experiance">Experiance</Link>
            <ToggleTheme />
            <Link href="/contact">Contact</Link>
        </div>
    );
}