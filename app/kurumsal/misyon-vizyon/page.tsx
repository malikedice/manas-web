export default function MisyonVizyon() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 min-h-[60vh]">
      <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-12 border-l-8 border-blue-600 pl-6">Misyon & Vizyon</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <h3 className="text-2xl font-black text-blue-600 mb-4 uppercase">Misyonumuz</h3>
          <p className="text-slate-600 font-medium">En kaliteli boya ürünlerini, en teknolojik yöntemlerle ve en hızlı şekilde son kullanıcıya ulaştırmak.</p>
        </div>
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <h3 className="text-2xl font-black text-blue-600 mb-4 uppercase">Vizyonumuz</h3>
          <p className="text-slate-600 font-medium">Boya ve kaplama teknolojilerinde bölgenin lideri olmak, dijital dönüşümümüzle sektör standartlarını belirlemek.</p>
        </div>
      </div>
    </div>
  );
}