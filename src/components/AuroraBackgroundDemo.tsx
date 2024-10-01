"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/AuroraBackground";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-6xl md:text-8xl font-bold dark:text-white text-center">
        Descubre la Criptografía
        </div>
        <div className="font-extralight  text-center md:text-3xl dark:text-neutral-200 py-4">
        Desplaza o reorganiza las letras de tu mensaje para cifrarlo o descifrarlo. ¡Ingresa tu frase y descubre cómo funciona!
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
