import { IconCloudDemo } from "@/components/magicui/icon-cloud";

export const MySkills = () => {
  return (
    <div
      className="grid h-screen grid-cols-1 md:h-[80vh] md:grid-cols-2"
      id="#my-skills"
    >
      <div className="flex flex-col justify-center gap-3">
        <h1 className="text-5xl font-bold md:text-6xl">
          <span>My</span> <span className="colored">Skills</span>
        </h1>
        <p className="max-w-xl text-lg font-bold md:text-xl">
          What can I say? I am a fullstack developer and I have experience in
          many tech.
        </p>
      </div>
      <div className="grid place-items-center">
        <IconCloudDemo />
      </div>
    </div>
  );
};
