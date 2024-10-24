import { Divider } from "@nextui-org/react";

import { AboutMe } from "./_components/AboutMe";
import { ContactMe } from "./_components/ContactMe";
import { Hero } from "./_components/Hero";
import { MySkills } from "./_components/MySkills";

const Index = () => {
  return (
    <div className="grid gap-5">
      <Hero />
      <Divider />
      <AboutMe />
      <Divider />
      <MySkills />
      <Divider />
      <ContactMe />
    </div>
  );
};

export default Index;
