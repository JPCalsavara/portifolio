interface TrajetoriaCardProps {
  titulo: string;
  descricao: string;
  periodo?: string;
  tags?: string[];
  imagem?: string; // Nova propriedade para a imagem
}

export function TrajetoriaCard({ titulo, descricao, periodo, tags, imagem }: TrajetoriaCardProps) {
  return (
    <div className="pl-6 bg-gray-800 p-4 rounded-lg shadow-md">
      {imagem && (
        <img
          src={imagem}
          alt={titulo}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-xl font-semibold text-white">{titulo}</h3>
      <p className="text-gray-400">{descricao}</p>
      <span className="text-sm text-white font-medium">{periodo}</span>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-900 text-white text-xs font-semibold px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}