// cifradoHash.ts
import CryptoJS from 'crypto-js';

/**
 * Genera un hash SHA-224 a partir de un mensaje.
 * @param message - El mensaje a encriptar.
 * @returns El hash SHA-224 en formato hexadecimal.
 */
export const hashSHA224 = (message: string): string => {
    return CryptoJS.SHA224(message).toString(CryptoJS.enc.Hex);
};

/**
 * Genera un hash SHA-256 a partir de un mensaje.
 * @param message - El mensaje a encriptar.
 * @returns El hash SHA-256 en formato hexadecimal.
 */
export const hashSHA256 = (message: string): string => {
    return CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);
};

/**
 * Genera un hash SHA-384 a partir de un mensaje.
 * @param message - El mensaje a encriptar.
 * @returns El hash SHA-384 en formato hexadecimal.
 */
export const hashSHA384 = (message: string): string => {
    return CryptoJS.SHA384(message).toString(CryptoJS.enc.Hex);
};

/**
 * Genera un hash SHA-512 a partir de un mensaje.
 * @param message - El mensaje a encriptar.
 * @returns El hash SHA-512 en formato hexadecimal.
 */
export const hashSHA512 = (message: string): string => {
    return CryptoJS.SHA512(message).toString(CryptoJS.enc.Hex);
};
