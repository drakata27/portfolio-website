"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ExternalLink, Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`mb-5 px-5 py-3 sticky top-0 w-full z-10 transition-all ${
        scrolled ? "bg-opacity-20" : "bg-transparent bg-opacity-20"
      } backdrop-blur-lg`}
    >
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <Link className="hover-animation-2" href="/">
          <span className="text-xl font-bold ">&lt;aleksdraka /&gt;</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Link className="hover-animation-2" href="#about">
            About
          </Link>
          <Link className="hover-animation-2" href="#experience">
            Experience
          </Link>
          <Link className="hover-animation-2" href="#skills">
            Skills
          </Link>
          <Link className="hover-animation-2" href="#projects">
            Projects
          </Link>
          <Link className="hover-animation-2" href="#contact">
            Contact
          </Link>
          <Link
            className="hover-animation"
            href="https://blog.aleksdraka.online"
            target="blank"
          >
            <Button className="hover-animation">
              Blog <ExternalLink />
            </Button>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden p-2 "
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <Menu />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-2 mt-3  p-4 rounded shadow">
          <ModeToggle />
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
          <Link href="https://blog.aleksdraka.online" target="blank">
            <Button>
              Blog <ExternalLink />
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
