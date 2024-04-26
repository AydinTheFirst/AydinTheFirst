import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

const pages = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "My Skills",
    href: "#my-skills",
  },
  {
    title: "More About Me",
    href: "#more-about-me",
  },
];

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    const smoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          const el = e.currentTarget as HTMLAnchorElement;
          document.querySelector(el.getAttribute("href")!)?.scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    };

    smoothScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console && console.log("isScrolled", isScrolled);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      style={{
        boxShadow: "0 4px 12px rgba(15, 15, 15, 1)",
        zIndex: 1000,
      }}
      isBordered={isScrolled}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">AydinTheFirst</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        {pages.map((page) => (
          <NavbarItem key={page.title}>
            <Link color="foreground" href={page.href} size="sm">
              <b>{page.title}</b>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {pages.map((page) => (
          <NavbarMenuItem key={page.title}>
            <Link color="foreground" href={page.href} size="sm">
              <b>{page.title}</b>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export const AcmeLogo = () => (
  <>
    <Avatar
      src="https://avatars.githubusercontent.com/u/84444757?v=4"
      alt="ACME Logo"
      size="md"
      className="mr-2"
    />
  </>
);
