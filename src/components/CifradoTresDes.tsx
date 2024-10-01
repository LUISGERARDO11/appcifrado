import React, { useState, useEffect } from 'react';
import Switch from './comun/switch';
import Textarea from './comun/TextAreaS';
import BotonSubmit from './comun/BotonSubmit ';
import Resultado from './comun/Resultado';
import { FaInfoCircle } from 'react-icons/fa';
import CryptoJS from 'crypto-js';

const CifradoTresDes: React.FC = () => {
  const [isEncrypting, setIsEncrypting] = useState(true);
  const [clave1, setClave1] = useState('');
  const [clave2, setClave2] = useState('');
  const [clave3, setClave3] = useState('');
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [combinedError, setCombinedError] = useState('');

  // Validar claves y longitudes
  const validateKeysAndLength = (): string => {
    let errorMessage = '';

    if (clave1 && clave2 && clave1 === clave2) {
      errorMessage += 'La clave 1 y la clave 2 no deben ser iguales. ';
    }
    if (clave1 && clave3 && clave1 === clave3) {
      errorMessage += 'La clave 1 y la clave 3 no deben ser iguales. ';
    }
    if (clave2 && clave3 && clave2 === clave3) {
      errorMessage += 'La clave 2 y la clave 3 no deben ser iguales. ';
    }

    const totalLength = getFullKey().length;
    if (totalLength < 16) {
      errorMessage += `Faltan ${16 - totalLength} caracteres para alcanzar 16.`;
    } else if (totalLength > 16 && totalLength < 24) {
      errorMessage += `Faltan ${24 - totalLength} caracteres para alcanzar 24.`;
    } else if (totalLength > 24) {
      errorMessage += `Sobran ${totalLength - 24} caracteres.`;
    } else if (!errorMessage && (totalLength === 16 || totalLength === 24)) {
      errorMessage = 'Clave válida.';
    }

    return errorMessage;
  };

  // Obtener todas las claves combinadas
  const getFullKey = (): string => `${clave1}${clave2}${clave3}`;

  // Simulación del cifrado y descifrado para 3DES usando tres claves
  const handleSubmit = () => {
    const processedText = isEncrypting
      ? encryptTresDes(text, clave1, clave2, clave3)
      : decryptTresDes(text, clave1, clave2, clave3);

    setResult(processedText);
  };

  const encryptTresDes = (message: string, key1: string, key2: string, key3: string): string => {
    const fullKey = key1 + key2 + key3;
  
    if (fullKey.length !== 16 && fullKey.length !== 24) {
      return 'Error: La combinación de claves debe tener 16 o 24 caracteres.';
    }
  
    try {
      const ciphertext = CryptoJS.TripleDES.encrypt(message, fullKey).toString();
      return ciphertext;
    } catch (error) {
      console.error('Error al cifrar:', error);
      return 'Error al cifrar el mensaje.';
    }
  };
  
  const decryptTresDes = (message: string, key1: string, key2: string, key3: string): string => {
    const fullKey = key1 + key2 + key3;
  
    if (fullKey.length !== 16 && fullKey.length !== 24) {
      return 'Error: La combinación de claves debe tener 16 o 24 caracteres.';
    }
  
    try {
      const bytes = CryptoJS.TripleDES.decrypt(message, fullKey);
      const plaintext = bytes.toString(CryptoJS.enc.Utf8);
  
      if (!plaintext) {
        return 'Error al descifrar el mensaje o claves incorrectas.';
      } else {
        return plaintext;
      }
    } catch (error) {
      console.error('Error al descifrar:', error);
      return 'Error al descifrar el mensaje.';
    }
  };

  const handleInfoClick = () => {
    alert('Las claves son utilizadas para cifrar y descifrar el mensaje en 3DES.');
  };

  const isTextEmpty = text.trim().length === 0;
  const areKeysEmpty = clave1.trim().length === 0 || clave2.trim().length === 0 || clave3.trim().length === 0;

  useEffect(() => {
    // Combinar las validaciones de claves y longitud en un solo mensaje
    const errorMessage = validateKeysAndLength();
    setCombinedError(errorMessage);
  }, [clave1, clave2, clave3]);

  return (
    <div className="bg-white py-4 dark:bg-[#0a0e1a] min-h-screen flex justify-center items-center">
      <div className="relative bg-white dark:bg-[#0a0e1a] rounded-lg shadow-lg max-w-4xl w-full">
        <div className="font-extralight text-center text-2xl md:text-4xl dark:text-neutral-200 py-4">
          Cifrado 3DES
        </div>

        <div className="p-4 bg-blue-100 dark:bg-blue-800 md:dark:bg-blue-950 rounded-md text-center dark:text-neutral-200">
          <p>
            Selecciona si deseas cifrar o descifrar el mensaje. Luego ingresa tu mensaje y las tres diferentes claves.
          </p>
        </div>

        <div className="my-4">
          <Switch onChange={setIsEncrypting} />
        </div>

        <div className="my-4">
          <Textarea value={text} onChange={setText} />
        </div>

        {/* Campos para las tres claves */}
        {[clave1, clave2, clave3].map((clave, index) => (
          <div key={index} className="flex flex-col items-center mt-4 w-full sm:w-4/5 lg:w-3/5 mx-auto">
            <label htmlFor={`clave${index + 1}`} className="text-lg font-medium dark:text-neutral-200 w-full flex items-center">
              Clave {index + 1}
              <FaInfoCircle
                className="ml-2 text-gray-500 cursor-pointer"
                onClick={handleInfoClick}
                title="La clave se usa para el cifrado y descifrado en 3DES."
              />
            </label>
            <input
              type="text"
              id={`clave${index + 1}`}
              value={clave}
              onChange={(e) => {
                switch (index) {
                  case 0:
                    setClave1(e.target.value);
                    break;
                  case 1:
                    setClave2(e.target.value);
                    break;
                  case 2:
                    setClave3(e.target.value);
                    break;
                  default:
                    break;
                }
              }}
              className="p-2 mt-2 border rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:bg-gray-800 dark:text-white"
            />
          </div>
        ))}

        {/* Mostrar error combinado */}
        {combinedError && (
          <p className={`text-center mt-2 ${combinedError === 'Clave válida.' ? 'text-green-600' : 'text-red-600'}`}>
            {combinedError}
          </p>
        )}

        <div className="my-4">
          <BotonSubmit
            isEncrypting={isEncrypting}
            onSubmit={handleSubmit}
            disabled={isTextEmpty || areKeysEmpty || combinedError !== 'Clave válida.'}
          />
        </div>

        <div className="my-4">
          <Resultado value={result} />
        </div>
      </div>
    </div>
  );
};

export default CifradoTresDes;
