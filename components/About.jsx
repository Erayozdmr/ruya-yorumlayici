"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <div className=" py-12 px-6 bg-gradient-to-b mt-10">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-12">
        {/* Sol Kutu */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-black/30 rounded-xl px-4 py-6 w-80 h-80 group relative overflow-hidden shadow-lg backdrop-blur-md"
        >
          <div className=" hidden absolute inset-0 md:flex items-center justify-center text-2xl text-white font-semibold z-10">
            HİZMETLERİMİZ
          </div>
          <div className="absolute inset-0 md:bg-black bg-opacity-60 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center text-white text-lg z-20">
            Rüya Tabirleri, Yorumlar, Anlamlar
          </div>
        </motion.div>

        {/* Orta Başlık */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center max-w-md"
        >
          <h1 className="text-4xl font-bold text-black mb-4">
            Neye Hizmet Ediyoruz?
          </h1>
          <p className="text-white text-lg">
            Rüyalarınızın anlamlarını çözümlüyor, sizlere manevi bir rehberlik
            sunuyoruz.
          </p>
        </motion.div>

        {/* Sağ Kutu */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-black/30 rounded-xl px-4 py-6 w-80 h-80 group relative overflow-hidden shadow-lg backdrop-blur-md "
        >
          <div className="hidden absolute inset-0 md:flex items-center justify-center text-2xl text-white font-semibold z-10">
            HİZMET DETAYI
          </div>
          <div className="absolute inset-0 md:bg-black bg-opacity-60 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center text-white text-lg z-20">
            Kişiye özel rüya analizleri
          </div>
        </motion.div>
      </div>
      <div className="text-center flex items-center justify-center flex-col gap-16 mt-20">
        <h1 className="text-4xl ">Hazırsan Başlayalım</h1>
        <button className="text-2xl border p-2 rounded-md hover:bg-white hover:text-black transition-all hover:cursor-pointer">
          <Link href="/ruyayorumla">Rüya Yorumla</Link>
        </button>
      </div>
    </div>
  );
};

export default About;
