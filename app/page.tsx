import Slider from "@/components/Slider";
import Serit from "@/components/Serit";
import {
  ADRES_SATIR1,
  ADRES_SATIR2,
  HARITA_KOORDINAT,
  HARITA_LINKI,
  TELEFON,
  TELEFON_GORUNEN,
  WHATSAPP,
} from "@/components/site";

const BUYUK_MARKALAR = [
  { ad: "Polisan Home Cosmetics", logo: "/img/polisan-logo.png", w: 314, h: 76, aciklama: "İç ve dış cephe boyaları, astarlar, dekoratif ürünler" },
  { ad: "Manas", logo: "/img/manas-logo.png", w: 112, h: 143, aciklama: "Sanayi grubu" },
];

const KUCUK_MARKALAR = [
  { ad: "Pamukkale Boya", logo: "/img/pamukkale-logo.png", w: 115, h: 78, aciklama: "İnşaat grubu" },
  { ad: "Soudal", logo: "/img/soudal-logo.png", w: 151, h: 59, aciklama: "Mastik, köpük ve yapıştırıcı" },
  { ad: "Konfor", logo: "/img/konfor-logo.png", w: 98, h: 98, aciklama: "Yapı kimyasalları" },
  { ad: "İzmir Fırça", logo: "/img/izmir-firca-logo.png", w: 158, h: 57, aciklama: "Fırça ve el aletleri" },
  { ad: "Dekor", logo: "/img/dekor-logo.png", w: 151, h: 60, aciklama: "Uygulama ekipmanları" },
  { ad: "Rulon", logo: "/img/rulon-logo.png", w: 196, h: 40, aciklama: "Rulo ve fırça" },
  { ad: "Dayson", logo: "/img/dayson-logo.png", w: 114, h: 79, aciklama: "Mastik ve yapıştırıcı" },
  { ad: "FBS", logo: "/img/fbs-logo.png", w: 170, h: 49, aciklama: "Ekonomik inşaat grubu" },
  { ad: "Pass", logo: "/img/pass-logo.png", w: 154, h: 59, aciklama: "Profesyonel ekipman" },
];

// PDF eklemek için: dosyayı public/pdf/ altına koyun ve ilgili satırın pdf alanına yolunu yazın.
// Örnek: pdf: "/pdf/polisan-2026.pdf"  →  "Liste hazırlanıyor" yerine "PDF indir" butonu çıkar.
const FIYAT_LISTELERI = [
  { ad: "Polisan", logo: "/img/polisan-logo.png", grup: "İç ve dış cephe, astar, dekoratif", pdf: "" },
  { ad: "Manas Boya", logo: "/img/manas-logo2.png", grup: "Sanayi grubu", pdf: "" },
  { ad: "Pamukkale Boya", logo: "/img/pamukkale-logo.png", grup: "İnşaat grubu", pdf: "" },
  { ad: "Soudal", logo: "/img/soudal-logo.png", grup: "Mastik, köpük ve yapıştırıcı", pdf: "" },
  { ad: "Konfor", logo: "/img/konfor-logo.png", grup: "Yapı kimyasalları", pdf: "" },
  { ad: "İzmir Fırça", logo: "/img/izmir-firca-logo.png", grup: "Fırça ve el aletleri", pdf: "" },
  { ad: "Dekor", logo: "/img/dekor-logo.png", grup: "Uygulama ekipmanları", pdf: "" },
  { ad: "Rulon", logo: "/img/rulon-logo.png", grup: "Rulo ve fırça", pdf: "" },
  { ad: "Dayson", logo: "/img/dayson-logo.png", grup: "Mastik ve yapıştırıcı", pdf: "" },
  { ad: "FBS", logo: "/img/fbs-logo.png", grup: "Ekonomik inşaat grubu", pdf: "" },
  { ad: "Pass", logo: "/img/pass-logo.png", grup: "Profesyonel ekipman", pdf: "" },
];

export default function AnaSayfa() {
  return (
    <>
      <Slider />
      <Serit />

      <section className="markalar" id="markalar">
        {/* Eski sitedeki /#urunlerimiz linkleri buraya iner */}
        <span id="urunlerimiz" className="capa" aria-hidden="true" />
        <div className="kap">
          <div className="bas">
            <h2>Güçlü markaların ortak satış noktası</h2>
            <p>Boyadan mastiğe, rulodan ısı yalıtımına kadar bir uygulamanın ihtiyacı olan her şey tek adreste.</p>
          </div>
          <div className="marka-izgara buyuk">
            {BUYUK_MARKALAR.map((m) => (
              <div className="marka" key={m.ad}>
                <img src={m.logo} alt={m.ad} width={m.w} height={m.h} />
                <p>{m.aciklama}</p>
              </div>
            ))}
          </div>
          <div className="marka-izgara kucuk">
            {KUCUK_MARKALAR.map((m) => (
              <div className="marka" key={m.ad}>
                <img src={m.logo} alt={m.ad} width={m.w} height={m.h} loading="lazy" />
                <p>{m.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fiyat" id="fiyat">
        {/* Eski sitedeki /#fiyat-listesi linkleri buraya iner */}
        <span id="fiyat-listesi" className="capa" aria-hidden="true" />
        <div className="kap">
          <div className="bas">
            <h2>Fiyat listeleri</h2>
            <p>Markaların güncel fiyat listelerini buradan PDF olarak indirebilirsiniz.</p>
          </div>
          <div className="liste">
            {FIYAT_LISTELERI.map((f) => (
              <div className={`satir${f.pdf ? " hazir" : ""}`} key={f.ad}>
                <div className="lg">
                  <img src={f.logo} alt="" loading="lazy" />
                </div>
                <div>
                  <h3>{f.ad}</h3>
                  <div className="grup">{f.grup}</div>
                </div>
                <div className="sag">
                  {f.pdf ? (
                    <a className="dugme koyu pdf" href={f.pdf} target="_blank" rel="noopener">
                      PDF indir
                    </a>
                  ) : (
                    <span className="durum">Liste hazırlanıyor</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="iletisim" id="iletisim">
        <div className="kap">
          <div>
            <h2>Bizimle iletişime geçin</h2>
            <p className="giris">
              Toptan boya alımı, sanayi projeleri ve teknik destek için Denizli&apos;deki ekibimiz tüm bölgeye hizmet veriyor.
            </p>
            <div className="bilgiler">
              <div className="bilgi">
                <div className="ikon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <b>Adres</b>
                  <a href={HARITA_LINKI} target="_blank" rel="noopener">
                    {ADRES_SATIR1}
                    <br />
                    {ADRES_SATIR2}
                  </a>
                </div>
              </div>
              <div className="bilgi">
                <div className="ikon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                </div>
                <div>
                  <b>Telefon</b>
                  <a href={`tel:${TELEFON}`}>{TELEFON_GORUNEN}</a>
                </div>
              </div>
              <div className="bilgi">
                <div className="ikon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" />
                  </svg>
                </div>
                <div>
                  <b>WhatsApp</b>
                  <a href={WHATSAPP} target="_blank" rel="noopener">Mesaj gönderin</a>
                </div>
              </div>
            </div>
          </div>

          <div className="harita" id="harita">
            {/* Harita yüklenemezse altta adres kartı görünür */}
            <div className="yedek">
              <span className="pin" aria-hidden="true" />
              <p>
                {ADRES_SATIR1}, {ADRES_SATIR2}
              </p>
            </div>
            <iframe
              src={`https://www.google.com/maps?q=${HARITA_KOORDINAT}&z=17&hl=tr&output=embed`}
              title="Manas Boya konumu"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a className="dugme sari harita-ac" href={HARITA_LINKI} target="_blank" rel="noopener">
              Haritada aç ve yol tarifi al
            </a>
          </div>

          <form className="form" action="mailto:manasboya20@gmail.com" method="post" encType="text/plain">
            <h3>Bize mesaj bırakın</h3>
            <label>
              Ad Soyad
              <input type="text" name="İsim" autoComplete="name" required />
            </label>
            <label>
              E-posta adresiniz
              <input type="email" name="Email" autoComplete="email" required />
            </label>
            <label className="tam">
              Mesajınız
              <textarea name="Mesaj" rows={4} required />
            </label>
            <button type="submit" className="dugme sari">Mesajı gönder</button>
          </form>
        </div>
      </section>
    </>
  );
}
