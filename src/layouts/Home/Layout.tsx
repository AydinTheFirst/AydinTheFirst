import { Footer } from "./Footer";
import { Nav } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};
