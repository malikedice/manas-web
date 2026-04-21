'use client'; 
import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  { title: "Sanayi Boyalarında Güçlü Stok", sub: "Toptan çözüm ortağınız.", img: "/images/manas-depo.png" },
  { title: "Metal Mix v2 Teknolojisi", sub: "Hatasız renk otomasyonu.", img: "/images/manas-ral.png" },
  { title: "Hızlı Tedarik & Sevkiyat", sub: "Denizli ve tüm bölgeye teslimat.", img: "/images/manas-yol.png" },
];

const myProducts = [
  { id: 1, name: "Manas Boya", logo: "/images/manas-logo.png", desc: "Sanayi Grubu" },
  { id: 2, name: "Pamukkale Boya", logo: "/images/pk-logo.png", desc: "İnşaat Grubu" },
  { id: 3, name: "Dekor", logo: "/images/dekor-logo.png", desc: "Uygulama Ekipmanları" },
  { id: 4, name: "Rulon", logo: "/images/rulon-logo.png", desc: "Rulo ve Fırça" },
  { id: 5, name: "Dayson", logo: "/images/dayson-logo.png", desc: "Mastik & Yapıştırıcı" },
  { id: 6, name: "FBS", logo: "/images/fbs-logo.png", desc: "Ekonomik İnşaat Grubu" },
  { id: 7, name: "Konfor", logo: "/images/konfor-logo.png", desc: "Yapı Kimyasalları" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const phoneNumber = "+905333718119";
  const displayPhone = "0533 371 81 19";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <main>
      {/* SLIDER - Mobil Font Ayarı Yapıldı */}
      <section className="relative h-[450px] md:h-[750px] bg-slate-900 overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <Image src={slide.img} alt={slide.title} fill className="object-cover opacity-50" priority={index === 0} />
            <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
              <h4 className="text-blue-400 font-bold tracking-[0.3em] uppercase mb-4 text-[10px] md:text-sm">{slide.sub}</h4>
              <h2 className="text-3xl md:text-8xl font-black mb-10 leading-[1] md:leading-[0.9] max-w-4xl uppercase italic">{slide.title}</h2>
            </div>
          </div>
        ))}
      </section>

      {/* MARKALARIMIZ & ÜRÜN GRUPLARI */}
      <section id="urunlerimiz" className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <h3 className="text-2xl md:text-4xl font-black text-slate-900 uppercase italic mb-12 md:mb-16 border-l-8 border-blue-600 pl-6">Markalarımız & Ürün Grupları</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {myProducts.map((item, i) => (
            <div key={i} className="flex flex-col items-center group text-center">
              <div className="w-full aspect-square border border-slate-100 p-4 md:p-8 flex items-center justify-center bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all rounded-2xl md:rounded-3xl">
                <img src={item.logo} alt={item.name} className="max-w-full h-auto object-contain" />
              </div>
              <h5 className="mt-4 md:mt-6 font-black text-slate-800 uppercase text-[10px] md:text-xs tracking-widest">{item.name}</h5>
              <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FİYAT LİSTESİ */}
      <section id="fiyat-listesi" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
           <h3 className="text-2xl md:text-4xl font-black text-slate-900 uppercase italic mb-12 tracking-tighter text-center">Fiyat Listesi</h3>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
             {myProducts.map((item) => (
               <div key={item.id} className="flex flex-col items-center group text-center">
                 <div className="w-full aspect-square border border-slate-200 p-4 md:p-8 flex flex-col items-center justify-center bg-white shadow-sm hover:shadow-xl hover:border-blue-300 transition-all rounded-2xl md:rounded-3xl">
                    <img src={item.logo} alt={item.name} className="max-w-[80%] h-auto object-contain mb-4 md:mb-6" />
                    <span className="text-[8px] md:text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 md:px-3 py-1 rounded-full">LİSTE HAZIRLANIYOR</span>
                 </div>
                 <h5 className="mt-4 md:mt-6 font-black text-slate-800 uppercase text-[10px] md:text-xs tracking-widest">{item.name}</h5>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* İLETİŞİM */}
      <section id="iletisim" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16">
           <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 uppercase italic border-l-0 md:border-l-8 border-blue-600 md:pl-6 text-center md:text-left">Bizimle İletişime Geçin</h3>
              <p className="text-slate-500 font-medium text-base md:text-lg leading-relaxed">
                Toptan boya alımı, sanayi projeleri veya teknik destek ihtiyaçlarınız için profesyonel ekibimiz Denizli'den tüm bölgeye hizmet vermektedir.
              </p>
              <div className="space-y-4 inline-block text-left">
                 <div className="flex items-start md:items-center space-x-4">
                    <span className="text-xl md:text-3xl">📍</span>
                    <span className="font-bold text-slate-700 text-sm md:text-base">Hacıeyüplü, 3213 Sk No:7, Merkezefendi/Denizli</span>
                 </div>
                 <div className="flex items-center space-x-4">
                    <span className="text-xl md:text-3xl">📞</span>
                    <a href={`tel:${phoneNumber}`} className="text-xl md:text-2xl font-black text-blue-600">{displayPhone}</a>
                 </div>
              </div>
           </div>
           <div className="bg-slate-50 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm">
              <form action="mailto:manasboya20@gmail.com" method="post" encType="text/plain" className="space-y-4">
                <input type="text" name="İsim" placeholder="Ad Soyad" required className="w-full p-4 border border-slate-200 rounded-xl outline-none focus:border-blue-600 transition" />
                <input type="email" name="Email" placeholder="E-Posta Adresiniz" required className="w-full p-4 border border-slate-200 rounded-xl outline-none focus:border-blue-600 transition" />
                <textarea name="Mesaj" placeholder="Mesajınız..." rows={4} required className="w-full p-4 border border-slate-200 rounded-xl outline-none focus:border-blue-600 transition"></textarea>
                <button className="w-full bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-slate-900 transition shadow-lg uppercase tracking-widest text-sm">Mesajı Gönder</button>
              </form>
           </div>
        </div>
      </section>
    </main>
  );
}