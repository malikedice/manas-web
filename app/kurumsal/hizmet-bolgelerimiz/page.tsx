export default function HizmetBolgeleri() {
  const bolgeler = ["Denizli", "Uşak", "Aydın", "Muğla", "Antalya", "Afyonkarahisar"];
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 min-h-[60vh]">
      <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-12 border-l-8 border-blue-600 pl-6">Hizmet Bölgelerimiz</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {bolgeler.map((bolge, index) => (
          <div key={index} className="flex items-center p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-500 transition">
            <span className="text-2xl mr-4">📍</span>
            <span className="font-black text-slate-800 uppercase tracking-widest">{bolge}</span>
          </div>
        ))}
      </div>
    </div>
  );
}