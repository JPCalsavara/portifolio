import SecaoContato from "@/components/SecaoContato";

export default function Contato() {
  return (
    <div className=" pt-8 px-4 max-w-4xl mx-auto min-w-2/3">
      <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
      <p className="text-lg mb-8 text-gray-300 text-center">
        Estou disponível para conversar! Você pode entrar em contato comigo por e-mail, WhatsApp ou LinkedIn.
      </p>
      <SecaoContato />
    </div>
  );
}