"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BAYI_LINKI, KURUMSAL_SAYFALAR } from "./site";

export default function Header() {
  const yol = usePathname();
  const [mobilAcik, setMobilAcik] = useState(false);
  const [kurumsalAcik, setKurumsalAcik] = useState(false);
  const acilirRef = useRef<HTMLDivElement>(null);

  // Sayfa değişince menüleri kapat
  useEffect(() => {
    setMobilAcik(false);
    setKurumsalAcik(false);
  }, [yol]);

  // Dışarı tıklayınca veya Escape ile açılır menüyü kapat
  useEffect(() => {
    const tikla = (e: MouseEvent) => {
      if (acilirRef.current && !acilirRef.current.contains(e.target as Node)) setKurumsalAcik(false);
    };
    const tus = (e: KeyboardEvent) => {
      if (e.key === "Escape") setKurumsalAcik(false);
    };
    document.addEventListener("click", tikla);
    document.addEventListener("keydown", tus);
    return () => {
      document.removeEventListener("click", tikla);
      document.removeEventListener("keydown", tus);
    };
  }, []);

  const kapat = () => setMobilAcik(false);

  return (
    <header className={`ust${mobilAcik ? " acik" : ""}`}>
      <div className="kap">
        <Link className="logo" href="/" aria-label="Manas Boya ana sayfa">
          <img src="/img/manas-logo2.png" alt="Manas" />
        </Link>
        <nav aria-label="Ana menü">
          <div className={`acilir${kurumsalAcik ? " acik" : ""}`} ref={acilirRef}>
            <button
              type="button"
              aria-expanded={kurumsalAcik}
              aria-haspopup="true"
              onClick={() => setKurumsalAcik((a) => !a)}
            >
              Kurumsal{" "}
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 4l4 4 4-4" />
              </svg>
            </button>
            <div className="menu">
              <div>
                {KURUMSAL_SAYFALAR.map((s) => (
                  <Link key={s.href} href={s.href} aria-current={yol === s.href ? "page" : undefined}>
                    {s.ad}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/#markalar">Markalar</Link>
          <Link href="/#fiyat">Fiyat listesi</Link>
          <Link href="/#iletisim">İletişim</Link>
        </nav>
        <div className="sag">
          <a className="metin-link" href={BAYI_LINKI} target="_blank" rel="noopener">
            Online ödeme
          </a>
          <a className="dugme cerceve" href={BAYI_LINKI} target="_blank" rel="noopener">
            Bayi girişi
          </a>
          <button
            className="hamburger"
            type="button"
            aria-label="Menü"
            aria-expanded={mobilAcik}
            onClick={() => setMobilAcik((a) => !a)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
      <div className="mobil-menu">
        <div className="kap">
          <span className="alt-baslik">Kurumsal</span>
          {KURUMSAL_SAYFALAR.map((s) => (
            <Link key={s.href} className="girinti" href={s.href} onClick={kapat}>
              {s.ad}
            </Link>
          ))}
          <Link href="/#markalar" onClick={kapat}>Markalar</Link>
          <Link href="/#fiyat" onClick={kapat}>Fiyat listesi</Link>
          <Link href="/#iletisim" onClick={kapat}>İletişim</Link>
          <a href={BAYI_LINKI} target="_blank" rel="noopener" onClick={kapat}>Online ödeme</a>
        </div>
      </div>
    </header>
  );
}
