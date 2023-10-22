import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import logo from "../../../public/logo.jpeg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Info", href: "/info" },
];
export function Navigation() {
  return (
    <header className="border-b border-gray-300 sticky top-0 inset-x-0 bg-white z-50">
      <nav
        className="mx-auto flex container items-center justify-between py-4 px-6 lg:px-8"
        aria-label="Global"
      >
        <a href="/" className="-m-1.5 p-1.5 flex justify-center items-center">
          <span className="sr-only">Moulay Menswear</span>
          <Image
            className="h-14 w-auto rounded-full"
            src={logo}
            alt=""
            width={500}
            height={500}
          />
          <span className="ml-5 text-xl uppercase font-serif tracking-wider">
            Moulay Menswear
          </span>
        </a>

        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 font-serif"
              >
                Menu
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="lg:hidden absolute -right-11 w-60 inset-y-0 h-screen py-4 px-0 bg-white flex flex-col"
              sideOffset={22}
            >
              {navigation.map((item) => (
                <DropdownMenuItem key={item.name} className="w-full mx-4 my-2">
                  <div className="group">
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-md font-semibold leading-6 text-gray-900 py-2 font-serif"
                    >
                      {item.name}
                    </a>
                    <div className="bg-yellow-500 h-0.5 scale-x-0 group-hover:scale-x-100 transition-all origin-left" />
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group text-sm font-semibold leading-6 text-gray-900 font-serif"
            >
              {item.name}
              <div className="bg-yellow-500 h-0.5 scale-x-0 group-hover:scale-x-100 transition-all origin-left" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
