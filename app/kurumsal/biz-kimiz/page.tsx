import type { Metadata } from "next";
import SayfaBasi from "@/components/SayfaBasi";
import Serit from "@/components/Serit";

export const metadata: Metadata = { title: "Biz Kimiz?" };

export default function BizKimiz() {
  return (
    <>
      <SayfaBasi
        yol="/kurumsal/biz-kimiz"
        baslik="Biz Kimiz?"
        ozet="Denizli merkezli, boya ve hırdavat ürünlerinde güçlü bir çözüm ortağı."
      />
      <section className="icerik">
        <div className="kap">
          <div className="iki-kolon">
            <div className="metin-govde">
              <p className="giris-p">
                Manas Boya A.Ş., boya ve hırdavat ürünlerinin toptan satışını yapan, sektör deneyimi güçlü bir Denizli firmasıdır.
              </p>
              <p>
                Yalnızca ürün tedarik etmiyoruz. Doğru ürünü seçmenize, doğru uygulamaya ulaşmanıza ve işinizi zamanında
                tamamlamanıza yardımcı olan bir çözüm ortağı olmayı hedefliyoruz. Geniş ürün yelpazemiz, güçlü tedarik ağımız
                ve hızlı teslimat anlayışımız bu hedefin temelini oluşturuyor.
              </p>
              <p>
                Müşterilerimizin ihtiyaçlarını doğru anlamayı, iş süreçlerini kolaylaştırmayı ve uzun soluklu iş birlikleri
                kurmayı önemsiyoruz. Satıştan teslimata kadar her aşamada şeffaf ve çözüm odaklı çalışıyoruz.
              </p>
              <p>Denizli merkezli olarak sanayi boyalarından inşaat grubuna kadar farklı sektörlere hizmet veriyoruz.</p>
            </div>
            <figure>
              <img src="/img/manas-depo.jpg" alt="Manas Boya deposu" />
            </figure>
          </div>
          <div className="ilkeler">
            <div className="ilke">
              <div className="kare" />
              <h3>Geniş ürün yelpazesi</h3>
              <p>Sanayi ve inşaat boyalarından yapı kimyasallarına, uygulama ekipmanlarına kadar.</p>
            </div>
            <div className="ilke">
              <div className="kare" />
              <h3>Güçlü tedarik ağı</h3>
              <p>Sektörün güvenilir markalarıyla doğrudan çalışıyoruz.</p>
            </div>
            <div className="ilke">
              <div className="kare" />
              <h3>Hızlı teslimat</h3>
              <p>Denizli ve tüm bölgeye planlı, zamanında sevkiyat.</p>
            </div>
          </div>
        </div>
      </section>
      <Serit />
    </>
  );
}
