import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import { Label } from "@radix-ui/react-label";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

const posts = [
  {
    slug: "badiiyat-loyihasi",
    title: "Badiiyat - Onlayn Kutubxona Loyihasi",
    date: "2025-05-06",
    image: "/image.png",
    tags: ["#React", "#ShadCN", "#AdminPanel", "#Kutubxona"],
    content: `
      Hozirda "Badiiyat" nomli onlayn kutubxona loyihasi ustida ishlayapman. 
      Bu loyiha kitoblarni elektron ko‘rinishda saqlaydi, foydalanuvchilar kitoblarni qidirish, o‘qish 
      va mualliflar haqida ma’lumot olish imkoniyatiga ega.

      Men ayni paytda admin paneldagi ma’lumotlarni tahrirlash, foydalanuvchi akkauntlarini sinxronizatsiyalash 
      va saytga kiruvchilarni tekshirish ustida ishlayapman. 

      React Hook Form orqali foydalanuvchini ro‘yxatdan o‘tganini tekshirib, kerakli yo‘nalishga yo‘naltiryapman.

      Bu loyiha menga katta tajriba bermoqda, ayniqsa real loyihalarda qanday muammolar uchrashi mumkinligini 
      va ularni qanday hal qilish kerakligini o‘rganyapman.
    `,
  },
  {
    id: 2,
    slug: "chizlab",
    title:
      "O‘zbekistondagi ilk chizmachilik hamda dizaynga oid manbaalarni bir joyda to‘plovchi sayt.",
    date: "2025-05-06",
    image: "/image copy.png",
    tags: [
      "#Next",
      "#TailwindCSS",
      "#Startap",
      "#Chizmachilik",
      "#Dizayn",
      "#UIUX",
    ],
    content: `
Chizlab — O‘zbekistondagi ilk chizmachilik va dizayn manbalari markazi

Chizlab — bu O‘zbekiston hududida chizmachilik, texnik grafikalar, dizayn va loyihalash sohalariga oid bilim, tajriba va amaliy resurslarni bir joyga jamlagan zamonaviy raqamli platformadir. Bizning asosiy maqsadimiz — o‘zbek tilida yuqori sifatli, foydali va amaliy ma’lumotlar taqdim etish orqali o‘quvchilar, talabalar, dizaynerlar, muhandislar hamda soha ixlosmandlarini birlashtirishdir.

Saytda siz chizmachilik asoslari, geometrik va proyeksion chizmalar, CAD (Computer-Aided Design) dasturlari bo‘yicha qo‘llanmalar, grafik dizayn yondashuvlari, arxitektura chizmalari, mashinasozlik grafikasi va boshqa ko‘plab mavzularga oid interaktiv materiallar, darsliklar, videodarslar va PDF hujjatlarni topishingiz mumkin.

Chizlab nafaqat o‘quvchilar uchun, balki tajribali mutaxassislar uchun ham kerakli manbadir. Platforma doimiy ravishda yangilanib, foydalanuvchilarga yangi maqolalar, misollar, amaliy topshiriqlar va ilg‘or dizayn texnikalarini taqdim etadi.

Shuningdek, foydalanuvchilar o‘z ishlarini yuklash, baham ko‘rish va fikr almashish imkoniyatiga ega — bu esa Chizlab’ni bilim va tajriba almashinuvi uchun faol hamjamiyatga aylantiradi.

Chizlab — o‘zbek tilida chizmachilik va dizayn sohasining yangi davri!
    `,
  },
];

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Image
        src={post.image}
        width={800}
        height={400}
        alt={post.title}
        className="rounded-xl mb-8 w-[500px] mx-auto h-auto object-cover"
      />

      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm">{post.date}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="prose prose-lg mt-6">
        {post.content.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-10 border-t pt-6">
        <Image
          src="/mee.jpg"
          width={40}
          height={40}
          alt="Muallif"
          className="rounded-full"
        />
        <div>
          <p className="font-semibold">MuhammadNurulloh</p>
          <p className="text-sm text-gray-500">
            Frontend Developer | React Enthusiast
          </p>
        </div>
      </div>

      <div className="mt-10 border-t pt-6">
        <h3 className="text-lg font-semibold mb-2">Fikr qoldiring</h3>
        <textarea
          rows="4"
          placeholder="Izohingizni yozing..."
          className="w-full p-3 border rounded-xl bg-slate-700 focus:outline-none text-white  focus:ring focus:ring-blue-300"
        />
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Yuborish
        </button>
      </div>

      <div className="mt-10 flex gap-6 border-t pt-6">
        <a
          href="https://t.me/CodeNur/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline flex gap-2 items-center"
        >
          <FaTelegram className="text-xl text-black" />
          Telegramdan bog‘lanish
        </a>

        <a
          href="https://www.linkedin.com/in/muhammadnurulloh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 flex items-center gap-2 hover:underline"
        >
          <LinkedInLogoIcon className="text-xl text-black" />
          LinkedIndan bog`lanish
        </a>
      </div>
    </div>
  );
}
