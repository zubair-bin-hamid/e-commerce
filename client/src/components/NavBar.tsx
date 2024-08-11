"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
  // State to manage dropdown and mobile menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="absolute z-50 w-full top-0">
      <div className="relative max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
        <Link
          href="#"
          className="block md:hidden py-2 px-3 text-white rounded md:hover:bg-transparent   md:p-0"
        >
          <Image alt="cart" width={18} height={18} src={"/Assets/cart.png"} className="object-contain"/>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMobileMenuOpen ? "block md:bg-transparent bg-gray-900" : "hidden"
          }`}
          id="mobile-menu"
        >
          <ul
            className="flex flex-col md:justify-center md:items-center lg:gap-8 md:gap-4 p-4 md:p-0 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0"
          >
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0  "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0  "
                aria-current="page"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0  md:p-0"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0  md:p-0"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0  md:p-0"
              >
                Contact Us
              </Link>
            </li>
            <li className="relative">
              {/* Make this container relative */}
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown} // Toggle dropdown menu
                className="flex items-center justify-between w-full py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0  md:p-0 md:w-auto "
              >
                ENG
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownNavbar"
                className={`absolute top-full right-0 z-10 mt-2 font-normal  divide-y divide-gray-100 rounded-lg shadow w-full bg-white ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
              >
                <ul
                  className="py-2 text-sm text-gray-700"
                  aria-labelledby="dropdownNavbarLink"
                >
                  <li>
                    <Link href="#" className="block px-4 py-2">
                      FR
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2">
                      ES
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="#"
                className="md:block hidden py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0  md:p-0"
              >
                <Image alt="" width={18} height={18} src={"/Assets/cart.png"} />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0  md:p-0"
              >
                <Image
                  alt=""
                  width={18}
                  height={18}
                  src={"/Assets/search.png"}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
