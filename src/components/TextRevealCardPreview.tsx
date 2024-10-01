"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-white dark:bg-[#0E0E10] h-[30rem] rounded-2xl w-full">
      <TextRevealCard
        text="Protege lo tuyo"
        revealText="Descifra el éxito"
      >
        <TextRevealCardTitle>
          El poder está en tus manos.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          ¿Listo para descifrar el futuro? Solo tú tienes la clave. Pasa el cursor y revela lo oculto.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
