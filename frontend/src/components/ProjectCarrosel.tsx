"use client";

import { DataProject } from "@/lib/githubProjectsRepository";
import { ProjetCard } from "./ProjectCard";
import { useRef } from "react";

export default function ProjectCarrosel() {
  const projetos = DataProject.getProjects();
  const carrosselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Meus Projetos</h2>
      {/* Botão para rolar à esquerda */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
      >
        {"<"}
      </button>

      {/* Contêiner do carrossel */}
      <div
        ref={carrosselRef}
        className="flex gap-6 px-4 overflow-hidden w-"
      >
        <div className="flex gap-6">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[calc(33.33%-1rem)]"
              style={{ flexBasis: "calc(33.33% - 1rem)" }}
            >
              <ProjetCard {...projeto} />
            </div>
          ))}
        </div>
      </div>

      {/* Botão para rolar à direita */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
      >
        {">"}
      </button>
    </div>
  );
}