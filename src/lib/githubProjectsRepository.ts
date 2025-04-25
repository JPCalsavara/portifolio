export class DataProject {
    titulo: string;
    descricao: string;
    link: string;
    imagem: string;
    tecnologias: string[];
  
    constructor(
      titulo: string,
      descricao: string,
      link: string,
      imagem: string,
      tecnologias: string[]
    ) {
      this.titulo = titulo;
      this.descricao = descricao;
      this.link = link;
      this.imagem = imagem;
      this.tecnologias = tecnologias;
    }
  
    // Método estático para retornar os projetos
    static getProjects(): DataProject[] {
      return [
        new DataProject(
          "Projeto 1",
          "Descrição do projeto 1.",
          "https://github.com/projeto1",
          "/images/projeto1.jpg",
          ["React", "TypeScript"]
        ),
        new DataProject(
          "Projeto 2",
          "Descrição do projeto 2.",
          "https://github.com/projeto2",
          "/images/projeto2.jpg",
          ["Next.js", "Tailwind CSS"]
        ),
        new DataProject(
          "Projeto 3",
          "Descrição do projeto 3.",
          "https://github.com/projeto3",
          "/images/projeto3.jpg",
          ["Node.js", "Express"]
        ),
        new DataProject(
          "Projeto 4",
          "Descrição do projeto 4.",
          "https://github.com/projeto4",
          "/images/projeto4.jpg",
          ["MongoDB", "GraphQL"]
        ),
        new DataProject(
          "Projeto 5",
          "Descrição do projeto 5.",
          "https://github.com/projeto5",
          "/images/projeto5.jpg",
          ["Python", "Django"]
        ),
      ];
    }
  }