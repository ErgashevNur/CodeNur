import Link from "next/link";
import { FaEye, FaLink, FaGithub } from "react-icons/fa";

const projects = [
  {
    h2: "Kork Factory",
    p: `Kork — kompaniyaning asosiy vazifasi mahalliy korxonalar, firmalar,
        ommabop ish kiyimlarini keng assortimentda taklif qilishdan iborat.`,
    link: "https://kork.uz/",
  },
  {
    h2: "Chizlab",
    p: "O‘zbekistondagi ilk chizmachilik hamda dizaynga oid manbaalarni bir joyga to‘plovchi sayt. U yerda turli xil maqolalar va chizmachilikga oid nima narsa bolsa hammasini topishingiz mumkin.",
    link: "https://chizlab.uz/",
  },
  {
    h2: "Baddiyat",
    p: `Badiiyat — bu badiiy adabiyotga mehr qo‘yganlar uchun yaratilgan zamonaviy onlayn kutubxona. Platformamizda siz turli janrdagi asarlarni topishingiz, sevimli mualliflaringizning hayoti va ijodi bilan yaqindan tanishishingiz mumkin. Har bir kitob – bu yangi dunyo, har bir muallif – bu hayotdan olingan ilhom manbai."Badiiyat" sizga nafaqat o‘qish imkonini, balki kitoblarni xarid qilish va shaxsiy kutubxonangizni boyitish imkoniyatini ham taqdim etadi.`,
    link: "https://weblibrary-two.vercel.app/",
  },
  {
    h2: "Invoice App",
    p: `Invoice App — bu SRM (Supplier Relationship Management) tizimi
        bo‘lib, asosan moliya bo‘limlari uchun mo‘ljallangan. Ushbu dastur
        hisob-kitob jarayonlarini avtomatlashtirish, moliyaviy hujjatlarni
        tartibga solish va samaradorlikni oshirish uchun ishlab chiqilgan.
        Ayniqsa, korxonalar va tashkilotlar o‘rtasidagi hisob-fakturalarni
        boshqarish, to‘lovlarni nazorat qilish hamda moliyaviy jarayonlarni
        soddalashtirishda katta yordam beradi.`,
    link: "https://invoicee-six.vercel.app",
  },
];

export default function Loyhalar() {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl mt-14 mb-8">Loyhalarim</h1>
      <section className="md:px-4">
        {projects.map((data) => (
          <div className="p-5">
            <h2 className="font-bold text-center text-lg md:text-left">
              <a
                href={data.link}
                target="_blank"
                className="underline text-blue-700"
              >
                {data.h2}
              </a>
            </h2>
            <p className="text-base text-center md:text-left">{data.p}</p>
            {/* <iframe
              src={data.link}
              className="w-full h-[400px] border rounded-lg"
            ></iframe> */}
          </div>
        ))}
      </section>
    </div>
  );
}
