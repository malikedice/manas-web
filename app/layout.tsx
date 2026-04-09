import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manas Boya - Sanayi Boyalarında Güçlü Çözümler",
  description: "Denizli merkezli endüstriyel boya ve kaplama sistemleri.",
  icons: {
    icon: '/images/manas-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const phoneNumber = "+905333718119";
  const displayPhone = "0533 371 81 19";

  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}>
        
        {/* TOP BAR */}
        <div className="bg-[#0f172a] text-white py-2 hidden md:block border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase">
            <div className="flex space-x-8">
              <a href={`tel:${phoneNumber}`} className="hover:text-blue-400 transition flex items-center">
                <span className="mr-2">📞</span> {displayPhone}
              </a>
              <span className="text-slate-400 italic">DENİZLİ MERKEZEFENDİ</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/manasboyaas" target="_blank" className="hover:text-pink-500 transition underline decoration-pink-500 underline-offset-4">INSTAGRAM</a>
              <a href="https://www.linkedin.com/company/manas-boya/" target="_blank" className="hover:text-blue-400 transition underline decoration-blue-500 underline-offset-4">LINKEDIN</a>
            </div>
          </div>
        </div>

        {/* NAVİGASYON */}
        <nav className="bg-white/95 backdrop-blur-md border-b sticky top-0 z-[100] shadow-sm">
          <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
            <Link href="/">
              <img src="/images/manas-logo2.png" alt="Manas Logo" className="w-32 md:w-56 h-auto" />
            </Link>
            
            <div className="hidden lg:flex items-center space-x-8 text-[11px] font-extrabold uppercase text-slate-700">
              
              <div className="relative group cursor-pointer h-24 flex items-center">
                <span className="group-hover:text-blue-600 transition">Kurumsal ▼</span>
                <div className="absolute top-24 left-0 bg-white shadow-2xl border-t-2 border-blue-600 py-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/kurumsal/biz-kimiz" className="block px-6 py-2 hover:bg-slate-50 transition text-slate-700">Biz Kimiz?</Link>
                  <Link href="/kurumsal/misyon-vizyon" className="block px-6 py-2 hover:bg-slate-50 transition text-slate-700">Misyon & Vizyon</Link>
                  <Link href="/kurumsal/hizmet-bolgelerimiz" className="block px-6 py-2 hover:bg-slate-50 transition text-slate-700">Hizmet Bölgelerimiz</Link>
                  <Link href="/kurumsal/satis-kadromuz" className="block px-6 py-2 hover:bg-slate-50 transition text-slate-700">Satış Kadromuz</Link>
                </div>
              </div>

              <a href="/#urunlerimiz" className="hover:text-blue-600 transition">Ürünlerimiz</a>
              <a href="/#fiyat-listesi" className="hover:text-blue-600 transition">Fiyat Listesi</a>
              
              {/* YENİ LİNKLER */}
              <a href="https://manas.diaeticaret.com/" target="_blank" className="text-blue-600 border-2 border-blue-600 px-4 py-1.5 rounded-full hover:bg-blue-600 hover:text-white transition">
                Online Ödeme
              </a>
              <a href="https://b2b.manasboya.com" target="_blank" className="text-slate-900 border-2 border-slate-900 px-4 py-1.5 rounded-full hover:bg-slate-900 hover:text-white transition">
                Bayi Girişi
              </a>
              
              <a href="/#iletisim" className="text-slate-900 font-black ml-2 underline underline-offset-4 decoration-blue-600">İletişim</a>
            </div>

            <button className="lg:hidden font-black text-xs border-2 border-slate-900 px-4 py-2 rounded">MENÜ</button>
          </div>
        </nav>

        {children}

        {/* FOOTER */}
        <footer className="bg-[#0f172a] text-slate-400 py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 text-center md:text-left">
            <div className="space-y-8">
              <img src="/images/manas-logo3.png" alt="Manas Logo" className="w-48 mx-auto md:mx-0" />
              <div className="flex justify-center md:justify-start space-x-6 text-[10px] font-bold uppercase tracking-widest">
                 <a href="https://manas.diaeticaret.com/" className="text-blue-400 hover:text-white transition italic underline underline-offset-4">Online Ödeme</a>
                 <a href="https://b2b.manasboya.com" className="text-white hover:text-blue-400 transition italic underline underline-offset-4">Bayi Girişi</a>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold uppercase text-[10px] tracking-[0.2em] italic underline decoration-blue-600 underline-offset-8 mb-6">İletişim Bilgileri</h5>
              <p className="text-sm">📍 Hacıeyüplü, 3213 Sk No:7, Denizli</p>
              <a href={`tel:${phoneNumber}`} className="text-2xl text-blue-500 font-black block mt-4 hover:text-white transition">{displayPhone}</a>
            </div>
            <div className="space-y-3 text-[10px] uppercase font-black tracking-widest flex flex-col">
               <Link href="/kurumsal/biz-kimiz" className="hover:text-white transition">Hakkımızda</Link>
               <Link href="/kurumsal/hizmet-bolgelerimiz" className="hover:text-white transition text-blue-400">Hizmet Bölgeleri</Link>
               <p className="pt-6 opacity-20 text-[9px] tracking-normal font-medium">© {new Date().getFullYear()} MANAS BOYA | DENİZLİ</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}