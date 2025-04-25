import BlogConquistasRepository from "@/lib/blogConquistasRepository";
import ConquistaCard from "@/components/ConquistaCard";
import SocialBar from "@/components/SocialBar";
import Footer from "@/components/Footer";
import SecaoContato from "@/components/SecaoContato";

export default function Conquistas() {
  const conquistas = BlogConquistasRepository.getBlogs();

  return (
    <div className="pt-8 px-4 max-w-4xl mx-auto min-w-3/4">
      <h2 className="text-3xl font-bold mb-8 text-center">Minhas Conquistas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {conquistas.map((conquista, index) => (
          <ConquistaCard key={index} {...conquista} />
        ))}
      </div>
      <SecaoContato></SecaoContato>
      
      <Footer></Footer>
      
      <SocialBar></SocialBar>
    </div>
  );
}