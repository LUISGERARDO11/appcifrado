import React, { useState } from 'react';
import Switch from './comun/switch';
import Slider from './comun/Slider';
import Textarea from './comun/TextArea';
import BotonSubmit from './comun/BotonSubmit ';
import Resultado from './comun/Resultado';

const CifradoCesar = () => {
  const [isEncrypting, setIsEncrypting] = useState(true);
  const [shift, setShift] = useState(5);
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    const shiftValue = isEncrypting ? shift : 26 - (shift % 26); // Ajuste de shift para descifrado
    
    const processedText = text.split('').map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        const code = char.charCodeAt(0);
        const base = code >= 65 && code <= 90 ? 65 : 97; // Mayúsculas o minúsculas
        return String.fromCharCode(((code - base + shiftValue) % 26) + base);
      }
      return char; // No modificar si no es una letra
    }).join('');
  
    setResult(processedText);
  };

  // Verificar si el texto tiene contenido
  const isTextEmpty = text.trim().length === 0;

  return (
    <div className="min-h-screen py-4 flex justify-center items-center">
      {/* Contenedor principal que actúa como la "card" con fondo aplicado */}
      <div className="relative bg-white dark:bg-[#0a0e1a] rounded-lg shadow-lg max-w-4xl w-full">
        <div className="font-extralight text-center text-2xl md:text-4xl dark:text-neutral-200 py-4 relative z-10">
          Cifrado César
        </div>

        <div className="p-4 bg-blue-100 dark:bg-black md:dark:bg-black rounded-md text-center dark:text-neutral-200 relative z-10 w-full">
          <p>
            Selecciona si deseas cifrar o descifrar el mensaje. Luego ajusta el desplazamiento con el slider e ingresa tu mensaje.
          </p>
        </div>

        <div className="my-4 relative z-10 w-full">
          <Switch onChange={setIsEncrypting} />
        </div>

        <div className="my-4 relative z-10 w-full">
          <Slider value={shift} onChange={setShift} />
        </div>

        <div className="my-4 relative z-10 w-full">
          <Textarea value={text} onChange={setText} />
        </div>

        <div className="my-4 relative z-10 w-full">
          <BotonSubmit isEncrypting={isEncrypting} onSubmit={handleSubmit} disabled={isTextEmpty} /> 
        </div>

        <div className="my-4 relative z-10 w-full">
          <Resultado value={result} />
        </div>
      </div>
    </div>
  );
};

export default CifradoCesar;
