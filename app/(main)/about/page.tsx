import { CodeXml, Users, Rocket, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <div className="w-full mt-30 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-between items-center gap-4">
        <div className="text-sm font-bold text-primary uppercase text-center">About Me</div>
        <div className="text-5xl font-bold text-center">Who I am</div>
        <div className="dark:text-gray-400 text-lg mt-2 text-center">
          Passionate about creating seamless digital experiences
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="lg:w-1/2">
          <div className="border border-primary min-w-85 px-6 py-14 flex flex-col gap-6 rounded-2xl dark:bg-indigo-900/10 shadow-indigo-500/50 shadow-xl/40">
            <div className="flex md:flex-row flex-col justify-center items-start gap-3">
              <div className="font-bold flex justify-center items-center text-primary border p-4 rounded-2xl border-primary bg-gray-900">
                <Rocket />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <div className="text-xl font-bold ">Fast Learner</div>
                <div className="dark:text-gray-400 text-lg">
                  Constantly adapting to new technologies and industry best
                  practices to deliver cutting-edge solutions.
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-center items-start gap-3">
              <div className="font-bold flex justify-center items-center text-primary border p-4 rounded-2xl border-primary bg-gray-900">
                <Lightbulb />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <div className="text-xl font-bold ">Problem Solver</div>
                <div className="dark:text-gray-400 text-lg">
                  Analytical mindset with a passion for solving complex
                  technical challenges efficiently.
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-center items-start gap-3">
              <div className="font-bold flex justify-center items-center text-primary border p-4 rounded-2xl border-primary bg-gray-900">
                <Rocket />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <div className="text-xl font-bold">Team Player</div>
                <div className="dark:text-gray-400 text-lg">
                  Collaborative approach to development, working seamlessly with
                  designers and stakeholders.
                </div>
              </div>
            </div> 
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="min-w-100 px-8 py-14 flex flex-col gap-6 rounded-2xl">
            <div className="flex justify-center items-center gap-2">
              <div className="text-lg text-center lg:text-left">
                I'm a Full Stack Web Developer with over 3 years of experience
                in building scalable web and mobile applications. My journey in
                software development has been driven by a passion for creating
                elegant solutions to complex problems. 
                <div className="mt-4"></div>
                Specializing in modern JavaScript frameworks and technologies, I've successfully
                delivered numerous projects ranging from responsive websites to
                complex enterprise applications. My expertise spans both
                frontend and backend development, allowing me to handle projects
                end-to-end.
              </div>
            </div>
            <div className="w-full grid lg:grid-cols-2 mt-4 font-medium gap-6">
              <div className=" h-30 border border-primary rounded-2xl py-4 px-6 shadow-indigo-500/50 shadow-xl/30 flex flex-col justify-center items-start gap-2">
                <div className="text-4xl font-bold text-primary">3+</div>
                <div className="text-lg dark:text-gray-400">Year Experience</div>
              </div>
              <div className=" h-30 border border-primary rounded-2xl py-4 px-6 shadow-indigo-500/50 shadow-xl/30 flex flex-col justify-center items-start gap-2">
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="text-lg dark:text-gray-400">Project Completed</div>
              </div>
              <div className=" h-30 border border-primary rounded-2xl py-4 px-6 shadow-indigo-500/50 shadow-xl/30 flex flex-col justify-center items-start gap-2">
                <div className="text-4xl font-bold text-primary">20+</div>
                <div className="text-lg dark:text-gray-400">Happy Clients</div>
              </div>
              <div className=" h-30 border border-primary rounded-2xl py-4 px-6 shadow-indigo-500/50 shadow-xl/30 flex flex-col justify-center items-start gap-2">
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="text-lg dark:text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
