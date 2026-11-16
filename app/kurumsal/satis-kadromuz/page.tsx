import type { Metadata } from "next";
import SayfaBasi from "@/components/SayfaBasi";
import Serit from "@/components/Serit";
import { TELEFON, TELEFON_GORUNEN, WHATSAPP } from "@/components/site";

export const metadata: Metadata = { title: "Satış Kadromuz" };

export default function SatisKadromuz() {
  return (
    <>
      <SayfaBasi
        yol="/kurumsal/satis-kadromuz"
        baslik="Satış Kadromuz"
        ozet="Doğru ürün, doğru fiyat ve zamanında teslimat için yanınızdayız."
      />
      <section className="icerik">
        <div className="kap">
          <div className="kadro">
            <div className="metin-govde">
              <p className="giris-p">Uzman kadromuzla projelerinizde yanınızdayız.</p>
              <p>
                Ürün seçimi, fiyat, stok ve teslimat konularında satış ekibimiz size en uygun çözümü sunmak için hazır. Bize
                ulaşın, ihtiyacınızı ilgili arkadaşımıza hemen iletelim.
              </p>
              <div className="cagri">
                <a className="dugme koyu" href={`tel:${TELEFON}`}>
                  Bize ulaşın: {TELEFON_GORUNEN}
                </a>
                <a className="dugme cerceve" href={WHATSAPP} target="_blank" rel="noopener">
                  WhatsApp&apos;tan yazın
                </a>
              </div>
              <Serit kucuk />
            </div>
            <figure>
              <img src="/img/manas-yol.jpg" alt="Manas logolu sevkiyat tırı" />
            </figure>
          </div>
        </div>
      </section>
      <Serit />
    </>
  );
}
