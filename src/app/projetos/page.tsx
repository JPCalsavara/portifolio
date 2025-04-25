import { DataProject } from "@/lib/githubProjectsRepository";
import { ProjetCard } from "@/components/ProjectCard";
import SecaoContato from "@/components/SecaoContato";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";

export default function Projetos() {
  const projetos = DataProject.getProjects();

  return (
    <div className="pt-8 px-4 max-w-4xl mx-auto min-w-3/4">
      <h2 className="text-3xl font-bold mb-8 text-center">Meus Projetos</h2>
      <div className="flex flex-wrap gap-6">
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
      <SecaoContato></SecaoContato>
      
      <Footer></Footer>
      
      <SocialBar></SocialBar>
    </div>
  );
}