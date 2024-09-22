import Image from "next/image";
import { Inter } from "next/font/google";
import { AuroraBackgroundDemo } from '../components/AuroraBackgroundDemo';
import CifradoCesar from "@/components/CifradoCesar";
import CifradoEscitala from "@/components/CifradoEscitala";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <AuroraBackgroundDemo />
      <CifradoCesar />
      <CifradoEscitala />

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 text-center py-6 pt-8">
        <p className="text-gray-700 dark:text-gray-300">
          Luis Gerardo Del Ángel Hernández
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Ingeniería en Desarrollo y Gestión de Software
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Séptimo cuatrimestre, Grupo B
        </p>
      </footer>
    </div>
  );
}
