import React, { useState, useEffect } from 'react';

const Switch = ({ onChange }: { onChange: (value: boolean) => void }) => {
  const [isEncrypting, setIsEncrypting] = useState(true);

  // Notificar al componente padre cada vez que isEncrypting cambie
  useEffect(() => {
    onChange(isEncrypting);
  }, [isEncrypting, onChange]);

  const handleToggle = (value: boolean) => {
    setIsEncrypting(value);
  };

  return (
    <div className="flex justify-center py-4">
      <div className="flex border-2 border-blue-500 rounded-full overflow-hidden">
        {/* Botón de Cifrar */}
        <div
          onClick={() => handleToggle(true)}
          className={`px-6 py-2 cursor-pointer ${
            isEncrypting ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
        >
          Cifrar
        </div>

        {/* Botón de Descifrar */}
        <div
          onClick={() => handleToggle(false)}
          className={`px-6 py-2 cursor-pointer ${
            !isEncrypting ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
        >
          Descifrar
        </div>
      </div>
    </div>
  );
};

export default Switch;
