interface ProjetCardProps {
  titulo: string;
  descricao: string;
  link?: string;
  imagem?: string;
  tecnologias?: string[];
}

export function ProjetCard({ titulo, descricao, link, imagem, tecnologias }: ProjetCardProps) {
  return (
    <div className="bg-gray-800 text-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
      {imagem && (
        <img
          src={imagem}
          alt={titulo}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-sky-400">{titulo}</h3>
        <p className="text-gray-300 mb-4">{descricao}</p>
        {tecnologias && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tecnologias.map((tech, index) => (
              <span
                key={index}
                className="bg-sky-700 text-white text-xs px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:underline text-sm"
          >
            Ver projeto
          </a>
        )}
      </div>
    </div>
  );
}