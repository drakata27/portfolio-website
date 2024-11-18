"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
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
          <Link href="https://blog.aleksdraka.online">
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
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-2 mt-3 bg-gray-100 p-4 rounded shadow">
          {/* <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full dark:bg-gray-dark"
          ></button> */}
          <ModeToggle />
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
          <Link href="https://blog.aleksdraka.online">
            <Button>
              Blog <ExternalLink />
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Button } from "./ui/button";
// import { ExternalLink, Moon, Sun } from "lucide-react";
// import useTheme from "../app/hooks/useTheme";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <header className="px-5 py-3 shadow-sm bg-white dark:bg-gray-800">
//       <nav className="flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/">
//           <span className="text-xl font-bold dark:text-white">
//             &lt;aleksdraka /&gt;
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-4">
//           <Link href="#about" className="dark:text-gray-300">
//             About
//           </Link>
//           <Link href="#experience" className="dark:text-gray-300">
//             Experience
//           </Link>
//           <Link href="#skills" className="dark:text-gray-300">
//             Skills
//           </Link>
//           <Link href="#projects" className="dark:text-gray-300">
//             Projects
//           </Link>
//           <Link href="#contact" className="dark:text-gray-300">
//             Contact
//           </Link>
//           <Link href="https://blog.aleksdraka.online">
//             <Button>
//               Blog <ExternalLink />
//             </Button>
//           </Link>
//         </div>

//         {/* Theme Toggle */}
//         <button
//           onClick={toggleTheme}
//           aria-label="Toggle Theme"
//           className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
//         >
//           {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
//         </button>

//         {/* Hamburger Menu */}
//         <button
//           className="md:hidden p-2"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle Menu"
//         >
//           <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
//           <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
//           <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
//         </button>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="md:hidden flex flex-col items-center gap-4 mt-3 bg-gray-100 dark:bg-gray-900 p-4 rounded shadow">
//           <Link href="#about" className="text-center dark:text-gray-300">
//             About
//           </Link>
//           <Link href="#experience" className="text-center dark:text-gray-300">
//             Experience
//           </Link>
//           <Link href="#skills" className="text-center dark:text-gray-300">
//             Skills
//           </Link>
//           <Link href="#projects" className="text-center dark:text-gray-300">
//             Projects
//           </Link>
//           <Link href="#contact" className="text-center dark:text-gray-300">
//             Contact
//           </Link>
//           <Link href="https://blog.aleksdraka.online" className="text-center">
//             <Button>
//               Blog <ExternalLink />
//             </Button>
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }
