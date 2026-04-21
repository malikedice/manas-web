export default function MisyonVizyon() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6 min-h-[70vh]">
      {/* Sayfa Başlığı */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-7xl font-black uppercase italic border-l-8 border-blue-600 pl-6 text-slate-900 tracking-tighter">
          Vizyon & <br className="md:hidden" /> Misyon
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Misyon Kartı - Beyaz/Modern */}
        <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500">
          <div className="w-16 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
          <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase italic tracking-tight">
            Misyonumuz
          </h3>
          <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-medium">
            <p>
              Müşterilerimize kaliteli ve güvenilir boya ile yardımcı ürünlerini, 
              <span className="text-blue-600"> doğru tedarik ve zamanında teslimat</span> anlayışıyla sunmak; 
              ihtiyaçlarına en uygun çözümleri sağlayarak uzun vadeli iş birlikleri kurmak.
            </p>
            <p className="pt-4 border-t border-slate-100">
              Satış ve uygulama süreçlerinde şeffaf, hızlı ve çözüm odaklı hizmet vererek 
              müşteri memnuniyetini en üst seviyede tutmak temel misyonumuzdur.
            </p>
          </div>
        </div>

        {/* Vizyon Kartı - Koyu/Premium */}
        <div className="group bg-[#0f172a] p-10 rounded-[2.5rem] shadow-2xl hover:bg-blue-950 transition-all duration-500">
          <div className="w-16 h-1.5 bg-blue-400 mb-8 rounded-full"></div>
          <h3 className="text-3xl font-black text-white mb-6 uppercase italic tracking-tight">
            Vizyonumuz
          </h3>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-medium">
            <p>
              Boya ve hırdavat sektöründe güvenilir tedarikçi ve çözüm ortağı olarak tercih edilen, 
              <span className="text-white font-bold"> müşteri memnuniyetiyle öne çıkan</span> güçlü bir marka olmak.
            </p>
            <p className="pt-4 border-t border-white/10">
              Hizmet kalitemizi sürekli geliştirerek, satış ve uygulama alanında bölgesinde referans 
              gösterilen firmalar arasında yer almak en önemli hedefimizdir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}