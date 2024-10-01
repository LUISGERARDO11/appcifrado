import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

interface ResultadoProps {
  value: string | null; // Permitir que value sea null
}

const Resultado: React.FC<ResultadoProps> = ({ value }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCopy = () => {
    if (value && value.trim() !== '') {
      navigator.clipboard.writeText(value);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Popup desaparece después de 3 segundos
    }
  };

  return (
    <div className="flex flex-col items-center w-full relative h-[80%]">
      <div className="w-4/5 md:w-3/5 relative h-full">
        <label
          htmlFor="resultado"
          className="mb-2 text-lg font-medium text-black dark:text-white block text-left"
        >
          Resultado
        </label>
        
        {value === null ? (
          <div className="w-full p-3 text-base text-red-600 bg-red-200 border border-red-300 rounded-lg shadow-sm">
            Error en la operación de cifrado/descifrado.
          </div>
        ) : (
          <textarea
            id="resultado"
            value={value}
            readOnly
            className="w-full p-3 text-base text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none h-[80%]"
          />
        )}
        
        <div
          className={`absolute top-12 right-4 cursor-pointer ${value ? 'text-blue-500' : 'text-gray-400'}`}
          onClick={handleCopy}
        >
          <FaCopy size={20} style={{ pointerEvents: value ? 'auto' : 'none' }} />
        </div>

        {showPopup && (
          <div className="absolute top-0 right-0 mt-2 mr-2 bg-blue-500 text-white p-2 rounded shadow-md transition-opacity duration-300">
            Texto copiado
          </div>
        )}
      </div>
    </div>
  );
};

export default Resultado;
