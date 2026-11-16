import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Manas Boya A.Ş. – Denizli toptan boya ve yapı kimyasalları",
    template: "%s – Manas Boya A.Ş.",
  },
  description:
    "Manas Boya: Denizli merkezli toptan boya, yapı kimyasalları ve uygulama ekipmanları. Polisan, Pamukkale Boya, Soudal ve daha fazlası tek adreste.",
  icons: { icon: "/img/manas-browser.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={outfit.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
