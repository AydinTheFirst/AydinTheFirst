import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Slider,
  Input,
  Textarea,
  Button,
} from "@nextui-org/react";
import { UserCard } from "./UserCard";
import { FaEnvelope, FaFile, FaUser } from "react-icons/fa";
import { LayoutGridDemo } from "./Grids";

export const MyProfile = () => {
  return (
    <div className="container my-10">
      <div className="row g-3">
        <div className="col-md-4">
          <UserCard />
        </div>
        <div className="col-md-8">
          <div className="container">
            <div className="row g-3">
              <div className="col-12">
                <TabTab />
              </div>
              <div className="col-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabTab = () => {
  return (
    <>
      <div className="flex w-full flex-col">
        <Tabs color="primary" variant="underlined" aria-label="Options">
          <Tab
            title={
              <div className="flex items-center space-x-2">
                <FaUser />
                <span>About me</span>
              </div>
            }
          >
            <AboutMe />
          </Tab>
          <Tab
            title={
              <div className="flex items-center space-x-2">
                <FaFile />
                <span>Resume</span>
              </div>
            }
          >
            <Resume />
          </Tab>

          <Tab
            title={
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <span>Contact me</span>
              </div>
            }
          >
            <ContactMe />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

const AboutMe = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl font-bold">About me</h3>
      </CardHeader>
      <CardBody>
        <div className="container">
          <p>
            Hi, I am Halil Aydın Im {new Date().getFullYear() - 2004} years old.
            I am focused on full-stack development and I am passionate about
            creating beautiful and functional web applications.
            <br />I graduated from high school in 2022 and I am currently
            studying English language and literature at university.
            <br /> I am coding since 2022 and I have been working as a
            freelancer since then. I am a self-taught developer and I am always
            looking for new things to learn.
            <br />I am a quick learner and very adaptable. I am a team player
            and I am always ready to help my my teammates.
            <br />
            I do not any experience in a company but I have worked on many
            projects.
            <br /> I have experience in React, NodeJS, ExpressJS, MongoDB,
            TailwindCSS, Docker, AWS, and many more. I am always looking for new
            opportunities to learn and grow.
          </p>
        </div>
        <LayoutGridDemo />
      </CardBody>
    </Card>
  );
};

const Resume = () => {
  const marks = [
    {
      value: 20,
      label: "20%",
    },
    {
      value: 50,
      label: "50%",
    },
    {
      value: 80,
      label: "80%",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl font-bold">Resume</h3>
      </CardHeader>
      <CardBody>
        <div className="container">
          <Slider label="Frontend" marks={marks} value={75} />

          <Slider label="Backend" marks={marks} color="danger" value={90} />

          <Slider
            label="Design"
            marks={marks}
            color="foreground"
            defaultValue={60}
          />

          <Slider label="Marketing" marks={marks} color="success" value={40} />

          <Slider label="Management" marks={marks} color="warning" value={95} />

          <Slider
            label="Communication"
            marks={marks}
            color="secondary"
            value={85}
          />
        </div>
      </CardBody>
    </Card>
  );
};

const ContactMe = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    window.open(
      `mailto:hello@aydinthefirst.com?subject=${data.subject}&body=${data.message + "\nRegards, " + data.name}`,
    );
  };

  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl font-bold">Contact me</h3>
      </CardHeader>
      <CardBody>
        <div className="container">
          <form onSubmit={handleSubmit} className="row g-3">
            <Input label="Name" name="name" variant="underlined" required />
            <Input
              label="Subject"
              name="subject"
              variant="underlined"
              required
            />
            <Textarea
              label="Message"
              name="message"
              variant="underlined"
              required
            />
            <div className="col-12">
              <Button type="submit" color="primary">
                Send
              </Button>
            </div>
          </form>
        </div>
      </CardBody>
    </Card>
  );
};
