import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FaEye, FaLink, FaGithub } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="">
      <div className="container mx-auto px-5 mt-16 max-w-[1100px]">
        <div className="flex items-center max-w-[600px] mx-auto mb-10">
          <div className="flex flex-col">
            <h1 className="text-2xl mb-2">
              Yozgan barcha loyhalarimni ko'rmoqchimisiz...
            </h1>
            <p className="mb-4">
              Sizni hayratda qoldirish uchun tayyorlandim! Lekin avval bir
              chashka kofe oling ☕, juda qiziq bo'ladi!
            </p>
          </div>
          <img
            src="/f397a2d4003558c6068fd9ed96c29001.jpg"
            alt=""
            className="h-60 w-60 rounded-3xl"
          />
        </div>
        <div className="grid grid-cols-2 gap-16 max-w-[1000px]">
          <div className="relative group w-[500px] rounded-xl">
            <img src="/project-bg.jpg" alt="Image" className="h-auto" />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <a href="shisui-q2oo.vercel.app">
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </a>

              <button className="btn">
                <i className="fas fa-link text-white text-xl">
                  <FaLink />
                </i>
              </button>

              <dialog id="Link" className="modal">
                <div className="modal-box">
                  <div className="modal-action">
                    <a href="shisui-q2oo.vercel.app">shisui-q2oo.vercel.app</a>
                    <form method="dialog">
                      <button className="btn">Yopish</button>
                    </form>
                  </div>
                </div>
              </dialog>

              <a href="https://github.com/ErgashevNur/shisui">
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </a>
            </div>
          </div>

          {/* <div className="relative group w-[500px]">
            <img src="/game.jpg" alt="Image" className="h-auto" />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <Link href="">
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </Link>
              <Link href="">
                <i className="fas fa-link text-white text-xl">
                  <FaLink />
                </i>
              </Link>
              <Link href="">
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </Link>
            </div>
          </div>

          <div className="relative group w-[500px]">
            <img src="/cofferoaster.jpg" alt="Image" className="h-auto" />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <Link href="">
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </Link>
              <Link>
                <i className="fas fa-link text-white text-xl">
                  <FaLink />
                </i>
              </Link>
              <Link>
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </Link>
            </div>
          </div>

          <div className="relative group w-[500px]">
            <img src="/furniro.jpg" alt="Image" className="h-auto" />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <Link>
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </Link>
              <Link href="">
                <i className="fas fa-link text-white text-xl">
                  <FaLink />
                </i>
              </Link>
              <Link href="">
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </Link>
            </div>
          </div>

          <div className="relative group w-[500px]">
            <img src="/online-shop.jpg" alt="Image" className="h-auto" />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <Link href="">
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </Link>
              <Link href="">
                <i className="fas fa-link text-white text-xl">
                  <FaLink />
                </i>
              </Link>
              <Link href="">
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </Link>
            </div>
          </div>

          <div className="relative group w-[500px]">
            <img src="/Technologist.jpg" alt="Image" className="h-auto" />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <Link href="">
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </Link>
              <Link href="">
                <i className="fas fa-link text-white text-xl">
                  <FaLink />
                </i>
              </Link>
              <Link href="">
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </Link>
            </div>
          </div>

          <div className="relative group w-[500px]">
            <img src="/To-Do-List.jpg" alt="Image" className="h-auto" />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <Link href="">
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </Link>
              <Link href="">
                <i className="fas fa-link text-white text-xl">
                  <FaLink />
                </i>
              </Link>
              <Link href="">
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </Link>
            </div>
          </div>

          <div className="relative group w-[500px]">
            <img src="/User.jpg" alt="Image" className="h-auto" />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <Link href="">
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </Link>
              <Link href="">
                <i className="fas fa-link text-white text-xl">
                  <FaLink />
                </i>
              </Link>
              <Link href="">
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
