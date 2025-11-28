import SkillsPage from "@/app/components/skillsComponent/page";

export default function Skills() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-35 gap-16">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-sm font-bold text-primary text-center uppercase">
          Skills & Technologies
        </div>
        <div className="text-5xl font-bold text-center">Tech Stack</div>
        <div className="dark:text-gray-400 text-lg mt-2 text-center">
          Proficient in modern web technologies and frameworks
        </div>
      </div>
      <div className="w-full">
          <SkillsPage />
      </div>
    </div>
  );
}
