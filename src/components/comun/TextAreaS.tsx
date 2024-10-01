import React from 'react';

interface TextareaProps {
  value: string;
  onChange: (value: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({ value, onChange }) => {
  const maxChars = 80;

  // Manejador para actualizar el valor al cambiar el contenido
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Si la longitud del valor es menor o igual al límite, actualiza el estado
    if (e.target.value.length <= maxChars) {
      onChange(e.target.value);
    } else {
      // Si el valor excede el límite, corta el texto y actualiza el estado
      onChange(e.target.value.slice(0, maxChars));
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Contenedor para centrar el textArea y ajustar el tamaño dependiendo de la pantalla */}
      <div className="w-4/5 md:w-3/5">
        <label
          htmlFor="message"
          className="mb-2 text-lg font-medium text-black dark:text-white block"
        >
          Tu mensaje
        </label>
        <textarea
          id="message"
          value={value}
          onChange={handleChange} // Añadir el manejador de cambios
          placeholder="Escribe tu mensaje aquí."
          className="w-full p-3 text-base text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows={4} // Controla la altura sin ajustarla automáticamente
        />
        <div className="mt-2 text-base text-gray-600 dark:text-gray-400">
          {value.length}/{maxChars} caracteres
        </div>
      </div>
    </div>
  );
};

export default Textarea;
