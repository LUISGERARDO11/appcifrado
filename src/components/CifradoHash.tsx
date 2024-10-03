import React, { useState } from 'react';
import Textarea from './comun/TextAreaS'; 
import Resultado from './comun/Resultado';
import { hashSHA224, hashSHA256, hashSHA384, hashSHA512 } from '../utils/cifradoHash'; // Importacion las funciones de cifrado

const CifradoHash: React.FC = () => {
  const [message, setMessage] = useState(''); // Estado para el mensaje del textarea
  const [hashType, setHashType] = useState('SHA-256'); // Estado para la selección de hash (por defecto SHA-256)
  const [hashedValue, setHashedValue] = useState<string | null>(''); // Estado para el resultado del hash

  // Función para generar el hash basado en la selección
  const handleGenerateHash = async () => {
    let result: string | null = null;
    try {
      switch (hashType) {
        case 'SHA-224':
          result = hashSHA224(message);
          break;
        case 'SHA-256':
          result = hashSHA256(message);
          break;
        case 'SHA-384':
          result = hashSHA384(message);
          break;
        case 'SHA-512':
          result = hashSHA512(message);
          break;
        default:
          result = null;
      }
    } catch (error) {
      console.error('Error al generar el hash:', error);
      result = null;
    }
    setHashedValue(result);
  };

  return (
    <div className="flex flex-col items-center w-full">
        <div className="font-extralight text-center text-2xl md:text-4xl dark:text-neutral-200 py-4">
           Hash con SHA-2 (Secure Hash Algorithm 2)
        </div>
        <div className="p-4 bg-blue-100 dark:bg-black md:dark:bg-black rounded-md text-center dark:text-neutral-200 relative z-10 w-full">
          <p>
            Escribe tu mensaje. Selecciona una variante de SHA-2 y genera el hash
          </p>
        </div>
      {/* TextAreaS para que el usuario escriba */}
      <Textarea value={message} onChange={setMessage} />

      {/* Select para escoger el tipo de hash */}
      <div className="w-4/5 md:w-3/5 mt-4">
        <label
          htmlFor="hashSelect"
          className="mb-2 text-lg font-medium text-black dark:text-white block"
        >
          Selecciona el tipo de Hash
        </label>
        <select
          id="hashSelect"
          value={hashType}
          onChange={(e) => setHashType(e.target.value)}
          className="w-full p-2 text-base text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        >
          <option value="SHA-224">SHA-224</option>
          <option value="SHA-256">SHA-256</option>
          <option value="SHA-384">SHA-384</option>
          <option value="SHA-512">SHA-512</option>
        </select>
      </div>

      {/* Botón para generar el hash */}
      <div className="flex justify-center my-4 ">
        <button
            onClick={handleGenerateHash}   
            className={`w-full px-6 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
        >
            Generar Hash
        </button>
        </div>
      <div className=" w-full">
        <Resultado value={hashedValue} />
      </div>
    </div>
  );
};

export default CifradoHash;
