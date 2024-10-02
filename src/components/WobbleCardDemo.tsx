"use client";
import React, { useState } from "react";
import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";
import { Dialog } from "@headlessui/react";
import CifradoCesar from "./CifradoCesar";
import CifradoEscitala from "./CifradoEscitala";
import CifradoTresDes from "./CifradoTresDes";
import CifradoECC from "./CifradoECC";
import CifradoHash from "./CifradoHash";
import { FaTimes } from 'react-icons/fa';

export function WobbleCardDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCipher, setActiveCipher] = useState<"cesar" | "escitala" | "tresdes" | "hash" | "ecc" |null>(null); // Añadir tresdes

  const openModal = (cipher: "cesar" | "escitala" | "tresdes" | "hash" |"ecc") => { 
    setActiveCipher(cipher);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveCipher(null);
  };

  return (
    <>
      <div className={`grid grid-cols-1 mb-10 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full ${isOpen ? "blur-sm" : ""}`}>
      
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]">
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Cifrado César
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Un cifrado por sustitución simple que desplaza las letras del alfabeto.
            </p>
            <button
              className="mt-6 bg-white text-black px-6 rounded cursor-pointer py-2 relative z-10"
              onClick={() => openModal("cesar")}
            >
              Probar ahora
            </button>
          </div>
          <Image
            src="https://plus.unsplash.com/premium_photo-1681487746049-c39357159f69?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt="Cifrado César"
            className="absolute -right-4 -bottom-5 md:-bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Cifrado Escítala
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Un método de cifrado antiguo usado por los espartanos.
            </p>
            <button
              className="mt-6 bg-white text-black px-6 py-2 rounded cursor-pointer relative z-10"
              onClick={() => openModal("escitala")}
            >
              Probar ahora
            </button>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              3DES
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Un cifrado simétrico que emplea tres claves para realizar múltiples operaciones de cifrado y descifrado
            </p>
            <button
              className="mt-6 bg-white text-black px-6 rounded cursor-pointer py-2 relative z-10"
              onClick={() => openModal("tresdes")} // Añadir tresdes
            >
              Probar ahora
            </button>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1614064850003-13dbfd69fd11?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt="Cifrado 3DES"
            className="absolute -right-4 -bottom-5 md:-bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-yellow-700  min-h-[300px]">
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Hash con SHA-2
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
            Generación de un resumen único e irreversible a partir de un mensaje.
            </p>
            <button
              className="mt-6 bg-white text-black px-6 py-2 rounded cursor-pointer relative z-10"
              onClick={() => openModal("hash")}
            >
              Probar ahora
            </button>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-red-700 min-h-[500px] lg:min-h-[300px]">
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Cifrado ECC
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Un cifrado asimétrico con un enfoque avanzado para la criptografía de clave pública basado en las propiedades algebraicas de las curvas elípticas sobre campos finitos. 
            </p>
            <button
              className="mt-6 bg-white text-black px-6 rounded cursor-pointer py-2 relative z-10"
              onClick={() => openModal("ecc")}
            >
              Probar ahora
            </button>
          </div>
          <Image
            src="https://plus.unsplash.com/premium_photo-1700681802470-64f440b12c74?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt="Cifrado César"
            className="absolute -right-4 -bottom-5 md:-bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        {/* Overlay con efecto de desenfoque */}
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="bg-white dark:bg-[#0a0e1a] p-6 rounded-md shadow-md" style={{ maxHeight: '80vh', overflowY: 'auto', width: '90%' }}>

            {/* Botón para cerrar el modal */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Cerrar"
            >
              <FaTimes size={20} />
            </button>
            <Dialog.Description>
              {activeCipher === "cesar" && <CifradoCesar />}
              {activeCipher === "escitala" && <CifradoEscitala />}
              {activeCipher === "tresdes" && <CifradoTresDes />} 
              {activeCipher === "hash" && <CifradoHash />}
              {activeCipher === "ecc" && <CifradoECC />}
            </Dialog.Description>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
