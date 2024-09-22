// providers.tsx
import { ReactNode } from "react";
// Aquí puedes añadir más providers como Context API, Redux, etc.
export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Envuelve aquí otros providers si es necesario */}
      {children}
    </>
  );
}