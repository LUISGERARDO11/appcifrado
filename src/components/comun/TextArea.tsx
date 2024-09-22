import React from 'react';

interface TextareaProps {
  value: string;
  onChange: (value: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({ value, onChange }) => {
  const maxChars = 50;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    // Filtrar solo letras y caracteres permitidos
    const filteredValue = newValue.replace(/[^a-zA-Z\s]/g, '');

    if (filteredValue.length <= maxChars) {
      onChange(filteredValue);
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
          onChange={handleChange}
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
