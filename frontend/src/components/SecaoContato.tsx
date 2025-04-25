import Image from "next/image";

export default function SecaoContato() {
  const githubLink = "https://github.com/JPCalsavara";
  const linkedinLink = "https://www.linkedin.com/in/jo%C3%A3o-pedro-leite-calsavara-b951b6230/";
  const email = "mailto:jpcalsavara@example.com";
  const resumeLink = "/files/curriculo.pdf"; // Substitua pelo caminho correto do currículo

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Entre em Contato</h2>

      {/* Redes de Contato */}
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-cyan-500 hover:underline text-lg"
        >
          <Image
            src="/images/github-logo.png"
            alt="GitHub"
            width={32}
            height={32}
            className="mb-2"
          />
          GitHub
        </a>
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-cyan-500 hover:underline text-lg"
        >
          <Image
            src="/images/linkedin-logo.png"
            alt="LinkedIn"
            width={32}
            height={32}
            className="mb-2"
          />
          LinkedIn
        </a>
        <a
          href={email}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-cyan-500 hover:underline text-lg"
        >
          <Image
            src="/images/email-logo.png"
            alt="Email"
            width={32}
            height={32}
            className="mb-2"
          />
          Email
        </a>
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-cyan-500 hover:underline text-lg"
        >
          <Image
            src="/images/resume-logo.png"
            alt="Currículo"
            width={32}
            height={32}
            className="mb-2"
          />
          Currículo
        </a>
      </div>

      {/* Formulário de Contato */}
      <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Seu nome"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Seu email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Sua mensagem"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}