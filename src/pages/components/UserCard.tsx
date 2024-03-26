import { Card, Avatar, CardBody, Input, Button } from "@nextui-org/react";
import { useEffect } from "react";

export const UserCard = () => {
  useEffect(() => {
    for (const e of document.querySelectorAll(".user-card input")) {
      e.setAttribute("disabled", "true");
    }
  }, []);

  return (
    <Card className="relative">
      <div className="h-[100px] rounded-lg bg-gradient-to-tr from-green-500 to-blue-500" />
      <div
        className="flex justify-center"
        style={{
          position: "absolute",
          top: "70px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Avatar
          src="https://avatars.githubusercontent.com/u/84444757?v=4"
          size="lg"
        />
      </div>
      <div style={{ height: "25px" }} />
      <div>
        <h1 className="text-3lg text-center font-bold">Halil Aydın</h1>
        <p className="text-center text-gray-500">AydinTheFirst</p>
      </div>
      <CardBody>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="user-card row g-3"
        >
          <Input className="col-md-6" label="Name" defaultValue="Halil" />
          <Input className="col-md-6" label="Surname" defaultValue="Aydın" />

          <Input label="Username" defaultValue="AydinTheFirst" />

          <Input label="Email" defaultValue="hello@aydinthefirst.com" />

          <Input
            label="Secondary Email"
            defaultValue="aydinhalil980@gmail.com"
          />

          <Input label="Birth Date" defaultValue={"25 September 2004"} />

          <Input label="Location" defaultValue="Turkey" />

          <div className="col-12">
            <Button
              as={"a"}
              href={
                "https://drive.google.com/file/d/1WiyDsBQiucTK52k_ioZ5vWpmbAmIKO0d/view?usp=drive_link"
              }
              color="primary"
              size="sm"
              fullWidth
              target="_blank"
            >
              Download CV
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};
