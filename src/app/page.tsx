// app/page.tsx
import SocialBar from "@/components/SocialBar";
import SecaoTrajetoria from "@/components/SecaoTrajetoria";
import SecaoProject from "@/components/SecaoProject";
import Footer from "@/components/Footer"
import SecaoConquista from "@/components/SecaoConquista"
import SecaoContato from "@/components/SecaoContato";
import Image from "next/image";
import profileImage from "../../public/globe.svg"


export default function Home() {
  // const repos = await getRepos("jpcalsavara");

  return (
    <section className="pt-8 px-4 max-w-4xl mx-auto min-w-2/3">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Olá, eu sou João Pedro Calsavara</h1>
        <p className="text-lg text-cyan-500">Desenvolvedor focado em criar soluções web criativas e eficientes com React, Node.js, Prisma, C++ e C</p>
      </div>

      <Image src={profileImage} alt="imagem de perfil"
      className="w-70 h-70 mx-auto rounded-full border-4 border-cyan-500 shadow-lg mb-8"
      ></Image>
      
      {/* <SecaoProject></SecaoProject>

      <SecaoTrajetoria />

      <SecaoConquista></SecaoConquista>

      <SecaoContato></SecaoContato>

      <Footer></Footer>

      <SocialBar></SocialBar> */}
    </section>
  );
}
