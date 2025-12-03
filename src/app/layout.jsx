import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata = {
  title: "MuhammadNurullohning portfolio sahifasi",
  description:
    "MuhammadNurulloh haqida barcha ma'lumotlarni bu yerdan topishingiz mumkin. Barcha yangiliklar codenur.uz sahifasida",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="uz">
      <body className="flex min-h-screen flex-col overflow-auto bg-cover font-source-sans font-normal">
        <ClientWrapper>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
