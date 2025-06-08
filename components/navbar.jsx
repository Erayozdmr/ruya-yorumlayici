"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";
const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:px-12 px-4 py-6  ">
      {/* BÜYÜK EKRAN  */}
      <div className=" justify-center items-center hidden lg:flex">
        <ul className=" gap-5 flex">
          <li className="relative group">
            <Link href="/">Anasayfa</Link>
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href="/ruyayorumla">Rüya Yorumla</Link>
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </div>
      {/* BÜYÜK EKRAN  */}

      {/* MOBİL EKRAN  */}
      <div className=" bg-black/50 p-2 rounded-md lg:hidden ">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <MenuIcon />}
        </button>
        {isOpen && (
          <div className="   ">
            <ul className=" flex flex-col gap-3 ">
              <li className="relative group">
                <Link href="/">Anasayfa</Link>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <Link href="/ruyayorumla">Rüya Yorumla</Link>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default navbar;
