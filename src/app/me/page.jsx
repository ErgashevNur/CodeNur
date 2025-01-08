import Link from "next/link";

export default function page() {
  return (
    <div className="py-10">
      <div className="container max-w-screen-sm mx-auto px-5">
        <p className="mb-1 animate-slide-top">Assalomu alaykum.</p>
        <p className="animate-slide-top delay-300 mb-1">
          Ismim MuhammadNurulloh. Frontend dasturchiman 2024-yildan buyon
          dasturlash olamidaman.
        </p>
        <p className="animate-slide-top delay-600 mb-1">
          Dasturlash sohasiga 2020-yildan berib qiziqaman, undan tashqari men
          kelajagimni shu sohada korganligim va ishtiyoqim balandligi uchun ham
          o'rganganman.
        </p>
        <p className="animate-slide-top delay-900 mb-1">
          Dasturlash hayotimda 10+ loyihalar qilganman. Ulardan{" "}
          <span className="underline">real</span> hisoblangani hamda hozir ham
          insonlarga manfaat beradiganlari 0+ hisoblanadi. Batafsil{" "}
          <Link className="underline" href="/projects">
            loyihalar
          </Link>{" "}
          bo'limida tanishishingiz mumkin.
        </p>
        <p className="animate-slide-top delay-1200">
          Hozirda{" "}
          <a className="underline" href="https://najottalim.uz" target="_blank">
            Najot Ta'lim
          </a>{" "}
          ni bitiruvchisiman. Menda hozircha shular, endi o'zingizdan so'rasak
          :D
        </p>
      </div>
    </div>
  );
}
