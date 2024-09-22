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
    <div className=" bg-[#e3e7e7] dark:bg-black min-h-screen py-8">  
        <div className="font-extralight text-center text-2xl md:text-4xl dark:text-neutral-200 py-4">
            Cifrado César
        </div>
        <div className="p-4 bg-blue-100 dark:bg-blue-800 md:dark:bg-blue-950 rounded-md text-center dark:text-neutral-200 md:w-4/5 lg:w-6/10 mx-auto">
            <p>
                Selecciona si deseas cifrar o descifrar el mensaje. Luego ajusta el desplazamiento con el slider e ingresa tu mensaje.
            </p>
        </div>

        <Switch onChange={setIsEncrypting} />
        <Slider value={shift} onChange={setShift} />
        <Textarea value={text} onChange={setText} />
        <BotonSubmit isEncrypting={isEncrypting} onSubmit={handleSubmit} disabled={isTextEmpty} /> 
        <Resultado value={result} />
    </div>
  );
};

export default CifradoCesar;
