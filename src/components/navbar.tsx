"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [navLinks, setNavLinks] = useState([
    { id: 1, href: "/", label: "Home", isActive: true },
    { id: 2, href: "/todos", label: "Todos", isActive: false },
  ]);

  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center m-6">
      <ul className="flex justify-between items-center space-x-4">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`${
                pathname === link.href ? "text-blue-600" : "text-blue-300"
              } text-xl font-semibold font-mono m-1`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
