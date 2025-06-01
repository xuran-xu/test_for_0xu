"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-gray-900/80 border-b border-gray-800/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 px-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Link href="/">
              <Image src="/images/logo0xu.jpg" alt="0xU Logo" width={40} height={40} className="rounded-full" />
            </Link>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-1 items-center justify-center">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right side - empty for balance */}
          <div className="flex flex-1 justify-end">
          </div>
        </div>
      </div>
    </header>
  );
}
