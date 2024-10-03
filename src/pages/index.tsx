"use client";

import { useState } from "react";
import { AuroraBackgroundDemo } from '../components/AuroraBackgroundDemo'; 
import { AppleCardsCarouselDemo } from '@/components/AppleCardsCarouselDemo';
import { TextRevealCardPreview } from "@/components/TextRevealCardPreview";
import { WobbleCardDemo } from '@/components/WobbleCardDemo';
import CompareFrameworks from "@/components/CompareFrameworks";
import About from "@/components/About";

export default function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const openAboutModal = () => setIsAboutOpen(true);
  const closeAboutModal = () => setIsAboutOpen(false);

  return (
    <div>
      <AuroraBackgroundDemo />
      <WobbleCardDemo />
      <TextRevealCardPreview/>
      <AppleCardsCarouselDemo />
      <CompareFrameworks/>
      
      {/* Modal de "Acerca de" */}
      <About isOpen={isAboutOpen} closeModal={closeAboutModal} />

      <footer className="w-full bg-white-500 dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0">
          {/* Grupo de textos */}
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              © 2024 CryptoLearn. Todos los derechos reservados.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Luis Gerardo Del Ángel Hernández
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Ing. en Desarrollo y Gestión de Software
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Séptimo B
            </p>
          </div>
          {/* Link de 'Acerca de' */}
          <div className="mt-2 md:mt-0 md:pr-4 text-x1">
            <button
              onClick={openAboutModal}
              className="font-bold text-gray-700 dark:text-gray-300 hover:underline md:text-md"
            >
              Acerca de
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
