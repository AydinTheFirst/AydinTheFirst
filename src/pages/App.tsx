import { Section } from "@/components";
import { SparklesCore } from "@/components/Acernity/Sparkles";
import { TextGenerateEffect } from "@/components/Acernity/TextGenerate";
import { Button } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { SkillRadar } from "./components/SkillRadar";
import { MyProfile } from "./components/MyProfile";
import { Layout } from "@/layouts/Home";
import { Link } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Layout>
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={100}
          className="absolute left-0 top-0 h-full w-full"
          particleColor="#FFFFFF"
        />

        <Section id="home">
          <LandingSection />
        </Section>

        <Section id="my-skills">
          <SkillRadar />
        </Section>

        <Section id="more-about-me">
          <MyProfile />
        </Section>
      </Layout>
    </>
  );
};

const LandingSection = () => {
  const words = `I am a full-stack developer with a passion for creating beautiful and functional web applications.`;

  const handleExplore = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="max-w-3xl text-center">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
          Halil Aydın
        </h1>
        <br />
        <TextGenerateEffect words={words} />
      </div>
      <br />
      <div className="flex justify-center gap-3">
        <Button
          className="font-bold"
          color="primary"
          variant="shadow"
          onClick={handleExplore}
        >
          Explore More
        </Button>
        <Button
          as={Link}
          startContent={<FaGithub className="text-lg" />}
          className="font-bold"
          to="https://github.com/AydinTheFirst"
          target="_blank"
          variant="flat"
        >
          Github
        </Button>
      </div>
      <br />
      <div>
        <img src="https://github-readme-stats.vercel.app/api?username=AydinTheFirst&show_icons=true&theme=dark" />
      </div>
    </>
  );
};
