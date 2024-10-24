import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
} from "@nextui-org/react";

import { EMAIL } from "@/config";

export const ContactMe = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const mailUrl = `mailto:${EMAIL}?subject=${data.subject}&body=${data.body}`;

    window.open(mailUrl);
  };

  return (
    <div
      className="grid h-screen grid-cols-1 md:h-[80vh] md:grid-cols-2"
      id="#contact"
    >
      <div className="flex flex-col justify-center gap-3">
        <h1 className="text-5xl font-bold md:text-6xl">
          <span>Contact</span> <span className="colored">me</span>
        </h1>
        <p className="max-w-md text-lg font-bold md:text-xl">
          Do you have a project in mind? Do you want to work with me? Do you
          have any questions? Feel free to contact me. I am always ready to
          help.
        </p>
      </div>
      <div className="grid place-items-center">
        <Card className="w-full">
          <CardHeader>
            <h3 className="text-2xl font-bold">Send me a message</h3>
          </CardHeader>
          <CardBody>
            <form className="grid grid-cols-12 gap-5" onSubmit={handleSubmit}>
              <Input
                className="col-span-12 md:col-span-6"
                description="Your full name"
                isRequired
                label="Name"
                name="name"
              />
              <Input
                className="col-span-12 md:col-span-6"
                description="The subject of your message"
                isRequired
                label="Subject"
                name="subject"
              />
              <Textarea
                className="col-span-12"
                description="Your message"
                isRequired
                label="Message"
                name="body"
              />
              <Button
                className="col-span-12"
                color="primary"
                fullWidth
                type="submit"
              >
                <strong>Send</strong>
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
