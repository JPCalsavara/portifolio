import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-midnight shadow px-40 py-4 flex gap-10 text-sm justify-between items-center">
      <h1 className="font-mono text-3xl mr-min text-blue-300 hover:shadow-lg hover:text-blue-500 transition duration-300">JC</h1>
      <nav className="flex gap-4">
      <Link href="/" className="text-lg hover:text-blue-500 transition duration-300">Início</Link>
      <Link href="/projetos" className="text-lg hover:text-blue-500 transition duration-300">Projetos</Link>
      <Link href="/conquistas" className="text-lg hover:text-blue-500 transition duration-300">Conquistas</Link>
      <Link href="/sobre" className="text-lg hover:text-blue-500 transition duration-300">Sobre</Link>
      <Link href="/contato" className="text-lg hover:text-blue-500 transition duration-300">Contato</Link>
      </nav>
    </header>
  );
}

