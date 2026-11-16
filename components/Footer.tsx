import Link from "next/link";
import { BAYI_LINKI, INSTAGRAM, LINKEDIN } from "./site";

export default function Footer() {
  return (
    <footer>
      <div className="kap">
        <img src="/img/manas-logo-beyaz.png" alt="Manas" />
        <nav aria-label="Alt menü">
          <Link href="/kurumsal/biz-kimiz">Hakkımızda</Link>
          <Link href="/#markalar">Markalar</Link>
          <Link href="/#fiyat">Fiyat listesi</Link>
          <a href={BAYI_LINKI} target="_blank" rel="noopener">Online ödeme</a>
          <a href={BAYI_LINKI} target="_blank" rel="noopener">Bayi girişi</a>
          <a href={INSTAGRAM} target="_blank" rel="noopener">Instagram</a>
          <a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn</a>
        </nav>
        <span>© {new Date().getFullYear()} MANAS BOYA | DENİZLİ</span>
      </div>
    </footer>
  );
}
