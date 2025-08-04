"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FiMenu } from "react-icons/fi"; // hamburger icon

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className={cn("fixed top-0 left-0 w-full z-50", className)}>
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center">
        <Menu setActive={setActive}>
          <Link href="#Home"><MenuItem setActive={setActive} active={active} item="Home" /></Link>
          <Link href="#about"><MenuItem setActive={setActive} active={active} item="About" /></Link>
          <Link href="#projects"><MenuItem setActive={setActive} active={active} item="Projects" /></Link>
          <Link href="#contact"><MenuItem setActive={setActive} active={active} item="Contact" /></Link>
          <MenuItem setActive={setActive} active={active} item="Resume">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink
                href="./pdf/amrutresume.pdf"
                download="AmrutDeshpande_Resume.pdf"
                className="flex items-center gap-2"
              >
                Download Resume
              </HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center justify-between px-6 py-4 md:hidden bg-white dark:bg-black shadow-md">
        <span className="font-bold text-lg text-black dark:text-white">Amrut.dev</span>
        <button onClick={toggleMobileMenu} className="text-2xl text-black dark:text-white">
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-white dark:bg-black py-6 shadow-lg">
          <a href="#Home" onClick={toggleMobileMenu} className="text-black dark:text-white">Home</a>
          <a href="#about" onClick={toggleMobileMenu} className="text-black dark:text-white">About</a>
          <a href="#projects" onClick={toggleMobileMenu} className="text-black dark:text-white">Projects</a>
          <a href="#contact" onClick={toggleMobileMenu} className="text-black dark:text-white">Contact</a>
          <a
            href="./pdf/amrutresume.pdf"
            download="AmrutDeshpande_Resume.pdf"
            className="text-black dark:text-white"
          >
            Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
