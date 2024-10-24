import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button, Link } from "@nextui-org/react";
import { LucideRocket } from "lucide-react";
import { useTheme } from "next-themes";

import heroBg from "@/assets/hero-bg.png";
import personOne from "@/assets/person-one.png";
import { GITHUB_URL } from "@/config";

export const Hero = () => {
  const { resolvedTheme } = useTheme();
  return (
    <>
      <div
        className="grid h-screen grid-cols-1 md:h-[80vh] md:grid-cols-2"
        id="#"
      >
        <div className="flex flex-col justify-center gap-3">
          <h3 className="text-xl font-bold md:text-3xl">Hello, I'm</h3>
          <h1 className="colored text-4xl font-bold md:text-7xl">
            AydinTheFirst
          </h1>
          <p className="max-w-md text-lg font-bold md:text-xl">
            I'm a fullstack web developer with a passion for building beautiful
            and functional websites.
          </p>
          <div className="flex items-center gap-1">
            <Button
              color="primary"
              startContent={<LucideRocket />}
              variant="shadow"
            >
              <strong>Explore my work</strong>
            </Button>
            <Button
              as={Link}
              color="default"
              href={GITHUB_URL}
              isExternal
              startContent={<SiGithub />}
              variant="light"
            >
              <strong>Github</strong>
            </Button>
          </div>
        </div>
        <div className="grid place-items-center" style={heroBgStyle}>
          <div className="h-72 w-72 md:h-96 md:w-96" style={heroPersonStyle} />
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=AydinTheFirst&show_icons=true&theme=${resolvedTheme}`}
        ></img>
      </div>
    </>
  );
};

const heroBgStyle: React.CSSProperties = {
  backgroundImage: `url(${heroBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};

const heroPersonStyle: React.CSSProperties = {
  backgroundImage: `url(${personOne})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};
