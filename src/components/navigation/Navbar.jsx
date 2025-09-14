import { Award, BookImage, Contact, InfoIcon, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LinkWithIcon from "./LinkWithIcon";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative z-50">
      <div className="relative">
        <nav className="relative flex w-full items-center justify-between bg-black px-4 py-3 backdrop-blur-md">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="text-white transition-all duration-300 hover:scale-110"
            onClick={closeMenu}
          >
            <h2 className="gradient-text hover-glow cursor-pointer text-xl font-bold">
              عمال مصر
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex">
            <LinkWithIcon
              Icon={InfoIcon}
              label="About"
              to="/about"
              isDesktop={true}
            />
            <LinkWithIcon
              Icon={Award}
              label="Certificates"
              to="/certificates"
              isDesktop={true}
            />
            <LinkWithIcon
              Icon={BookImage}
              label="Gallery"
              to="/gallery"
              isDesktop={true}
            />
            <LinkWithIcon
              Icon={Contact}
              label="Contact"
              to="/contact"
              isDesktop={true}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="hover-glow pulse-glow flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white transition-all duration-300 hover:scale-110 hover:bg-green-700 active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-40 bg-black md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Floating Close Button */}
      {isOpen && (
        <button
          onClick={closeMenu}
          className="fixed top-4 right-4 z-60 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white shadow-2xl transition-all duration-200 hover:scale-110 hover:bg-red-600 active:scale-95 md:hidden"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 transform bg-gradient-to-b from-green-600 to-green-800 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between border-b border-green-500 p-6">
          <h3 className="text-xl font-bold text-white">Menu</h3>
          <button
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-all duration-200 hover:scale-110 hover:bg-red-600 active:scale-95"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-2 p-6">
          <LinkWithIcon
            Icon={InfoIcon}
            label="About"
            to="/about"
            onClick={closeMenu}
          />
          <LinkWithIcon
            Icon={Award}
            label="Certificates"
            to="/certificates"
            onClick={closeMenu}
          />
          <LinkWithIcon
            Icon={BookImage}
            label="Gallery"
            to="/gallery"
            onClick={closeMenu}
          />
          <LinkWithIcon
            Icon={Contact}
            label="Contact"
            to="/contact"
            onClick={closeMenu}
          />
        </div>

        {/* Menu Footer */}
        <div className="absolute right-0 bottom-0 left-0 border-t border-green-500 p-6">
          <div className="text-center">
            <p className="text-sm text-green-100">عمال مصر</p>
            <p className="text-xs text-green-200">نحن نصنع التاريخ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
