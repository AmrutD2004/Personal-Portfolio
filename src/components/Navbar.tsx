"use client"

import Link from "next/link"
import { FiMenu } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 w-full px-6 py-4 flex items-center justify-center bg-black">

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-6">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <NavigationMenuItem key={item}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={`#${item.toLowerCase()}`}>{item}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link
                href="/pdf/AmrutDeshpandeResume.pdf"
                download="AmrutDeshpande_Resume.pdf"
              >
                Resume
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu */}
      <div className="md:hidden">
  <Popover>
    <PopoverTrigger asChild>
      <Button
        className="bg-black text-white border-none hover:bg-black focus:ring-0 focus:outline-none"
        size="icon"
      >
        <FiMenu className="h-6 w-6" />
      </Button>
    </PopoverTrigger>
    <PopoverContent align="end" className="w-56 p-4">
      <nav className="flex flex-col gap-3">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-primary text-sm font-medium"
          >
            {item}
          </Link>
        ))}
        <Link
          href="/pdf/AmrutDeshpandeResume.pdf"
          download="AmrutDeshpande_Resume.pdf"
          className="hover:text-primary text-sm font-medium"
        >
          Resume
        </Link>
      </nav>
    </PopoverContent>
  </Popover>
</div>
    </header>
  )
}

export default Navbar
