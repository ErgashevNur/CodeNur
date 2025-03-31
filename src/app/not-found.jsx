import { FaEye, FaLink, FaGithub } from "react-icons/fa";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl mt-14 mb-8">Loyhalarim</h1>
      <section className="lg:grid grid-cols-2 md:px-4">
        <div className="p-5">
          <h2 className="font-bold text-center text-lg md:text-left">
            Taraqqiyot NGO
          </h2>
          <p className="text-sm text-center md:text-left">
            Taraqqiyot NGO — bu asosan Vodiy aholisi uchun ichimlik suvi qazib
            chiqarish va yetkazib berish bilan shug‘ullanuvchi kompaniya. Sayt
            ushbu kompaniya faoliyati haqida ma’lumot berish, xizmatlari bilan
            tanishtirish va mijozlarga qulaylik yaratish uchun ishlab chiqilgan.
            Taraqqiyot NGO yirik xorijiy kompaniyalar bilan hamkorlik qiladi va
            ichimlik suvi ta’minotini yaxshilashga yo‘naltirilgan loyihalarni
            amalga oshiradi.
          </p>
          <iframe
            src="https://taraqqiyotngo.vercel.app"
            className="w-full h-[400px] border rounded-lg"
          ></iframe>
        </div>
        <div className="p-5">
          <h2 className="font-bold text-center text-lg md:text-left">
            Invoice App
          </h2>
          <p className="text-sm text-center md:text-left">
            Invoice App — bu SRM (Supplier Relationship Management) tizimi
            bo‘lib, asosan moliya bo‘limlari uchun mo‘ljallangan. Ushbu dastur
            hisob-kitob jarayonlarini avtomatlashtirish, moliyaviy hujjatlarni
            tartibga solish va samaradorlikni oshirish uchun ishlab chiqilgan.
            Ayniqsa, korxonalar va tashkilotlar o‘rtasidagi hisob-fakturalarni
            boshqarish, to‘lovlarni nazorat qilish hamda moliyaviy jarayonlarni
            soddalashtirishda katta yordam beradi.
          </p>
          <iframe
            src="https://invoicee-six.vercel.app"
            className="w-full h-[400px] border rounded-lg"
          ></iframe>
        </div>

        <div className="p-5">
          <h2 className="font-bold text-center text-lg md:text-left">
            EGO Uzbekistan
          </h2>
          <p className="text-sm text-center md:text-left">
            EGO Uzbekistan — bu telefonlar, noutbuklar va turli aksessuarlarni
            keng assortimentda taklif qiluvchi do‘kon hisoblanadi. Xaridorlar
            uchun zamonaviy gadjetlar va ularning aksessuarlari mavjud bo‘lib,
            sifatli mahsulotlarni qulay narxlarda taqdim etadi. Shuningdek, EGO
            Uzbekistan do‘konining filiallari Toshkent va Farg‘ona shaharlarida
            ham faoliyat yuritadi, bu esa mijozlarga yanada yaqinroq bo‘lish
            imkonini beradi.
          </p>
          <iframe
            src="https://ergashevs-shop.vercel.app"
            className="w-full h-[400px] border rounded-lg"
          ></iframe>
        </div>

        <div className="p-5">
          <h2 className="font-bold text-center text-lg md:text-left">
            School App
          </h2>
          <p className="text-sm text-center md:text-left">
            School App — bu maktablar uchun mo‘ljallangan bo‘lib, o‘quv
            jarayonini yanada samarali boshqaradi. Ushbu tizimda maktabning
            turli jarayonlari tizimlashtirilgan, ulardan biri davomat
            nazoratidir. An’anaviy usuldan farqi, bunda davomatni faqat bitta
            mas’ul shaxs emas, balki har bir o‘qituvchi o‘z sinfi uchun mustaqil
            ravishda tizim orqali belgilaydi. Bu esa vaqtni tejash va
            ma’lumotlarning aniqligini ta’minlashga yordam beradi.
          </p>
          <iframe
            src="https://school-app-amber-delta.vercel.app"
            className="w-full h-[400px] border rounded-lg"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
