import type { Metadata } from "next";
import SayfaBasi from "@/components/SayfaBasi";
import Serit from "@/components/Serit";

export const metadata: Metadata = { title: "Misyon & Vizyon" };

export default function MisyonVizyon() {
  return (
    <>
      <SayfaBasi
        yol="/kurumsal/misyon-vizyon"
        baslik="Misyon & Vizyon"
        ozet="Bugün ne için çalıştığımız ve yarın nerede olmak istediğimiz."
      />
      <section className="icerik">
        <div className="kap">
          <div className="mv">
            <div className="mv-kart misyon">
              <span className="etiket">Misyonumuz</span>
              <p>
                Müşterilerimize kaliteli ve güvenilir boya ve yardımcı ürünler sunmak; doğru tedarik ve zamanında teslimatla
                ihtiyaca uygun çözümler üreterek uzun vadeli iş birlikleri kurmak. Satış ve uygulama süreçlerinde şeffaf, hızlı
                ve çözüm odaklı hizmetle müşteri memnuniyetini her zaman en üst seviyede tutmak.
              </p>
            </div>
            <div className="mv-kart vizyon">
              <span className="etiket">Vizyonumuz</span>
              <p>
                Boya ve hırdavat sektöründe güvenilir tedarikçi ve çözüm ortağı olarak müşteri memnuniyetiyle öne çıkan güçlü
                bir marka olmak. Hizmet kalitemizi sürekli geliştirerek bölgemizde referans gösterilen firmalar arasında yer almak.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Serit />
    </>
  );
}
