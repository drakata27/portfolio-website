"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ExternalLink, Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-5 py-3 shadow-sm">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-bold">&lt;aleksdraka /&gt;</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Hamburger Menu */}
        <button
          className="md:hidden p-2"
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
