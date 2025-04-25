import "../styles/globals.css"; // Corrigido o path para o arquivo CSS
import Header from "../components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="pb-0 px-4 min-h-screen bg-midnight">{children}</main>
      </body>
    </html>
  );
}