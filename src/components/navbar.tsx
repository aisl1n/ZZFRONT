import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/constants/categories";

export default function Navbar() {
  return (
    <header>
      <nav className="flex h-[96px] w-full items-center justify-between bg-white px-8 text-black">
        <div className="flex w-full items-center lg:w-auto">
          <div className="flex w-full justify-between">
            <Link href="/" className="flex lg:hidden">
              <Image
                src="./assets/hamburgerMenu.svg"
                width={15}
                height={15}
                alt="menu amburger"
              />
            </Link>

            <Link href="/" className="flex w-full justify-center lg:w-auto">
              <Image
                src="./assets/zzlogo.svg"
                width={97}
                height={17}
                className="min-h-[17px] min-w-[97px]"
                alt="logo do ecommerce"
              />
            </Link>
          </div>

          <ul className="hidden gap-6 px-10 text-[12px] lg:flex">
            {CATEGORIES.map((category) => (
              <li
                key={category}
                className="border-gray-800 py-2 uppercase last:border-l last:pl-6"
              >
                <Link href="/">{category}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="hidden items-center gap-2 lg:flex">
            <Image
              src="./assets/local.svg"
              width={24}
              height={24}
              alt="icone de localização"
            />
            <span className="py-6 text-[12px] uppercase underline">
              ative sua localização
            </span>
          </Link>
          <Link href="/" className="flex">
            <Image
              src="./assets/heart.svg"
              width={24}
              height={24}
              alt="icone de favoritos"
            />
          </Link>
          <Link href="/" className="hidden lg:flex">
            <Image
              src="./assets/profile.svg"
              width={24}
              height={24}
              alt="icone de perfil"
            />
          </Link>
          <Link href="/" className="flex">
            <Image
              src="./assets/bag.svg"
              width={24}
              height={24}
              alt="icone de sacola"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
