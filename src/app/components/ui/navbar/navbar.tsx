"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="sticky top-0">
        <nav className="bg-primaryGreen r px-4 lg:px-6 py-2.5 ">
          <div
            className="flex flex-wrap justify-between items-center
          mx-auto max-w-screen-xl"
          >
            <Link
              href="/"
              className="flex items-center"
              style={{ textDecoration: "none" }}
            >
              <Image
                src="/img/navbar.png"
                className="drop-shadow-lg
                  object-cover h-20 max-w-full"
                alt="Bloomfields Logo"
                width={200}
                height={300}
              />
              <span
                className="text-pretty text-2xl ms-2
                font-semibold whitespace-nowrap"
              >
                Bloomfields Wellness Institute
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <Link
                href={`/`}
                className=" font-medium text-xl px-4 lg:px-5
                   py-2 lg:py-2.5 mr-2"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                href={`/FAQ`}
                className=" font-medium text-xl px-4 lg:px-5
                  py-2 lg:py-2.5 mr-2"
                style={{ textDecoration: "none" }}
              >
                FAQ
              </Link>
              <Link
                href={`/Login`}
                className=" font-medium text-xl
                px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                style={{ textDecoration: "none" }}
              >
                Login
              </Link>
              <Link
                href="/Sign Up"
                className=" font-medium
                text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                style={{ textDecoration: "none" }}
              >
                Get started
              </Link>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
}
