import { TrajetoriaCard } from "../components/TrajetoriaCard";

interface SecaoTrajetoriaProps {
  eixo?: "horizontal" | "vertical"; // Define o eixo como parâmetro opcional
}

export default function SecaoTrajetoria({ eixo = "vertical" }: SecaoTrajetoriaProps) {
  const eventos = [
    {
      titulo: "Co-criação do Semea Code com meu professor",
      descricao: "Projeto de Extensão de aulas de programação em escolas públicas.",
      periodo: "Ago,2024 - Atual",
      tags: ["faculdade", "extracurricular"],
      imagem: "/images/semea-code.jpg", // Caminho da imagem
    },
    {
      titulo: "Assessor de TI na Atria Jr, Empresa Júnior na Unicamp",
      descricao: "Trabalhei com Wordpress e Node.js desenvolvendo soluções web para empresas.",
      periodo: "Maio,2024 - Atual",
      tags: ["trabalho", "front-end", "back-end", "extracurricular"],
      imagem: "/images/atria-jr.jpg", // Caminho da imagem
    },
    {
      titulo: "Universitário em Análise e Desenvolvimento de Sistemas na Unicamp",
      descricao: "Ingressei sem nenhum conhecimento em programação",
      periodo: "Mar,2024 - Atual",
      tags: ["faculdade", "programação"],
      imagem: "/images/unicamp.jpg", // Caminho da imagem
    },
  ];

  return (
    <section className="py-16 px-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Minha Trajetória</h2>
      <div
        className={`${
          eixo === "horizontal" ? "flex flex-wrap gap-8" : "relative border-l-2 border-sky-600 ml-3 space-y-8"
        }`}
      >
        {eventos.map((evento, index) => (
          <TrajetoriaCard key={index} {...evento} />
        ))}
      </div>
    </section>
  );
}