import { Divider } from "@nextui-org/react";

const Footer = () => {
  return (
    <>
      <Divider />
      <footer className="px-6 py-10">
        <h4 className="text-center text-xl font-bold">
          {new Date().getFullYear()} © Halil Aydın. All rights reserved.
        </h4>
      </footer>
    </>
  );
};

export default Footer;
