import Social from "./Social";
import { buttonVariants } from "./ui/button";
import MeImg from "/public/mee.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Me() {
  return (
    <section className="py-5 flex sm:items-center h-full">
      <div className="container max-w-screen-lg mx-auto px-5">
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
              <p className="text-slate-500 text-lg font-medium mb-2 sm:text-2xl">
                <a
                  href="https://www.google.com/search?q=front-end+developer+%D1%87%D1%82%D0%BE+%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82&client=ubuntu-chr&hs=kq8&sca_esv=ec4e310bc6b52ebd&sxsrf=ADLYWIJlV0cAG-fqXvYBocOuH-Zq2iy2Nw%3A1736950557525&ei=HcOHZ67nH-uxwPAPvJyEqAM&oq=frontend+who&gs_lp=Egxnd3Mtd2l6LXNlcnAiDGZyb250ZW5kIHdobyoCCAEyBxAjGLADGCcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEdI_zhQAFgAcAF4AJABAJgBfKABfKoBAzAuMbgBA8gBAJgCAaACCZgDAIgGAZAGCZIHATGgB6sF&sclient=gws-wiz-serp"
                  target="_blank"
                >
                  FrontEnd
                </a>{" "}
                dasturchi
              </p>
              <Social />
            </div>
          </div>
          <div className="flex flex-col items-center text-center sm:text-left sm:items-start sm:max-w-96">
            <p className="mb-5 sm:text-lg animate-slide-top delay-600">
              Yillar davomida tinchlik bermagan{" "}
              <span className="underline font-medium">muammoni</span> atiga bir
              necha qator kod bilan{" "}
              <span className="underline font-medium">hal qilishimga</span>{" "}
              ishonasizmi?
            </p>
            <div className="flex gap-5">
              <Link
                className={`${buttonVariants({
                  variant: "default",
                })} animate-slide-top delay-900`}
                href="/projects/"
              >
                Yechimlar
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
      </div>
    </section>
  );
}
