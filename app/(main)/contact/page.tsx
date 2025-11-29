import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

export default function Contact() {
    return (
       <div className="w-full flex flex-col justify-center items-center mt-35 gap-16 mb-24">
             <div className="flex flex-col justify-center items-center gap-4">
               <div className="text-sm font-bold text-primary text-center uppercase">
                 Get in Touch
               </div>
               <div className="text-5xl font-bold text-center">Let's Work Together</div>
               <div className="dark:text-gray-400 text-lg mt-2 text-center">
                 Have a project in mind? Let's discuss how I can help bring your ideas to life.
               </div>
             </div>
             <div className="w-full flex justify-center items-center">
                <div className="lg:w-8/12 w-full border flex flex-col justify-center items-center gap-6 border-gray-800 rounded-lg p-2 lg:p-12 shadow-lg bg-white dark:bg-gray-900/10">
                    <form className="flex flex-col gap-6 w-full">
                        <div className="flex md:flex-row flex-col w-full justify-between gap-4">
                            <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="p-4 md:w-1/2 border  border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="p-4 md:w-1/2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Project Inquiry" 
                            className="p-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <textarea 
                            placeholder="Your Message" 
                            className="p-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-48"
                        ></textarea>
                        <button 
                            type="submit" 
                            className="bg-primary text-white font-bold py-4 px-6 rounded-md hover:bg-primary-dark transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                    <div className="border border-gray-800 w-full"></div>
                    <div className="flex md:flex-row flex-col justify-between items-center w-full mt-4 gap-6">
                        <div className="flex w-full md:w-1/3 flex-col gap-2 items-center">
                            <div className="flex justify-center items-center border rounded-lg text-primary border-primary w-12 h-12"><MdEmail size={22} /></div>
                            <Link href="mailto:Khaydarovdilshod9@.com" className="font-bold text-lg">Email</Link>
                            <div className="text-gray-400">Khaydarovdilshod9@.com</div>
                        </div>
                         <div className="flex w-full md:w-1/3 flex-col gap-2 items-center">
                            <div className="flex justify-center items-center border rounded-lg text-primary border-primary w-12 h-12"><FaPhoneAlt size={22} /></div>
                            <div className="font-bold text-lg">Phone</div>
                            <div className="text-gray-400">+82 10 7776 67 01</div>
                        </div>
                        <div className="flex w-full md:w-1/3 flex-col gap-2 items-center">
                            <div className="flex justify-center items-center border rounded-lg text-primary border-primary w-12 h-12"><FaLocationDot size={22} /></div>
                            <div className="font-bold text-lg">Location</div>
                            <div className="text-gray-400">Seoul, South Korea</div>
                        </div>
                    </div>
                </div>
             </div>
           </div>
    );
}