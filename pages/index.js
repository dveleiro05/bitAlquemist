import Head from "next/head";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from 'next/image';
import logo from '../public/chibi_wizard.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>BitAlquemist</title>
        <meta name="description" content="Transmutando ideas en líneas de código y hechizos digitales" />
      </Head>
      <main className="min-h-screen bg-darkbg text-white font-sans">
        <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold">🧪 BitAlquemist</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:text-accent">Sobre mí</a>
            <a href="#portfolio" className="hover:text-accent">Proyectos</a>
            <a href="#contact" className="hover:text-accent">Contacto</a>
          </nav>
        </header>
        <section className="text-center py-20 px-6">
          <img src="{logo}" alt="BitAlquemist Logo" className="mx-auto mb-6 w-32 h-32 rounded-full shadow-lg border border-accent" />
          <h2 className="text-4xl font-extrabold mb-2">BitAlquemist</h2>
          <p className="text-xl text-accent italic">Transmutando ideas en líneas de código y hechizos digitales</p>
        </section>
        <section id="about" className="py-10 px-6 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 border-b-2 border-accent inline-block">Sobre mí</h3>
          <p className="text-lg leading-relaxed">Soy Dani, desarrollador con 4 años de experiencia apasionado por los videojuegos, la programación creativa y la alquimia digital. Busco unir el arte y la lógica para construir experiencias únicas.</p>
        </section>
        <section id="portfolio" className="py-10 px-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 border-b-2 border-accent inline-block">Proyectos en camino</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#111] p-4 rounded-xl border border-gray-700 shadow-md">
              <h4 className="text-xl font-semibold mb-1">Prompt Hero Español</h4>
              <p className="text-sm text-gray-300">Repositorio de prompts optimizados con IA en español.</p>
            </div>
            <div className="bg-[#111] p-4 rounded-xl border border-gray-700 shadow-md">
              <h4 className="text-xl font-semibold mb-1">Simulador de entrevistas técnicas</h4>
              <p className="text-sm text-gray-300">App con preguntas FAANG, IA y resultados interactivos.</p>
            </div>
          </div>
        </section>
        <section className="py-12 bg-[#161616] border-t border-gray-800 mt-20">
          <h3 className="text-center text-xl font-semibold text-blue-200 mb-6">Tecnologías favoritas</h3>
          <div className="flex flex-wrap justify-center gap-4 px-6">
            {["TypeScript", "Next.js", "Godot", "Tailwind CSS", "Python"].map((tech) => (
              <span key={tech} className="bg-gray-800 border border-accent text-accent px-3 py-1 rounded-full">{tech}</span>
            ))}
          </div>
        </section>
        <footer id="contact" className="py-8 text-center text-sm text-gray-400">
          <p className="mb-4">© 2025 BitAlquemist — Forjando líneas de código con propósito.</p>
          <div className="flex justify-center gap-6 text-xl">
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </footer>
      </main>
    </>
  );
}
