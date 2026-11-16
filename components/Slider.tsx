"use client";
import { useEffect, useState } from "react";

const SLAYTLAR = [
  {
    img: "/img/manas-depo.jpg",
    alt: "Manas Boya deposunda raflara dizilmiş boya kovaları",
    ust: "Toptan çözüm ortağınız.",
    baslik: "Sanayi Boyalarında Güçlü Stok",
    secici: "Güçlü stok",
  },
  {
    img: "/img/manas-ral.jpg",
    alt: "RAL renk kartelaları ve renk ölçüm cihazı",
    ust: "Hatasız renk otomasyonu.",
    baslik: "Metal Mix v2 Teknolojisi",
    secici: "Renk otomasyonu",
  },
  {
    img: "/img/manas-yol.jpg",
    alt: "Manas logolu sevkiyat tırı otoyolda",
    ust: "Denizli ve tüm bölgeye teslimat.",
    baslik: "Hızlı Tedarik & Sevkiyat",
    secici: "Sevkiyat",
  },
];

const SURE = 6000;

export default function Slider() {
  const [aktif, setAktif] = useState(0);

  // Her slayt değişiminde zamanlayıcı baştan başlar; ilerleme çubuğu da CSS ile 6 sn'de dolar
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const zaman = setTimeout(() => setAktif((i) => (i + 1) % SLAYTLAR.length), SURE);
    return () => clearTimeout(zaman);
  }, [aktif]);

  return (
    <section className="acilis" aria-roledescription="slayt gösterisi" aria-label="Manas Boya">
      {SLAYTLAR.map((s, n) => (
        <div key={s.img} className={`slayt${n === aktif ? " aktif" : ""}`} aria-hidden={n !== aktif}>
          <img src={s.img} alt={s.alt} />
          <div className="yazi">
            <div className="kap">
              <p className="ust-yazi">{s.ust}</p>
              {n === 0 ? <h1>{s.baslik}</h1> : <h2 className="buyuk">{s.baslik}</h2>}
            </div>
          </div>
        </div>
      ))}
      <div className="secici">
        <div className="kap">
          {SLAYTLAR.map((s, n) => (
            // key aktifliğe bağlı: aynı butona yeniden geçildiğinde ilerleme animasyonu baştan başlar
            <button
              key={`${s.img}-${n === aktif ? "a" : "p"}`}
              type="button"
              className={n === aktif ? "aktif" : undefined}
              aria-label={s.secici}
              aria-current={n === aktif ? "true" : undefined}
              onClick={() => setAktif(n)}
            >
              {s.secici}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
