import Image from "next/image";
import heroSectionImage from "../../../public/hero-image.jpg";
import { AnimatedDiv } from "../animated-div";

export function HeroSection() {
  return (
    <div className="relative bg-gray-700">
      <div className="mx-auto container h-screen flex justify-center lg:grid lg:grid-cols-12 px-6 lg:px-8">
        <div className="bg-black/50 lg:bg-inherit lg:col-span-7 lg:px-0 xl:col-span-6 z-40 lg:z-10 flex items-center lg:-mt-20 lg:mr-4 py-24 sm:py-10">
          <AnimatedDiv className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold font-serif tracking-tight text-center lg:text-left text-yellow-200 sm:text-6xl">
              Dress & feel like the gentleman you are.
            </h1>
            <p className="mt-6 text-lg leading-8 text-yellow-100 text-center lg:text-left">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center gap-x-6 w-fit mx-auto lg:ml-0">
              <a
                href="#services"
                className="rounded bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-gray-100 hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              >
                Our Services
              </a>
              <a
                href="/products"
                className="group text-sm font-semibold leading-6 text-gray-100"
              >
                See Our Products
                <span
                  aria-hidden="true"
                  className="text-yellow-500 hidden group-hover:inline-block transition-all origin-left ml-2"
                >
                  →
                </span>
                <div className="bg-yellow-500 h-0.5 scale-x-0 group-hover:scale-x-100 transition-all origin-left" />
              </a>
            </div>
          </AnimatedDiv>
        </div>
        <div className="absolute lg:relative lg:col-span-5 lg:-mr-8 xl:absolute inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="aspect-[3/2] w-full bg-gray-50 object-cover object-top lg:absolute lg:inset-0 lg:aspect-auto h-full"
            src={heroSectionImage}
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
