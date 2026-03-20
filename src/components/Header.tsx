export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-blue-900 text-white shadow-xl border-b border-blue-950 font-sans">
      
      {}
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-extrabold tracking-tight">
          IES <span className="text-yellow-400">Albarregas</span>
        </h1>
      </div>

      {}
      <nav className="space-x-8 hidden md:flex">
        <a href="#" className="text-blue-100 hover:text-white font-medium text-lg transition-colors">
          Inicio
        </a>
        <a href="#" className="text-blue-100 hover:text-white font-medium text-lg transition-colors">
          Ciclos Formativos
        </a>
        <a href="#" className="text-blue-100 hover:text-white font-medium text-lg transition-colors">
          Mérida 3D
        </a>
        <a href="#" className="text-blue-100 hover:text-white font-medium text-lg transition-colors">
          Contacto
        </a>
      </nav>

      {}
      <button className="bg-yellow-400 text-blue-950 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors shadow-md">
        Inscríbete Ya
      </button>

    </header>
  );
}