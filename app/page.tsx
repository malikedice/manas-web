'use client'; 
import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  { title: "Sanayi Boyalarında Güçlü Stok", sub: "Toptan çözüm ortağınız.", color: "bg-blue-900", img: "/images/manas-depo.png" },
  { title: "Metal Mix v2 Teknolojisi", sub: "Hatasız renk otomasyonu.", color: "bg-slate-900", img: "/images/manas-ral.png" },
  { title: "Hızlı Tedarik & Sevkiyat", sub: "Denizli ve tüm bölgeye teslimat.", color: "bg-blue-800", img: "/images/manas-yol.png" },
];

const myProducts = [
  { id: 1, name: "Manas Boya", logo: "/images/manas-logo.png", desc: "Sanayi Grubu" },
  { id: 2, name: "PK Boya", logo: "/images/pk-logo.png", desc: "İnşaat Grubu" },
  { id: 3, name: "Dekor", logo: "/images/dekor-logo.png", desc: "Uygulama Ekipmanları" },
  { id: 4, name: "Rulon", logo: "/images/rulon-logo.png", desc: "Rulo ve Fırça" },
  { id: 5, name: "Dayson", logo: "/images/dayson-logo.png", desc: "Mastik & Yapıştırıcı" },
  { id: 6, name: "FBS", logo: "/images/fbs-logo.png", desc: "Ekonomik İnşaat Grubu" },
  { id: 7, name: "Konfor", logo: "/images/konfor-logo.png", desc: "Yapı Kimyasalları" },
  { id: 8, name: "Marka 8", logo: "/images/logo8.png", desc: "Diğer Çözümler" }, 
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* İLETİŞİM MODAL */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4">
          <div className="bg-white p-10 rounded-3xl w-full max-w-lg relative animate-in zoom-in duration-300">
            <button onClick={() => setIsContactModalOpen(false)} className="absolute top-6 right-6 text-slate-400 text-2xl font-bold">✕</button>
            <h4 className="text-3xl font-black text-slate-900 mb-2 uppercase italic">Bize Ulaşın</h4>
            <p className="text-blue-600 mb-8 font-bold">manasboya20@gmail.com</p>
            <form action="mailto:manasboya20@gmail.com" method="post" encType="text/plain" className="space-y-4">
              <input type="text" name="İsim" placeholder="Ad Soyad" required className="w-full p-4 border border-slate-200 rounded-xl outline-none" />
              <textarea name="Mesaj" placeholder="Mesajınız..." rows={4} required className="w-full p-4 border border-slate-200 rounded-xl outline-none"></textarea>
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg">GÖNDER</button>
            </form>
          </div>
        </div>
      )}

      {/* NAVİGASYON */}
      <nav className="bg-white border-b sticky top-0 z-[100] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          <div className="flex items-center h-full">
            <a href="/" className="mr-12">
              <Image src="/images/manas-logo2.png" alt="Manas Logo" width={240} height={54} className="w-32 md:w-60 h-auto block" priority />
            </a>
            
            <div className="hidden lg:flex items-center space-x-10 text-[12px] font-extrabold uppercase text-slate-700">
              <div className="relative group cursor-pointer h-24 flex items-center">
                <span>Kurumsal ▼</span>
                <div className="absolute top-24 left-0 bg-white shadow-2xl border-t-2 border-blue-600 py-4 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="#" className="block px-6 py-2 hover:bg-slate-50 transition">Biz Kimiz?</a>
                  <a href="#" className="block px-6 py-2 hover:bg-slate-50 transition">Misyon & Vizyon</a>
                  <a href="#" className="block px-6 py-2 hover:bg-slate-50 transition">Hizmet Bölgelerimiz</a>
                  <a href="#" className="block px-6 py-2 hover:bg-slate-50 transition">Satış Kadromuz</a>
                </div>
              </div>
              <a href="#urunlerimiz" className="hover:text-blue-600 transition">Ürünlerimiz</a>
              <a href="#fiyat-listesi" className="hover:text-blue-600 transition">Fiyat Listesi</a>
              <a href="https://manas.diaeticaret.com/" target="_blank" className="text-blue-600 font-black italic">B2B</a>
              <button onClick={() => setIsContactModalOpen(true)} className="hover:text-blue-600 transition uppercase font-extrabold">İletişim</button>
            </div>
          </div>
          
          <button className="lg:hidden p-2 text-slate-900 font-bold" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>MENU</button>
        </div>
      </nav>

      {/* SLIDER */}
      <section className="relative h-[450px] md:h-[650px] bg-slate-900 overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <Image src={slide.img} alt={slide.title} fill className="object-cover opacity-60" priority={index === 0} />
            <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
              <h4 className="text-blue-400 font-bold tracking-widest uppercase mb-4">{slide.sub}</h4>
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight max-w-4xl uppercase">{slide.title}</h2>
              <button onClick={() => setIsContactModalOpen(true)} className="bg-blue-600 text-white w-fit px-12 py-5 rounded-full font-bold hover:bg-white hover:text-blue-900 transition shadow-2xl">BİZE ULAŞIN</button>
            </div>
          </div>
        ))}
      </section>

      {/* ÜRÜNLERİMİZ - TAM PARLAKLIK */}
      <section id="urunlerimiz" className="py-24 max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-black text-slate-900 uppercase italic mb-16 border-l-8 border-blue-600 pl-6">Ürünlerimiz</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {myProducts.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-full aspect-square border border-slate-100 p-8 flex items-center justify-center bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all rounded-2xl">
                <Image src={item.logo} alt={item.name} width={160} height={160} className="object-contain opacity-100" />
              </div>
              <h5 className="mt-6 font-black text-slate-800 uppercase text-xs tracking-widest">{item.name}</h5>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-tighter">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FİYAT LİSTESİ */}
      <section id="fiyat-listesi" className="py-24 bg-slate-50 text-center">
        <h3 className="text-4xl font-black text-slate-900 uppercase italic mb-12 tracking-tighter">Fiyat Listesi</h3>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {myProducts.map((item) => (
            <div key={item.id} className="bg-white p-8 border border-slate-200 flex flex-col items-center rounded-xl shadow-sm">
               <Image src={item.logo} alt={item.name} width={120} height={40} className="object-contain h-10 opacity-100" />
               <span className="mt-4 text-[10px] font-black text-blue-600 uppercase">LİSTE HAZIRLANIYOR</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER - LOGO BÜYÜLTÜLDÜ (manas-logo3) */}
      <footer className="bg-[#0f172a] text-slate-400 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 items-center text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            {/* Alt logo üst logo ile aynı boyut (w-60) yapıldı */}
            <Image src="/images/manas-logo3.png" alt="Manas Footer Logo" width={240} height={54} className="w-32 md:w-60 h-auto block object-contain" />
          </div>
          <div className="space-y-4 border-l-0 md:border-l border-white/10 md:pl-12">
            <h5 className="text-white font-bold text-xs uppercase tracking-widest">Merkezefendi Şubesi</h5>
            <p className="text-sm leading-relaxed">
              📍 Hacıeyüplü, 3213 Sk No:7, 20195 <br/> Denizli Merkezefendi/Denizli
            </p>
            <a href="mailto:manasboya20@gmail.com" className="text-blue-400 hover:text-white transition font-black block">manasboya20@gmail.com</a>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-3 text-[10px] font-black uppercase tracking-widest text-slate-600">
             <a href="#" className="hover:text-white transition">Hakkımızda</a>
             <a href="#" className="hover:text-white transition text-blue-500">B2B PORTAL</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-white/5 text-center text-[10px] font-bold text-slate-700 tracking-[0.3em]">
          &copy; {new Date().getFullYear()} MANAS BOYA | DENİZLİ
        </div>
      </footer>
    </main>
  );
}