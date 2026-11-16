import Link from "next/link";
import { KURUMSAL_SAYFALAR } from "./site";

// Kurumsal alt sayfaların lacivert başlık alanı ve sekmeleri
export default function SayfaBasi({ yol, baslik, ozet }: { yol: string; baslik: string; ozet: string }) {
  return (
    <section className="sayfa-bas">
      <img className="at" src="/img/manas-at.png" alt="" aria-hidden="true" />
      <div className="kap">
        <div className="yol">
          <Link href="/">Ana sayfa</Link> / Kurumsal / {baslik}
        </div>
        <h1>{baslik}</h1>
        <p className="ozet">{ozet}</p>
        <nav className="sekmeler" aria-label="Kurumsal sayfalar">
          {KURUMSAL_SAYFALAR.map((s) => (
            <Link key={s.href} href={s.href} aria-current={s.href === yol ? "page" : undefined}>
              {s.ad}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
