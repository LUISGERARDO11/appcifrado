"use client";

import React from "react";
import { Dialog } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";

export default function About({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) {
  return (
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
            <FaTimes />
          </button>

          <Dialog.Title className="text-lg font-bold text-gray-900 dark:text-white">Acerca de CryptoLearn</Dialog.Title>
          <Dialog.Description className="mt-4 text-gray-700 dark:text-gray-300">
            CryptoLearn es una plataforma educativa diseñada para facilitar el aprendizaje de conceptos criptográficos, como el cifrado César y la escítala,
            a través de una experiencia interactiva y visual. Nuestro objetivo es enseñar los fundamentos de la criptografía de manera accesible y divertida.
          </Dialog.Description>

          <div className="mt-6">
            <h2 className="text-md font-semibold text-gray-900 dark:text-white">Misión</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Nuestra misión es proporcionar una plataforma fácil de usar que permita a los usuarios aprender y aplicar conceptos de seguridad y criptografía
              de manera efectiva.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-md font-semibold text-gray-900 dark:text-white">Visión</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Ser una referencia en la enseñanza de criptografía y seguridad informática a nivel global, creando una comunidad de aprendizaje activa y colaborativa.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-md font-semibold text-gray-900 dark:text-white">Contacto</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Si tienes alguna duda o sugerencia, no dudes en contactarnos en: contacto@cryptolearn.com
            </p>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
