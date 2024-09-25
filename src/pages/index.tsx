import { AuroraBackgroundDemo } from '../components/AuroraBackgroundDemo';
import CifradoCesar from "@/components/CifradoCesar";
import CifradoEscitala from "@/components/CifradoEscitala";
import {ExpandableCardDemo} from '@/components/ExpandableCardsDemo';
export default function Home() {
  return (
    <div>
      <AuroraBackgroundDemo />
      <ExpandableCardDemo/>
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
