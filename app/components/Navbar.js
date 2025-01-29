import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold dark:text-white">
          Fortune
        </Link>

        <div className="hidden md:flex space-x-6">
          {["about", "work", "blog", "contact"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="hover:text-blue-600 dark:text-white"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        <div className="flex space-x-4 items-center">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-gray-600 dark:text-white"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-gray-900 py-4">
          {["about", "work", "blog", "contact"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="py-2 text-lg dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
