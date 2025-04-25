export default function Footer() {
    return (
      <footer className=" bottom-0 left-0 w-{100%} bg-gray-800 text-gray-400 text-center py-4">
        <p>© {new Date().getFullYear()} João Pedro Calsavara. Todos os direitos reservados.</p>
      </footer>
    );
  }