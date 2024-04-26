import { IconContainer } from "@/components/Acernity/IconContainer";
import { Radar } from "@/components/Acernity/Radar";
import { DiDocker, DiMongodb } from "react-icons/di";
import { FaAws, FaGlobe, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si";

export const SkillRadar = () => {
  return (
    <>
      <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
        My Skills
      </h1>
      <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              delay={0.7}
              text="NodeJS"
              icon={<FaNodeJs className=" h-8 w-8 text-green-500" />}
            />
            <IconContainer
              delay={0.4}
              text="React"
              icon={<FaReact className="h-8 w-8 text-blue-500" />}
            />
            <IconContainer
              text="MongoDB"
              delay={0.3}
              icon={<DiMongodb className="h-8 w-8 text-green-700" />}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              text="Tailwind"
              delay={0.5}
              icon={<SiTailwindcss className="h-8 w-8 text-cyan-500" />}
            />
            <IconContainer
              text="ExpressJS"
              icon={<SiExpress className=" h-8 w-8 text-indigo-500" />}
              delay={0.8}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              delay={0.6}
              text="Docker"
              icon={<DiDocker className=" h-8 w-8 text-blue-600" />}
            />
            <IconContainer
              text="Web Development"
              delay={0.2}
              icon={<FaGlobe className="h-8 w-8 text-green-500" />}
            />
            <IconContainer
              delay={0.7}
              text="AWS"
              icon={<FaAws className=" h-8 w-8 text-yellow-600" />}
            />
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>
    </>
  );
};
