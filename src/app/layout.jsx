import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "MuhammadNurullohning portfolio sahifasi",
  description:
    "MuhammadNurulloh haqida barcha ma'lumotlarni bu yerdan topishingiz mumkin. Barcha yangiliklar ilhomlandim.uz sahifasida",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="uz">
      <body className="bg-body bg-no-repeat bg-cover min-h-screen flex flex-col font-source-sans font-normal overflow-auto">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
