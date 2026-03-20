export default function HeroText() {
  return (
    <div className="max-w-2xl px-4 py-12 md:py-20 font-sans">
      <span className="inline-block bg-blue-100 text-blue-900 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 border border-blue-200">
        Mérida
      </span>
      <h2 className="text-6xl font-extrabold text-slate-950 mb-8 leading-tight tracking-tighter">
            La mejor opcion para aprender <span className="text-blue-800">IES Albarregas</span>
      </h2>
      <p className="text-xl text-slate-700 mb-12 leading-relaxed max-w-lg">
        Podrás aprender a realizar modelos en 3D como este Acueducto de los milagros
      </p>
      <div className="flex flex-wrap gap-5">
        <button className="bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-950 shadow-lg transition">
          Ver Oferta Educativa
        </button>
        <button className="bg-white text-slate-900 border border-slate-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-100 shadow transition">
          Visitar Mérida
        </button>
      </div>
    </div>
  );
}