import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

interface ResultadoProps {
  value: string;
}

const Resultado: React.FC<ResultadoProps> = ({ value }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCopy = () => {
    if (value.trim() !== '') {
      navigator.clipboard.writeText(value);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Popup desaparece después de 4 segundos
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
        
        <textarea
          id="resultado"
          value={value}
          readOnly
          className="w-full p-3 text-base text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none h-[80%]"
        />
        
        <div
          className={`absolute top-12 right-4 cursor-pointer ${value.trim() === '' ? 'text-gray-400' : 'text-blue-500'}`}
          onClick={handleCopy}
        >
          <FaCopy size={20} />
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
