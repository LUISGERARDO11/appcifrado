"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={false} />
      ));
      

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Descubre más sobre los distintos métodos de cifrado y cómo protegen tu información.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
    return (
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 my-4 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          El cifrado César es uno de los métodos de cifrado por sustitución más antiguos, utilizado por Julio César para enviar mensajes confidenciales a sus generales. Consiste en desplazar cada letra del texto original un número fijo de posiciones en el alfabeto.
          Por ejemplo, si usamos un desplazamiento de 3, la letra &quot;A&quot; se convierte en &quot;D&quot;, &quot;B&quot; en &quot;E&quot; y así sucesivamente.
        </p>
        <Image
          src="/imgcesar1.png"
          alt="Visualización de desplazamiento del abecedario"
          height="1000"
          width="1000"
          className="md:w-3/4 md:h-3/4 h-full w-full my-4 mx-auto object-contain mt-8"
        />
        <p className="text-neutral-600 my-4 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Este cifrado funciona bajo un concepto muy simple, donde el emisor y el receptor deben conocer el número exacto de desplazamiento para poder leer el mensaje cifrado. Aunque hoy en día parece fácil de romper, en la época romana, cuando los enemigos carecían de conocimientos avanzados de criptografía, el método era relativamente seguro. Esto lo convertía en una técnica efectiva para proteger la correspondencia militar.
        </p>
  
        <p className="text-neutral-600 my-4 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Hoy en día, el cifrado César es considerado uno de los cifrados más débiles, ya que solo ofrece 25 posibles combinaciones (excluyendo el caso de no desplazar). Este tipo de cifrado es vulnerable a ataques de fuerza bruta, donde un atacante prueba cada desplazamiento posible hasta encontrar el correcto. A pesar de ello, sigue siendo una herramienta útil en la enseñanza de conceptos básicos de criptografía, y es frecuentemente utilizado en acertijos o juegos de criptografía.
        </p>
        <Image
          src="/imgcesar2.png"
          alt="Ejemplo de uso del cifrado César"
          height="1000"
          width="1000"
          className="md:w-3/4 md:h-3/4 h-full w-full mx-auto my-4 object-contain mt-8"
        />
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Además, su estructura simple lo convierte en un buen ejemplo para entender la diferencia entre cifrados por sustitución (como el César) y cifrados más complejos como el AES, que involucran operaciones matemáticas avanzadas y claves mucho más seguras. Aunque es inapropiado para proteger información crítica en la actualidad, su impacto histórico es innegable.
        </p>
  
       
       
      </div>
    );
  };
  
  
  const DummyContent2 = () => {
    return (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 my-4 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          El cifrado Escítala es un antiguo método de transposición utilizado por los griegos y espartanos para transmitir mensajes de manera segura. Este cifrado se basa en una herramienta física: una varilla o cilindro llamado &quot;escítala&quot;, en la que se enrolla una tira de cuero o pergamino con el mensaje escrito de forma continua. Al desenrollar la tira, el mensaje quedaba ilegible a menos que se volviera a enrollar en una escítala del mismo diámetro.
        </p>
        <Image
          src="/imgescitala1.jpg"
          alt="Imagen de una escítala utilizada en la antigüedad"
          height="1000"
          width="1000"
          className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8"
        />
        <p className="text-neutral-600 my-4 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          La escítala fue utilizada durante tiempos de guerra, permitiendo a los generales enviar órdenes de manera segura a sus tropas. El cifrado de transposición funciona al alterar el orden de los caracteres del mensaje, en lugar de sustituir los caracteres como en el cifrado César. Si un enemigo interceptaba la tira sin la escítala correcta, el mensaje aparecía como una secuencia desordenada de letras.
        </p>
  
        <p className="text-neutral-600 my-4 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Aunque el cifrado Escítala es extremadamente simple comparado con los algoritmos modernos, su principio sigue siendo útil para comprender los conceptos de cifrado de transposición. Estos métodos continúan siendo una base importante en la criptografía, donde alterar el orden de los datos puede agregar una capa adicional de seguridad en combinación con otros cifrados más avanzados.
        </p>
  
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          A pesar de ser uno de los primeros sistemas de cifrado documentados, el Escítala nos muestra cómo incluso en la antigüedad se intentaban crear soluciones ingeniosas para proteger la confidencialidad de la información. Hoy en día, este tipo de técnicas ha sido reemplazado por sistemas como RSA o AES, pero el concepto de ocultar información mediante la manipulación de su disposición sigue vigente.
        </p>
  
        
        <Image
          src="/imgescitala2.png"
          alt="Ejemplo gráfico del funcionamiento de la escítala"
          height="1000"
          width="1000"
          className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8"
        />
      </div>
    );
  };
  


const DummyContent3 = () => { 
    return (
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 my-4 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            3DES (Triple DES) es una versión mejorada del algoritmo DES, diseñado para proporcionar mayor seguridad. A diferencia de DES, 
            que utiliza una sola clave para cifrar y descifrar, 3DES emplea tres claves diferentes para realizar múltiples operaciones de 
            cifrado y descifrado, lo que incrementa la robustez del sistema de seguridad.
        </p>

        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            El proceso de cifrado en 3DES implica tres fases diferentes, que aseguran la integridad de los datos:
        </p>
        <ul className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto list-disc list-inside">
            <li>Primero, se cifra el mensaje utilizando una primera clave.</li>
            <li>Luego, se descifra el mensaje cifrado con una segunda clave.</li>
            <li>Finalmente, se vuelve a cifrar el resultado con una tercera clave.</li>
        </ul>
        <Image
          src="/img3des1.jpg"
          alt="Bienvenida page"
          height="1000"
          width="1000"
          className="md:w-3/4 md:h-3/4 h-full my-4 w-full mx-auto object-contain mt-8"
        />
        <p className="text-neutral-600 my-4  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            Este proceso en tres pasos añade un nivel extra de seguridad en comparación con el algoritmo DES original. La estructura triple
            reduce la probabilidad de ataques exitosos, aunque esto hace que el proceso sea más lento.
        </p>

        <p className="text-neutral-600 my-4  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            3DES se utiliza en sectores donde la seguridad de la información es crítica, como en transacciones bancarias, cajeros automáticos, 
            y redes que manejan datos altamente sensibles. Aunque su uso ha sido reemplazado por algoritmos más eficientes, como AES, sigue 
            siendo una opción válida para muchas aplicaciones.
        </p>

        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            Mantener la información cifrada con 3DES garantiza que los datos solo puedan ser leídos por aquellos que posean las claves correctas, 
            protegiendo así la información durante su transmisión o almacenamiento.
        </p>
       
      </div>
    );
  };
  

  const DummyContent4 = () => {
    return (
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 my-4 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          SHA-2 (Secure Hash Algorithm 2) es una familia de funciones hash criptográficas
          utilizadas para generar un resumen de longitud fija a partir de un mensaje de longitud variable.
          Estas funciones son fundamentales para la seguridad informática, ya que permiten verificar la integridad de los datos
          y son ampliamente utilizadas en aplicaciones de firma digital, autenticación y protección de datos.
        </p>
  
       
        <p className="text-neutral-600  my-4 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <strong>Características principales de SHA-2:</strong>
          <ul className="list-disc list-inside">
            <li>Generación de un resumen único e irreversible a partir de un mensaje.</li>
            <li>Determinismo: la misma entrada siempre produce el mismo hash.</li>
            <li>Resistencia a colisiones: es extremadamente difícil encontrar dos mensajes diferentes con el mismo hash.</li>
            <li>Efecto avalancha: un cambio mínimo en el mensaje produce un cambio drástico en el hash.</li>
          </ul>
        </p>
  
        <p className="text-neutral-600  my-4 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <strong>Variantes de SHA-2:</strong>
          <ul className="list-disc list-inside">
            <li>SHA-224: Genera un resumen de 224 bits (28 bytes) a partir de bloques de 512 bits.</li>
            <li>SHA-256: Genera un resumen de 256 bits (32 bytes) a partir de bloques de 512 bits. Es la variante más comúnmente utilizada.</li>
            <li>SHA-384: Genera un resumen de 384 bits (48 bytes) a partir de bloques de 1024 bits.</li>
            <li>SHA-512: Genera un resumen de 512 bits (64 bytes) a partir de bloques de 1024 bits. Ofrece mayor seguridad en aplicaciones que requieren un alto nivel de protección.</li>
          </ul>
        </p>
  
        <p className="text-neutral-600 my-4 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          A diferencia de los algoritmos de cifrado, las funciones hash como SHA-2 son unidireccionales, 
          lo que significa que no pueden revertirse para obtener el mensaje original a partir del resumen generado.
          Esto las hace ideales para verificar la integridad de los datos, pero no para cifrar o descifrar información.
        </p>
  
        <Image
          src="/imghash1.jpg"
          alt="Diagrama de SHA-2"
          height="1000"
          width="1000"
          className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8"
        />
        
        <Image
          src="/imghash2.png"
          alt="Proceso de hashing SHA-2"
          height="1000"
          width="1000"
          className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8"
        />
      </div>
    );
  };
  
  
const data = [
    {
      category: "Basado en el desplazamiento de letras.",
      title: "Cifrado César",
      src: "https://plus.unsplash.com/premium_photo-1674506652948-dda165b89070?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
      link:"#", 
    },
    {
      category: "Un cifrado basado en una vara o cilindro.",
      title: "Cifrado Escítala",
      src: "https://plus.unsplash.com/premium_photo-1676618539987-12b7c8a8ae61?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent2/>,
      link: "#",
    },
    {
      category: "Una versión mejorada del algoritmo DES",
      title: "3DES (Triple DES)",
      src: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent3 />,
      link: "#",
    },
    {
      category: "familia de funciones hash criptográficas",
      title: "SHA-2 (Secure Hash Algorithm 2)",
      src: "https://plus.unsplash.com/premium_photo-1683936164504-79916cb7ce2c?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent4 />,
      link: "#", 
    },
  ];
  