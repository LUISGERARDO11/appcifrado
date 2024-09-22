import React from "react";
import { FaInfoCircle } from 'react-icons/fa';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number; // Recibir valor del slider desde el componente padre
  onChange: (newValue: number) => void; // Recibir la función para actualizar el valor
}

const Slider: React.FC<SliderProps> = ({ min = 1, max = 25, step = 1, value, onChange }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value)); // Llamar a la función onChange con el nuevo valor
  };

  const handleInfoClick = () => {
    alert("Es el número de posiciones que cada letra del mensaje se desplaza en el alfabeto.");
  };
  return (
    <div className="relative flex flex-col items-center my-8 py-4">
      {/* Contenedor para el texto "Clave" y el valor del slider */}
        <div className="flex justify-between absolute top-[-24px] w-full max-w-[80%] md:max-w-[60%]">
            <div className="flex items-center">
                <span className="text-black dark:text-white">Clave</span>
                <FaInfoCircle
                    className="ml-2 text-gray-500 cursor-pointer"
                    onClick={handleInfoClick}
                    title="Es el número de posiciones que cada letra del mensaje se desplaza en el alfabeto."
                />
            </div>

        
        <span className="text-black dark:text-white">{value}</span>
        </div>

      {/* Slider */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="h-4 appearance-none cursor-pointer rounded-full w-[80%] md:w-[60%]" // Ajustando ancho en pantallas pequeñas y grandes
        style={{
          background: `linear-gradient(to right, #3b82f6 ${(value / max) * 100}%, #a3a3a3 0%)`, // Color azul para el fondo del slider
        }}
      />

      {/* Estilizando el círculo */}
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #1e40af; /* Mismo color que el fondo azul */
          cursor: pointer;
          box-shadow: 0 0 0 3px white; /* Borde blanco alrededor */
        }
        input[type='range']::-moz-range-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #1e40af;
          cursor: pointer;
          box-shadow: 0 0 0 3px white;
        }
        input[type='range']::-ms-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #1e40af;
          cursor: pointer;
          box-shadow: 0 0 0 3px white;
        }
      `}</style>
    </div>
  );
};

export default Slider;
