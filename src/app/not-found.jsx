import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FaEye, FaLink, FaGithub } from "react-icons/fa";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NotFound() {
  return (
    <div className="">
      <div className="container mx-auto px-10 mt-16 max-w-[1100px]">
        <div className="flex flex-col max-w-[600px] mx-auto mb-20 sm:items-center">
          <div className="flex flex-col text-center">
            <h1 className="text-2xl mb-2 font-bold">
              Yozgan barcha loyhalarimni ko'rmoqchimisiz ???
            </h1>
            <p className="mb-4 text-base">
              Sizni hayratda qoldirish uchun tayyorlandim! Lekin avval bir
              chashka kofe oling ☕, juda qiziq bo'ladi!
            </p>
          </div>
          <img
            src="/look-my-work.webp"
            alt="codenur"
            className="w-72 rounded-3xl"
          />
        </div>

        <div className="max-w-[1060px] mx-auto flex-col justify-center items-center grid gap-x-32 gap-y-10 rid-cols-1 xl:grid-cols-2">
          <div className="relative group w-[500px] rounded-xl">
            <img
              src="/project-bg.jpg"
              alt="Image"
              className="h-auto max-w-[100%] w-[100%] rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <a
                target="_blank"
                href="https://twitter-clone-virid-three.vercel.app/"
              >
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </a>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="">
                    <FaLink />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Linkni Nusxalash</DialogTitle>
                    <DialogDescription>
                      Bu men ochgan saytimning linki.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        defaultValue="https://twitter-clone-virid-three.vercel.app/"
                        readOnly
                      />
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                      <span className="sr-only">Nusxalash</span>
                      <Copy />
                    </Button>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Yopish
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <a
                target="_blank"
                href="https://github.com/ErgashevNur/Twitter-clone"
              >
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </a>
            </div>
          </div>

          <div className="relative group w-[500px]">
            <img src="/game.jpg" alt="Image" className="h-auto rounded-xl" />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <a target="_blank" href="https://ergashev-s.vercel.app/">
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </a>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="">
                    <FaLink />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Linkni Nusxalash</DialogTitle>
                    <DialogDescription>
                      Bu men ochgan saytimning linki.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        defaultValue="https://ergashev-s.vercel.app/"
                        readOnly
                      />
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                      <span className="sr-only">Nusxalash</span>
                      <Copy />
                    </Button>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Yopish
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <a
                target="_blank"
                href="https://github.com/ErgashevNur/rock-paper-scissors-lizar-"
              >
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </a>
            </div>
          </div>

          <div className="relative group w-[500px]">
            <img
              src="/To-Do-List.jpg"
              alt="Image"
              className="h-auto rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <a
                target="_blank"
                href="https://github.com/ErgashevNur/Todo_List"
              >
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="">
                    <FaLink />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Linkni Nusxalash</DialogTitle>
                    <DialogDescription>
                      Bu men ochgan saytimning linki.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        defaultValue="https://github.com/ErgashevNur/Todo_List"
                        readOnly
                      />
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                      <span className="sr-only">Nusxalash</span>
                      <Copy />
                    </Button>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Yopish
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <a
                target="_blank"
                href="https://github.com/ErgashevNur/Todo_List"
              >
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </a>
            </div>
          </div>

          <div className="relative group w-[500px]">
            <img src="/furniro.jpg" alt="Image" className="h-auto rounded-xl" />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <a target="_blank" href="https://furniro-store-tau.vercel.app/">
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </a>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="">
                    <FaLink />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Linkni Nusxalash</DialogTitle>
                    <DialogDescription>
                      Bu men ochgan saytimning linki.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        defaultValue="https://furniro-store-tau.vercel.app/"
                        readOnly
                      />
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                      <span className="sr-only">Nusxalash</span>
                      <Copy />
                    </Button>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Yopish
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <a
                target="_blank"
                href="https://github.com/ErgashevNur/Furniro-Store"
              >
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </a>
            </div>
          </div>

          <div className="relative group w-[500px]">
            <img
              src="/online-shop.jpg"
              alt="Image"
              className="h-auto rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <a
                href="https://ergashevsonline-shop.vercel.app/"
                target="_blank"
              >
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </a>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="">
                    <FaLink />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Linkni Nusxalash</DialogTitle>
                    <DialogDescription>
                      Bu men ochgan saytimning linki.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        defaultValue="https://ergashevsonline-shop.vercel.app/"
                        readOnly
                      />
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                      <span className="sr-only">Nusxalash</span>
                      <Copy />
                    </Button>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Yopish
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <a
                target="_blank"
                href="https://github.com/ErgashevNur/online_shop"
              >
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </a>
            </div>
          </div>

          <div className="relative group w-[500px]">
            <img
              src="/Technologist.jpg"
              alt="Image"
              className="h-auto rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <a target="_blank" href="https://works-two-ashen.vercel.app/">
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="">
                    <FaLink />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Linkni Nusxalash</DialogTitle>
                    <DialogDescription>
                      Bu men ochgan saytimning linki.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        defaultValue="https://works-two-ashen.vercel.app/"
                        readOnly
                      />
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                      <span className="sr-only">Nusxalash</span>
                      <Copy />
                    </Button>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Yopish
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <a target="_blank" href="https://github.com/ErgashevNur/Works">
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </a>
            </div>
          </div>

          <div className="relative group w-[500px]">
            <img
              src="/cofferoaster.jpg"
              alt="Image"
              className="h-auto rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <a
                target="_blank"
                href="https://coffeeroasters-eight-plum.vercel.app/index.html"
              >
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </a>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="">
                    <FaLink />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Linkni Nusxalash</DialogTitle>
                    <DialogDescription>
                      Bu men ochgan saytimning linki.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        defaultValue="https://coffeeroasters-eight-plum.vercel.app/index.html"
                        readOnly
                      />
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                      <span className="sr-only">Nusxalash</span>
                      <Copy />
                    </Button>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Yopish
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <a
                target="_blank"
                href="https://github.com/ErgashevNur/Coffeeroasters"
              >
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </a>
            </div>
          </div>

          <div className="relative group w-[500px]">
            <img src="/User.jpg" alt="Image" className="h-auto rounded-xl" />
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
              <a target="_blank" href="https://ergashev-s-user.vercel.app/">
                <i className="fas fa-eye text-white text-xl">
                  <FaEye />
                </i>
              </a>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="">
                    <FaLink />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Linkni Nusxalash</DialogTitle>
                    <DialogDescription>
                      Bu men ochgan saytimning linki.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        defaultValue="https://ergashev-s-user.vercel.app/"
                        readOnly
                      />
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                      <span className="sr-only">Nusxalash</span>
                      <Copy />
                    </Button>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Yopish
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <a target="_blank" href="https://github.com/ErgashevNur/User">
                <i className="fab fa-github text-white text-xl">
                  <FaGithub />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
