import Social from "./Social";
import { buttonVariants } from "./ui/button";
import { Globe } from "./ui/globe";
import MeImg from "/public/mee.jpg";
import Image from "next/image";
import Link from "next/link";
import { WordRotate } from "./ui/word-rotate";
import { Highlighter } from "./ui/highlighter";
import { HyperText } from "./ui/hyper-text";
import { Skills } from "./Skills";

export default function Me() {
  return (
    <section className="py-5 flex sm:items-center h-full">
      <div className="container max-w-screen-lg mx-auto px-5 md:flex justify-between">
        <div>
          <div className="flex flex-col items-center mb-5 gap-3 sm:gap-6 sm:flex-row">
            <Image
              className="w-[100px] h-[100px] aspect-square object-cover rounded-lg sm:w-[170px] sm:h-[170px] sm:shadow-sm animate-slide-top"
              src={MeImg}
              width={100}
              height={100}
              alt="codenur"
              priority
              unoptimized
            />
            <div className="flex flex-col text-center items-center sm:text-left sm:items-start animate-slide-top delay-300">
              <h2 className="text-2xl font-medium mb-1 sm:text-4xl">
                MuhammadNurulloh
              </h2>
              <span className="text-slate-500 text-lg font-medium mb-2 sm:text-2xl">
                {/* <WordRotate words={["FrontEnd dasturchi", "ReactJs, NextJS"]} /> */}
                FrontEnd dasturchi
              </span>

              <Social />
            </div>
          </div>
          <div className="flex flex-col items-center text-center sm:text-left sm:items-start sm:max-w-96">
            <p className="mb-5 sm:text-lg animate-slide-top delay-600">
              Yillar davomida tinchlik bermagan{" "}
              <span className="text-xs">
                <Highlighter action="highlight" color="#FF9800">
                  <span className="text-lg">muammoni</span>{" "}
                </Highlighter>{" "}
              </span>
              atiga bir necha qator kod bilan{" "}
              <span className="text-xs">
                {" "}
                <Highlighter action="underline" color="#87CEFA">
                  <span className="text-lg">hal qilishimga</span>
                </Highlighter>{" "}
              </span>{" "}
              ishonasizmi?
            </p>
            <div className="flex gap-5">
              <Link
                className={`${buttonVariants({
                  variant: "default",
                })} animate-slide-top delay-900 text-lg`}
                href="/projects/"
              >
                <HyperText>Yechimlar</HyperText>
              </Link>
              <Link
                className={`${buttonVariants({
                  variant: "outline",
                })} animate-slide-top delay-1200`}
                href="/me/"
              >
                Haqimda
              </Link>
            </div>
          </div>
        </div>

        <div className="md:mt-48">
          <Skills />
        </div>
      </div>
    </section>
  );
}
