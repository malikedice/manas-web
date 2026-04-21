'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { useState } from 'react';

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "+905333718119";
  const displayPhone = "0533 371 81 19";

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <title>Manas Boya - Sanayi Boyalarında Güçlü Çözümler</title>
        <meta name="description" content="Denizli merkezli endüstriyel boya ve kaplama sistemleri." />
        {/* YENİ LOGO BURADA TANIMLANDI */}
        <link rel="icon" href="/images/manas-browser.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}>
        
        {/* TOP BAR */}
        <div className="bg-[#0f172a] text-white py-2 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase">
            <div className="flex space-x-8">
              <span className="text-slate-400 italic">DENİZLİ MERKEZEFENDİ</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="https://www.instagram.com/manasboyaas" target="_blank" className="hover:text-pink-500 transition underline decoration-pink-500 underline-offset-4">INSTAGRAM</a>
              <a href="https://www.linkedin.com/company/manas-boya/" target="_blank" className="hover:text-blue-400 transition underline decoration-blue-500 underline-offset-4">LINKEDIN</a>
            </div>
          </div>
        </div>

        {/* NAVİGASYON */}
        <nav className="bg-white/95 backdrop-blur-md border-b sticky top-0 z-[100] shadow-sm">
          <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <img src="/images/manas-logo2.png" alt="Manas Logo" className="w-28 md:w-56 h-auto" />
            </Link>
            
            {/* Masaüstü Menü */}
            <div className="hidden lg:flex items-center space-x-8 text-sm font-extrabold uppercase text-slate-700">
              <div className="relative group cursor-pointer h-24 flex items-center">
                <span className="group-hover:text-blue-600 transition text-blue-600">Kurumsal ▼</span>
                <div className="absolute top-24 left-0 bg-white shadow-2xl border-t-2 border-blue-600 py-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/kurumsal/biz-kimiz" className="block px-6 py-2 hover:bg-slate-50 transition text-slate-700">Biz Kimiz?</Link>
                  <Link href="/kurumsal/misyon-vizyon" className="block px-6 py-2 hover:bg-slate-50 transition text-slate-700">Misyon & Vizyon</Link>
                  <Link href="/kurumsal/satis-kadromuz" className="block px-6 py-2 hover:bg-slate-50 transition text-slate-700">Satış Kadromuz</Link>
                </div>
              </div>

              <a href="/#urunlerimiz" className="hover:text-blue-600 transition">Ürünlerimiz</a>
              <a href="/#fiyat-listesi" className="hover:text-blue-600 transition">Fiyat Listesi</a>
              <a href="https://manas.diaeticaret.com/" target="_blank" className="text-blue-600 border-2 border-blue-600 px-4 py-1.5 rounded-full hover:bg-blue-600 hover:text-white transition">Online Ödeme</a>
              <a href="https://manas.diaeticaret.com/" target="_blank" className="text-slate-900 border-2 border-slate-900 px-4 py-1.5 rounded-full hover:bg-slate-900 hover:text-white transition">Bayi Girişi</a>
              <a href="/#iletisim" className="text-slate-900 font-black ml-2 underline underline-offset-4 decoration-blue-600">İletişim</a>
            </div>

            {/* Mobil Menü Butonu */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden font-black text-[10px] border-2 border-slate-900 px-3 py-1.5 rounded uppercase tracking-widest"
            >
              {isMenuOpen ? 'KAPAT' : 'MENÜ'}
            </button>
          </div>

          {/* Mobil Açılır Menü Overlay */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t absolute w-full left-0 shadow-xl flex flex-col p-6 space-y-4 font-bold text-sm uppercase text-slate-800">
              <Link href="/kurumsal/biz-kimiz" onClick={() => setIsMenuOpen(false)} className="border-b pb-2">Hakkımızda</Link>
              <Link href="/kurumsal/misyon-vizyon" onClick={() => setIsMenuOpen(false)} className="border-b pb-2">Misyon & Vizyon</Link>
              <a href="/#urunlerimiz" onClick={() => setIsMenuOpen(false)} className="border-b pb-2">Ürünlerimiz</a>
              <a href="/#fiyat-listesi" onClick={() => setIsMenuOpen(false)} className="border-b pb-2">Fiyat Listesi</a>
              <a href="https://manas.diaeticaret.com/" target="_blank" className="text-blue-600">Online Ödeme</a>
              <a href="https://manas.diaeticaret.com/" target="_blank" className="text-slate-900">Bayi Girişi</a>
              <a href="/#iletisim" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white text-center py-3 rounded-xl">İletişim</a>
            </div>
          )}
        </nav>

        {children}

        {/* FOOTER */}
        <footer className="bg-[#0f172a] text-slate-400 py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 text-center md:text-left">
            <div className="space-y-8">
              <img src="/images/manas-logo3.png" alt="Manas Logo" className="w-48 mx-auto md:mx-0" />
              <div className="flex justify-center md:justify-start space-x-6 text-[10px] font-bold uppercase tracking-widest">
                 <a href="https://manas.diaeticaret.com/" className="text-blue-400 hover:text-white transition italic underline underline-offset-4">Online Ödeme</a>
                 <a href="https://manas.diaeticaret.com/" className="text-white hover:text-blue-400 transition italic underline underline-offset-4">Bayi Girişi</a>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold uppercase text-[10px] tracking-[0.2em] italic underline decoration-blue-600 underline-offset-8 mb-6">İletişim Bilgileri</h5>
              <p className="text-sm">📍 Hacıeyüplü, 3213 Sk No:7, Denizli</p>
              <a href={`tel:${phoneNumber}`} className="text-2xl text-blue-500 font-black block mt-4 hover:text-white transition">{displayPhone}</a>
            </div>
            <div className="space-y-3 text-[10px] uppercase font-black tracking-widest flex flex-col">
               <Link href="/kurumsal/biz-kimiz" className="hover:text-white transition">Hakkımızda</Link>
               <p className="pt-6 opacity-20 text-[9px] tracking-normal font-medium">© {new Date().getFullYear()} MANAS BOYA | DENİZLİ</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}