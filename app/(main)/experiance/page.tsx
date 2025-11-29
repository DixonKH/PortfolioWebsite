import { IoMdCheckmarkCircle } from "react-icons/io";

export default function Experiance() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-35 gap-16">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-sm font-bold text-primary text-center uppercase">
          Career
        </div>
        <div className="text-5xl font-bold text-center">Work Experience</div>
        <div className="dark:text-gray-400 text-lg mt-2 text-center">
          My professional journey and achievements
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 justify-center items-center">
        <div className="flex w-full flex-col justify-between items-start border rounded-2xl shadow-indigo-500/50 shadow-xl/30 gap-2 lg:p-7 p-5">
          <div className="text-2xl font-bold">Middle Full Stack Developer</div>
          <div className="w-full flex justify-between items-center dark:text-gray-400">
            <div className="text-lg font-medium">Freelance.</div>
            <div className="text-primary font-bold shadow-indigo-500/50 p-3 dark:bg-gray-900 rounded-full">
              2023-Present
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="flex justify-center items-center gap-2">
              <IoMdCheckmarkCircle className="text-primary text-xl" /> Led
              development of enterprise-level web applications serving 100K+
              users
            </div>
            <div className="flex justify-center items-center gap-2">
              <IoMdCheckmarkCircle className="text-primary text-xl" />
              Architected scalable microservices using Node.js and NestJS
            </div>
            <div className="flex justify-center items-center gap-2">
              <IoMdCheckmarkCircle className="text-primary text-xl" /> Mentored
              junior developers and conducted code reviews
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col justify-between items-start border rounded-2xl shadow-indigo-500/50 shadow-xl/30 gap-2 lg:p-7 p-5">
          <div className="text-2xl font-bold">Frontend Developer</div>
          <div className="w-full flex justify-between items-center dark:text-gray-400">
            <div className="text-lg font-medium">Tech Solution ltd</div>
            <div className="text-primary font-bold shadow-indigo-500/50 p-3 dark:bg-gray-900 rounded-full">
              2021-2023
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="flex justify-center items-center gap-2">
              <IoMdCheckmarkCircle className="text-primary text-xl" /> Developed responsive web applications using React and Next.js
            </div>
            <div className="flex justify-center items-center gap-2">
              <IoMdCheckmarkCircle className="text-primary text-xl" />
              Built RESTful APIs and integrated third-party services
            </div>
            <div className="flex justify-center items-center gap-2">
              <IoMdCheckmarkCircle className="text-primary text-xl" /> Mentored
            Improved application performance by 40% through optimization
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
