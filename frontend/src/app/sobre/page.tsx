import SecaoTrajetoria from "../../components/SecaoTrajetoria";

export default function Sobre() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-2xl font-bold mb-4">Sobre Mim</h2>
      <p className="mb-4">Quem sou eu, hobbies, valores e o que me motiva.</p>
      <SecaoTrajetoria />
    </div>
  );
}