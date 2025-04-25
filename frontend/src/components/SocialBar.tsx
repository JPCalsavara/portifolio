export default function SocialBar() {
    const githubLink = "https://github.com/JPCalsavara";
    const linkedinLink = "https://www.linkedin.com/in/jo%C3%A3o-pedro-leite-calsavara-b951b6230/";
    const email = "mailto:jpcalsavara@example.com";
    const resumeLink = "/files/curriculo.pdf"; // Substitua pelo caminho correto do currículo
  
    return (
      <div className="fixed left-0 bottom-0 w-16 border-r-2 border-sky-700 rounded-xl bg-gray-800 flex flex-col justify-end items-center py-8 gap-6">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img
            src="../images/github-logo.svg"
            alt="GitHub"
            className="w-8 h-8 hover:opacity-80 transition-opacity"
          />
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <img
            src="/images/linkedin-logo.png"
            alt="LinkedIn"
            className="w-8 h-8 hover:opacity-80 transition-opacity"
          />
        </a>
        <a href={email} target="_blank" rel="noopener noreferrer">
          <img
            src="/images/email-logo.png"
            alt="Email"
            className="w-8 h-8 hover:opacity-80 transition-opacity"
          />
        </a>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <img
            src="/images/resume-logo.png"
            alt="Currículo"
            className="w-8 h-8 hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
    );
  }