import React, { useEffect, useState } from 'react';

interface BotonSubmitProps {
  isEncrypting: boolean;
  onSubmit: () => void;
  disabled: boolean; // Nueva propiedad
}

const BotonSubmit: React.FC<BotonSubmitProps> = ({ isEncrypting, onSubmit, disabled }) => {
  const [buttonText, setButtonText] = useState('Cifrar');

  useEffect(() => {
    setButtonText(isEncrypting ? 'Cifrar' : 'Descifrar');
  }, [isEncrypting]);

  return (
    <div className="flex justify-center my-6 mt-6">
      <button
        onClick={onSubmit}
        disabled={disabled} // Desactivar botón basado en la propiedad
        className={`w-[80%] md:w-[70%] lg:w-[60%] px-6 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default BotonSubmit;
