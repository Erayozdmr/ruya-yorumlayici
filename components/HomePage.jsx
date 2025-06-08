"use client";
import { motion } from "framer-motion";
import React from "react";
import AnimatedText from "./AnimatedText";

const HomePage = () => {
  return (
    <div className=" ">
      <div className="flex justify-center  items-center lg:mt-20">
        <AnimatedText />
      </div>

      <div className="flex justify-center">
        <motion.img
          src="images/ruyakapanı.png"
          alt="Sallanıyor"
          style={{
            display: "block",
            margin: "0 auto",
            transformOrigin: "top center",
          }}
          animate={{
            rotate: [8, -8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      </div>

      <div className="flex flex-col  sm:flex-row gap-20 items-center mt-20 ">
        <motion.div
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-black/30 rounded-md px-2 py-2 w-full md:w-1/2 h-[450px] lg:h-60 "
        >
          <h1 className="font-bold">Rüyaların Anlamı Neyi İfade Eder? </h1>
          <p>
            Rüyalar, bilinçaltımızın duygularını ve düşüncelerini sembollerle
            ifade ettiği gizemli deneyimlerdir. Gün içinde yaşadıklarımızın ve
            iç dünyamızdaki durumların yansımasıdır. Bazı kültürlerde rüyalar
            geleceğe dair işaretler olarak görülürken, psikolojide
            bilinçdışındaki duygularımızı anlamamıza yardımcı olur. Rüyaların
            detaylarını ve sembollerini anlamak, kendimizi daha iyi tanımamıza
            ve ruhsal gelişimimize katkı sağlar. Her rüyanın anlamı kişiye
            özgüdür ve hayatımızdaki durumlarla bağlantılıdır.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-black/30 rounded-md px-2 py-2 w-full md:w-1/2 lg:h-60 h-[450px] "
        >
          <h1 className="font-bold">Rüyanın Bilimsel Tanımı</h1>
          <p>
            Rüya, uykunun REM (Rapid Eye Movement) evresi sırasında beynin
            aktivitesinin artmasıyla ortaya çıkan zihinsel görüntü, düşünce ve
            duygu deneyimidir. Bu süreçte beyin, gündelik yaşantıların, anıların
            ve bilinçdışının işlenmesine devam eder. Rüyalar, beynin hafıza,
            duygu ve öğrenme fonksiyonlarıyla bağlantılıdır ve genellikle
            sembolik, bazen mantıksız ya da karmaşık içerikler barındırır.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
