"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href='#Home'>
          <MenuItem setActive={setActive} active={active} item = 'Home'></MenuItem>
        </Link>
          <Link href='#about'>
          <MenuItem setActive={setActive} active={active} item = 'About'>
          </MenuItem>
          </Link>
          <Link href='#projects'>
          <MenuItem setActive={setActive} active={active} item = 'Projects'></MenuItem>
          </Link>
          <Link href='#contact'>
          <MenuItem setActive={setActive} active={active} item = 'Contact'>
          </MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item='Resume'>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink
              href="./pdf/amrutresume"
              download="AmrutDeshpande_Resume.pdf"
              className="flex items-center gap-2"
            >
              Download Resume
            </HoveredLink>
          </div>
        </MenuItem>
          
      </Menu>
    </div>
  )
}

export default Navbar
