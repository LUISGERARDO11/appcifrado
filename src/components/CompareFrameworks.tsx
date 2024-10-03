// Importación de dependencias
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CompareFrameworks = () => {
  // Datos del gráfico
  const data = {
    labels: ["Facilidad de Implementación", "Rendimiento", "Integración de Librerías", "Compatibilidad"],
    datasets: [
      {
        label: "Angular",
        data: [3, 3.5, 4, 4], // Puntuaciones arbitrarias para Angular
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Next.js + React",
        data: [4.5, 4, 4.5, 5], // Puntuaciones arbitrarias para Next.js + React
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Comparación de Angular y Next.js con React",
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 md:px-10 bg-white dark:bg-black">
      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
        Comparación: Angular vs. Next.js con React
      </h1>

      {/* Contenido de la Comparación */}
      <div className="w-full max-w-6xl space-y-8">
        <div className="w-full max-w-6xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-[#0a0e1a] p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">Facilidad de Implementación</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Angular tiene una curva de aprendizaje más pronunciada al trabajar con bibliotecas de cifrado como ECC y 3DES, debido a su estructura
                    más estricta y configuración. Next.js con React, por otro lado, permite una integración más rápida y sencilla, facilitando la implementación
                    de métodos de cifrado tanto en el cliente como en el servidor.
                </p>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">Rendimiento</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Si bien Angular puede manejar grandes aplicaciones, el renderizado en el cliente con cifrados complejos como ECC y SHA-2 puede afectar
                    el rendimiento. Next.js con React, con soporte para renderizado en el servidor (SSR), distribuye mejor la carga, ofreciendo un rendimiento
                    superior al gestionar cifrados intensivos como SHA-2.
                </p>
                </div>

                <div className="bg-white dark:bg-[#0a0e1a] p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">Integración de Librerías</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Con Next.js y React, la integración de librerías de cifrado como `crypto-js` para 3DES o `ecc-jsbn` para ECC es más sencilla y directa,
                    aprovechando las ventajas del ecosistema de JavaScript moderno. Angular, aunque cuenta con bibliotecas similares, requiere una mayor
                    configuración inicial debido a su enfoque basado en módulos.
                </p>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">Compatibilidad y Seguridad</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Tanto Angular como Next.js son compatibles con la implementación de algoritmos de cifrado como 3DES y SHA-2, pero Next.js sobresale en
                    operaciones del lado del servidor, lo que permite un manejo más seguro de datos sensibles. Angular, siendo un framework más orientado
                    al cliente, puede requerir configuraciones adicionales para maximizar la seguridad en cifrados avanzados como ECC.
                </p>
                </div>
            </div>
        </div>

        <div className="bg-white dark:bg-[#0a0e1a] p-6 rounded-lg shadow-lg w-full">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default CompareFrameworks;
