export interface ValidationResult {
    isValid: boolean;
    message: string;
}

export const validateKeysLength = (key1: string, key2: string, key3: string): ValidationResult => {
    const totalLength = key1.length + key2.length + key3.length;

    if (totalLength < 24) {
        return { 
            isValid: false, 
            message: `Faltan ${24 - totalLength} caracteres para alcanzar los 24 caracteres requeridos.` 
        };
    } else if (totalLength > 24) {
        return { 
            isValid: false, 
            message: `Te has excedido por ${totalLength - 24} caracteres.` 
        };
    }

    return { isValid: true, message: 'La longitud de las claves es correcta.' };
};

export const validateUniqueKeys = (key1: string, key2: string, key3: string) => {
    const errors: string[] = [];
  
    if (key1 && key2 && key1 === key2) {
      errors.push('La clave 1 y la clave 2 no pueden ser iguales.');
    }
  
    if (key1 && key3 && key1 === key3) {
      errors.push('La clave 1 y la clave 3 no pueden ser iguales.');
    }
  
    if (key2 && key3 && key2 === key3) {
      errors.push('La clave 2 y la clave 3 no pueden ser iguales.');
    }
  
    return {
      isValid: errors.length === 0,
      message: errors.join(' '),
    };
  };
  
/*export const validateKeys = (key1: string, key2: string, key3: string, step: number): boolean => {
    if (step === 1) {
      return key1.trim() !== '';
    } else if (step === 2) {
      return key2.trim() !== '' && key2 !== key1;
    } else if (step === 3) {
      return key3.trim() !== '' && key3 !== key1 && key3 !== key2;
    }
    return false;
  };*/
  