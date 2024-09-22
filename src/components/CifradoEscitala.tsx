import React, { useState } from 'react';
import Switch from './comun/switch';
import Textarea from './comun/TextArea';
import BotonSubmit from './comun/BotonSubmit ';
import Resultado from './comun/Resultado';
import { FaInfoCircle } from 'react-icons/fa';

const CifradoEscitala = () => {
  const [isEncrypting, setIsEncrypting] = useState(true);
  const [columns, setColumns] = useState(2);
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    // Eliminar espacios del texto antes de cifrar o descifrar
    const cleanText = text.replace(/\s+/g, '');
    const numRows = Math.ceil(cleanText.length / columns);

    const processedText = isEncrypting
      ? encryptEscitala(cleanText, numRows, columns)
      : decryptEscitala(cleanText, numRows, columns);

    setResult(processedText);
  };

  // Función para cifrar considerando espacios eliminados
  const encryptEscitala = (message: string, rows: number, columns: number): string => {
    let encrypted = '';
    for (let col = 0; col < columns; col++) {
      for (let row = 0; row < rows; row++) {
        const charIndex = row * columns + col;
        if (charIndex < message.length) {
          encrypted += message[charIndex];
        }
      }
    }
    return encrypted;
  };

  // Función para descifrar corregida
    const decryptEscitala = (message: string, rows: number, columns: number): string => {
        const decrypted = new Array(message.length); // Cambiado a 'const'
        let charIndex = 0;
    
        // Colocar los caracteres en una matriz en base a las filas y columnas
        for (let col = 0; col < columns; col++) {
        for (let row = 0; row < rows; row++) {
            const index = row * columns + col;
            if (index < message.length) {
            decrypted[index] = message[charIndex++];
            }
        }
        }
    
        return decrypted.join('');
    };
  

  const handleInfoClick = () => {
    alert("El número de columnas determina cómo se organiza el mensaje para el cifrado.");
  };

  // Validaciones para el input de columnas y el mensaje
  const isTextEmpty = text.trim().length === 0;
  const isColumnInvalid = columns < 1 || columns > text.replace(/\s+/g, '').length;

  return (
    <div className="bg-[#e3e7e7] dark:bg-black min-h-screen py-10">
        <div className="font-extralight text-center text-2xl md:text-4xl dark:text-neutral-200 py-4">
            Cifrado Escítala
        </div>
        <div className="p-4 bg-blue-100 dark:bg-blue-800 md:dark:bg-blue-950 rounded-md text-center dark:text-neutral-200 md:w-4/5 lg:w-6/10 mx-auto">
            <p>
                Selecciona si deseas cifrar o descifrar el mensaje. Luego ingresa tu mensaje y número de columnas.
            </p>
        </div>

        <Switch onChange={setIsEncrypting} />
        <Textarea value={text} onChange={setText} />
        <div className="flex flex-col items-center mt-4 mx-auto w-4/5 md:w-7/10 lg:w-3/5">
            <label htmlFor="columns" className="text-lg font-medium dark:text-neutral-200 text-left w-full flex items-center">
                Número de Columnas
                <FaInfoCircle
                    className="ml-2 text-gray-500 cursor-pointer"
                    onClick={handleInfoClick}
                    title="El número de columnas determina cómo se organiza el mensaje para el cifrado y descifrado."
                />
            </label>
            <input
                type="number"
                id="columns"
                value={columns}
                onChange={(e) => setColumns(parseInt(e.target.value, 10))}
                min="1"
                className={`p-2 mt-2 border rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500 
                w-full dark:bg-gray-800 dark:text-white ${isColumnInvalid ? 'border-red-500' : ''}`}
            />
            {isColumnInvalid && (
                <p className="text-red-600 text-sm mt-2">
                El número de columnas debe ser mayor a 0 y menor o igual al número de caracteres del mensaje.
                </p>
            )}
        </div>
        <BotonSubmit
            isEncrypting={isEncrypting}
            onSubmit={handleSubmit}
            disabled={isTextEmpty || isColumnInvalid}
        />
        <Resultado value={result} />
    </div>
  );
};

export default CifradoEscitala;
