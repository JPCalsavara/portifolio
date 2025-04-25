import ConquistaCard from "./ConquistaCard";
import BlogConquistasRepository from "@/lib/blogConquistasRepository";

export default function SecaoConquista() {
  const conquistas = BlogConquistasRepository.getBlogs()

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Minhas Conquistas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {conquistas.map((conquista, index) => (
          <ConquistaCard key={index} {...conquista} />
        ))}
      </div>
    </div>
  );
}