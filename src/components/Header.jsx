import Navbar from "./Navbar";
import { TypingAnimation } from "./ui/typing-animation";

export default function Header() {
  return (
    <header className="py-3">
      <div className="container max-w-screen-lg mx-auto px-5 flex items-center justify-between">
        <h1 className="font-medium text-2xl">
          {/* Desktop uchun to'liq ism */}
          <span className="hidden md:flex">
            <TypingAnimation>MuhammadNurullohning Portfoliosi</TypingAnimation>
          </span>

          {/* Mobil uchun qisqa variant */}
          <span className="flex md:hidden">
            <TypingAnimation>MP</TypingAnimation>
          </span>
        </h1>

        <Navbar />
      </div>
    </header>
  );
}
