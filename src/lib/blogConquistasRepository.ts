export default class BlogConquistasRepository {
    static getBlogs() {
      return [
        {
          titulo: "Participação na Maratona de Programação",
          descricao: "Resolvi problemas complexos com uma equipe durante um evento de 24h.",
          link: "https://meublog.com/maratona-programacao",
          imagem: "/images/maratona.jpg",
          tags: ["faculdade", "extracurricular"],
        },
        {
          titulo: "Projeto de Extensão Universitária",
          descricao: "Organizei workshops de programação para alunos do ensino médio.",
          link: "https://meublog.com/projeto-extensao",
          imagem: "/images/extensao.jpg",
          tags: ["faculdade", "projetos"],
        },
        {
          titulo: "Desenvolvimento de Aplicativo",
          descricao: "Criei um aplicativo para gerenciar tarefas em equipe.",
          link: "https://meublog.com/app-gerenciamento",
          imagem: "/images/app.jpg",
          tags: ["projetos"],
        },
        {
          titulo: "Certificação em React",
          descricao: "Concluí um curso avançado de React e desenvolvimento front-end.",
          link: "https://meublog.com/certificacao-react",
          imagem: "/images/react.jpg",
          tags: ["extracurricular"],
        },
        {
          titulo: "Hackathon Nacional",
          descricao: "Participei de um hackathon e desenvolvi uma solução inovadora.",
          link: "https://meublog.com/hackathon",
          imagem: "/images/hackathon.jpg",
          tags: ["faculdade", "extracurricular"],
        },
        {
          titulo: "Publicação de Artigo Científico",
          descricao: "Publiquei um artigo sobre inteligência artificial aplicada à saúde.",
          link: "https://meublog.com/artigo-cientifico",
          imagem: "/images/artigo.jpg",
          tags: ["faculdade"],
        },
      ];
    }
  }