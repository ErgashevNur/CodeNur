// app/blog/page.jsx
"use client";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Badiiyat loyihasi: Onlayn kutubxona yaratish",
    date: "2025-04-03",
    slug: "badiiyat-loyihasi",
    content: `“Badiiyat” loyihasi — bu badiiy adabiyotga ixtisoslashgan zamonaviy onlayn kutubxona bo‘lib, foydalanuvchilarga asarlar o‘qish, mualliflar haqida ma'lumot olish va o‘z kutubxonasini shakllantirish imkonini beradi.`,
  },
  {
    id: 2,
    title: "Chizlab: Chizmachilikga oid maqolalar sayti.",
    date: "2025-03-20",
    slug: "chizlab",
    content: `“Chizlab loyhasi O'zbekistondagi yagona chizmachilikga oid maqolalarni ozida jamlagan sayt...`,
  },
];

export default function Blog() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Blog Postlarim
      </h1>
      <div className="grid md:grid-cols-2 gap-6 h-full">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <div className="bg-white hover:bg-slate-100 dark:bg-gray-800 shadow-md rounded-2xl p-5 hover:shadow-xl transition duration-300">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {post.date}
              </p>
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline mb-2">
                {post.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {post.content.length > 100
                  ? post.content.substring(0, 100) + "..."
                  : post.content}
              </p>
              <span className="inline-block mt-4 text-sm text-blue-500 hover:underline">
                Batafsil o'qish →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
