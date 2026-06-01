"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-x1 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Лого */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide"
        >
          Гаврилычев Михаил
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <Link href="/">Главная</Link>
          <Link href="/portfolio">Портфолио</Link>
          <Link href="/cases">Кейсы</Link>
          <Link href="/workflow">Как я работаю</Link>
          <Link href="/about">Обо мне</Link>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-8 flex flex-col gap-6 text-xl">
          <Link href="/">Главная</Link>
          <Link href="/portfolio">Портфолио</Link>
          <Link href="/cases">Кейсы</Link>
          <Link href="/workflow">Как я работаю</Link>
          <Link href="/about">Обо мне</Link>
        </div>
      )}
    </header>
  );
}