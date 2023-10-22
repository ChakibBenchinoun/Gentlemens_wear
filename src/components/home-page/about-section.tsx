import Image from "next/image";
import image1 from "../../../public/1.jpg";
import image3 from "../../../public/3.jpg";
import image4 from "../../../public/4.jpg";
import image5 from "../../../public/5.jpg";
import { cn } from "@/lib/utils";

export function AboutSection({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-white", className)}>
      <div className="mx-auto container px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold text-yellow-700 sm:text-4xl font-serif">
              Algerien Gentleman Clothing assistentcy
            </h2>
            <p className="mt-6 text-xl leading-8 text-yellow-600">
              Quasi est quaerat. Sit molestiae et. Provident ad dolorem
              occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
              error quod. Excepturi quidem expedita molestias quas.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat. Quasi aperiam sit non sit neque reprehenderit.
            </p>
            <div className="mt-10 flex">
              <a
                href="/about"
                className="group text-sm font-semibold leading-6 text-gray-900"
              >
                Read More
                <span aria-hidden="true" className="text-yellow-500 ml-2">
                  →
                </span>
                <div className="bg-yellow-500 h-0.5 scale-x-0 group-hover:scale-x-100 transition-all origin-left" />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src={image1}
                alt=""
                width={500}
                height={500}
                className="aspect-[7/5] w-[37rem] max-w-none rounded bg-gray-50 object-bottom object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src={image3}
                  alt=""
                  width={500}
                  height={500}
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded bg-gray-50 object-cover object-top"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src={image4}
                  alt=""
                  width={500}
                  height={500}
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src={image5}
                  alt=""
                  width={500}
                  height={500}
                  className="aspect-[4/3] w-[24rem] max-w-none rounded bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
