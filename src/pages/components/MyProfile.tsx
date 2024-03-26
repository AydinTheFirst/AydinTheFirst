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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
          <Slider label="Frontend" marks={marks} defaultValue={75} />

          <Slider
            label="Backend"
            marks={marks}
            color="danger"
            defaultValue={90}
          />

          <Slider
            label="Design"
            marks={marks}
            color="foreground"
            defaultValue={60}
          />

          <Slider
            label="Marketing"
            marks={marks}
            color="success"
            defaultValue={80}
          />

          <Slider
            label="Management"
            marks={marks}
            color="warning"
            defaultValue={95}
          />

          <Slider
            label="Communication"
            marks={marks}
            color="secondary"
            defaultValue={85}
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
