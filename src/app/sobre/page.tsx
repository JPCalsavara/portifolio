import SecaoContato from "@/components/SecaoContato";
import SecaoTrajetoria from "@/components/SecaoTrajetoria";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";

export default function Sobre() {
  return (
    <div className="pt-8 px-4 max-w-4xl mx-auto min-w-2/3">
      <h2 className="text-3xl font-bold mb-8 text-center">Sobre mim</h2>
      <p className="text-lg mb-8 text-gray-300">
        Sou um desenvolvedor apaixonado por tecnologia, com hobbies que incluem programação, leitura e esportes. 
        Meus valores incluem trabalho em equipe, aprendizado contínuo e inovação. O que me motiva é a oportunidade 
        de criar soluções que impactem positivamente a vida das pessoas.
      </p>
      <SecaoTrajetoria />
      <SecaoContato />
      <Footer />
      <SocialBar />
    </div>
  );
}