import { SiGithub } from "@icons-pack/react-simple-icons";
import {
  Link,
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ThemeToggler } from "@/components/ThemeToggler";
import { GITHUB_URL } from "@/config";
import { menuItems } from "@/data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const path = useLocation().pathname;

  useEffect(() => {
    // smooth scroll to #id
    const anchorLinks = document.querySelectorAll("a[href^='#']");
    anchorLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId!);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <Nav isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="text-lg font-bold text-inherit">AydinTheFirst</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem isActive={path === item.href} key={index}>
            <Link color="foreground" href={item.href}>
              <strong>{item.label}</strong>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Link color="foreground" href={GITHUB_URL} isExternal>
          <SiGithub />
        </Link>
        <NavbarItem>
          <ThemeToggler />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full" color="foreground" href={item.href}>
              <strong>{item.label}</strong>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Nav>
  );
}

const AcmeLogo = () => <img alt="Logo" className="h-12" src="/logo.png" />;
