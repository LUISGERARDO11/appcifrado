import React, { useState } from 'react';
import elliptic from 'elliptic';
import crypto from 'crypto';
import { FaKey, FaLock, FaUnlock, FaEdit } from 'react-icons/fa';


// Configuramos la curva elíptica
const EC = elliptic.ec;
const ec = new EC('secp256k1');

const CifradoECC: React.FC = () => {
  // Estado para Clara
  const [ClaraPrivateKey, setClaraPrivateKey] = useState('');
  const [ClaraPublicKey, setClaraPublicKey] = useState('');
  const [messageReceived, setMessageReceived] = useState(false); // Estado para indicar si Clara recibió un mensaje

  // Estado para Daniel
  const [DanielPrivateKey, setDanielPrivateKey] = useState('');
  const [DanielPublicKey, setDanielPublicKey] = useState(''); // Nueva variable para la clave pública de Daniel
  const [DanielMessage, setDanielMessage] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');

  // Estado para Comunicación
  const [receivedMessage, setReceivedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');

  const generateClaraKeys = () => {
    try {
      // Si las claves ya existen, no hacer nada
      if (ClaraPrivateKey && ClaraPublicKey) {
        return;
      }
  
      // Generar claves si no existen
      const key = ec.genKeyPair();
      setClaraPrivateKey(key.getPrivate('hex'));
      setClaraPublicKey(key.getPublic('hex'));

    } catch (error) {
      // Si algo sale mal, mostrar un mensaje de error
      alert('Ocurrió un error al generar las claves de Clara.');
      console.error('Error al generar las claves:', error);
    }
  };

  // Función para que Daniel genere su clave privada y pública
  const generateDanielPrivateKey = () => {
    try {
      // Si las claves ya existen, no hacer nada
      if (DanielPrivateKey && DanielPublicKey) {
        return;
      }
  
      // Generar claves si no existen
      const key = ec.genKeyPair();
      setDanielPrivateKey(key.getPrivate('hex'));
      setDanielPublicKey(key.getPublic('hex')); 
      alert('Daniel ha generado sus llaves');
    } catch (error) {
      // Si algo sale mal, mostrar un mensaje de error
      alert('Ocurrió un error al generar las claves de Daniel.');
      console.error('Error al generar las claves:', error);
    }
  };

  // Función para que Daniel cifre el mensaje con la clave pública de Clara
  const encryptMessageForClara = () => {
    try {
      // Verificar que todos los valores necesarios estén presentes
      if (!ClaraPublicKey || !DanielMessage || !DanielPrivateKey) {
        alert('Se necesita la clave pública de Clara, un mensaje y la clave privada de Daniel.');
        return;
      }
  
      // Daniel genera un secreto compartido usando su clave privada y la clave pública de Clara
      const ClaraPublic = ec.keyFromPublic(ClaraPublicKey, 'hex');
      const DanielPrivate = ec.keyFromPrivate(DanielPrivateKey, 'hex');
      const sharedSecret = DanielPrivate.derive(ClaraPublic.getPublic()).toString(16);
  
      // Crear una clave simétrica a partir del secreto compartido
      const symmetricKey = crypto.createHash('sha256').update(sharedSecret).digest();
      const iv = crypto.randomBytes(16);
  
      // Cifrar el mensaje de Daniel
      const cipher = crypto.createCipheriv('aes-256-cbc', symmetricKey, iv);
      let encrypted = cipher.update(DanielMessage, 'utf8', 'hex');
      encrypted += cipher.final('hex');
      const fullEncryptedMessage = `${iv.toString('hex')}:${encrypted}`;
  
      // Actualizar el mensaje cifrado en la comunicación y avisar a Clara
      setEncryptedMessage(fullEncryptedMessage);
      setReceivedMessage(fullEncryptedMessage);
      setMessageReceived(true); // Indicar que Clara recibió un mensaje
  
    } catch (error) {
      // Mostrar una alerta si ocurre un error durante el proceso de cifrado
      alert('Ocurrió un error al cifrar el mensaje.');
      console.error('Error al cifrar el mensaje:', error);
    }
  };
  

  // Función para que Clara descifre el mensaje recibido
  const decryptMessageForClara = () => {
    if (!ClaraPrivateKey || !receivedMessage || !DanielPublicKey) {
      alert('Se necesita la clave privada de Clara, un mensaje cifrado y la clave pública de Daniel.');
      return;
    }

    try {
      const [ivHex, encryptedHex] = receivedMessage.split(':');
      const iv = Buffer.from(ivHex, 'hex');

      // Clara genera un secreto compartido usando su clave privada y la clave pública de Daniel
      const ClaraPrivate = ec.keyFromPrivate(ClaraPrivateKey, 'hex');
      const DanielPublic = ec.keyFromPublic(DanielPublicKey, 'hex'); // Usar la clave pública de Daniel
      const sharedSecret = ClaraPrivate.derive(DanielPublic.getPublic()).toString(16);

      // Crear una clave simétrica a partir del secreto compartido
      const symmetricKey = crypto.createHash('sha256').update(sharedSecret).digest();

      // Descifrar el mensaje
      const decipher = crypto.createDecipheriv('aes-256-cbc', symmetricKey, iv);
      let decrypted = decipher.update(encryptedHex, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      setDecryptedMessage(decrypted);
    } catch (error) {
      alert('Error al descifrar el mensaje');
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="font-extralight text-center text-2xl md:text-4xl dark:text-neutral-200 py-4">
        Cifrado ECC (Criptografía de Curva Elíptica)
      </div>
      <div className="p-5 my-4 bg-blue-100 dark:bg-blue-800 md:dark:bg-blue-950 rounded-md text-center dark:text-neutral-200 w-full">
        <p>
          ¡Descubre el cifrado asimétrico! Primero, genera las claves de Clara, luego las de Daniel. 
          Cifra el mensaje y descífralo.
        </p>
      </div>
  
      <div className="flex flex-col lg:flex-row lg:space-x-4 w-full">
        {/* Máquina de Clara */}
        <div className="w-full lg:w-1/3 bg-gray-900 p-4 rounded-lg shadow-md mb-4 lg:mb-0">
          <h3 className="font-bold text-lg mb-6 text-center">Máquina de Clara</h3>
          <button
            onClick={generateClaraKeys}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 flex justify-center items-center"
          >
            <FaKey className="mr-2" /> Generar Llaves
          </button>
          <div className="mb-5 break-words">
            <p><strong>Clave Pública:</strong> {ClaraPublicKey}</p>
          </div>
  
          {messageReceived && (
            <p className="text-green-400 mb-4 text-center">¡Clara ha recibido un mensaje cifrado!</p>
          )}
          <button
            onClick={decryptMessageForClara}
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg flex justify-center items-center"
          >
            <FaUnlock className="mr-2" /> Desencriptar Mensaje Recibido
          </button>
          <p className="break-words mt-4"><strong>Mensaje Descifrado:</strong> {decryptedMessage}</p>
        </div>
  
        {/* Comunicación */}
        <div className="w-full lg:w-1/3 bg-gray-900 p-4 rounded-lg shadow-md mb-6 lg:mb-0">
          <h3 className="font-bold text-lg mb-4 text-center">Comunicación</h3>
          <p className="break-words mb-5"><strong>Clave pública de Clara:</strong> {ClaraPublicKey}</p>
          <p className="break-words mt-4"><strong>Mensaje cifrado de Daniel:</strong> {encryptedMessage}</p>
        </div>
  
        {/* Máquina de Daniel */}
        <div className="w-full lg:w-1/3 bg-gray-900 p-4 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-6 text-center">Máquina de Daniel</h3>
          <button
            onClick={generateDanielPrivateKey}
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg mb-4 flex justify-center items-center"
          >
            <FaKey className="mr-2" /> Generar Llaves
          </button>
          <textarea
            value={DanielMessage}
            onChange={(e) => setDanielMessage(e.target.value)}
            placeholder="Escribe el mensaje de Daniel"
            className="w-full p-2 border border-gray-600 bg-gray-700 text-gray-200 rounded-lg mb-4"
          />
          <button
            onClick={encryptMessageForClara}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg flex justify-center items-center"
          >
            <FaLock className="mr-2" /> Encriptar Mensaje
          </button>
          <p className="break-words mt-4"><strong>Mensaje Encriptado:</strong> {encryptedMessage}</p>
        </div>
      </div>
    </div>
  );
  
};

export default CifradoECC;
