import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between md:block">
        {/* Logo */}
        <h1 className="text-2xl font-light md:text-4xl md:text-center mb-4">
          Brooklyn Sourdough
        </h1>

        {/* Menu icon for mobile */}
        <button
          className="md:hidden p-2 text-gray-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:justify-center md:space-x-8 uppercase text-xs mt-4">
          <Link
            href="/"
            className={`${
              router.pathname === "/"
                ? "text-black-500 font-bold"
                : "text-gray-600"
            } hover:text-gray-900`}
          >
            About
          </Link>
          <Link
            href="/starter"
            className={`${
              router.pathname === "/starter"
                ? "text-black-500 font-bold"
                : "text-gray-600"
            } hover:text-gray-900`}
          >
            Starter
          </Link>
          <Link
            href="/recipe"
            className={`${
              router.pathname === "/recipe"
                ? "text-black-500 font-bold"
                : "text-gray-600"
            } hover:text-gray-900`}
          >
            Recipe
          </Link>
          <Link
            href="/tools"
            className={`${
              router.pathname === "/tools"
                ? "text-black-500 font-bold"
                : "text-gray-600"
            } hover:text-gray-900`}
          >
            Tools
          </Link>
        </nav>
      </div>

      {/* Mobile navigation menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <Link
            href="/"
            className={`${
              router.pathname === "/"
                ? "text-black-500 font-bold"
                : "text-gray-600"
            } block px-4 py-2 hover:text-gray-900`}
          >
            About
          </Link>
          <Link
            href="/starter"
            className={`${
              router.pathname === "/starter"
                ? "text-black-500 font-bold"
                : "text-gray-600"
            } block px-4 py-2 hover:text-gray-900`}
          >
            Starter
          </Link>
          <Link
            href="/recipe"
            className={`${
              router.pathname === "/recipe"
                ? "text-black-500 font-bold"
                : "text-gray-600"
            } block px-4 py-2 hover:text-gray-900`}
          >
            Recipe
          </Link>
          <Link
            href="/tools"
            className={`${
              router.pathname === "/tools"
                ? "text-black-500 font-bold"
                : "text-gray-600"
            } block px-4 py-2 hover:text-gray-900`}
          >
            Tools
          </Link>
        </div>
      )}
    </header>
  );
}
