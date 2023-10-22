import Image from "next/image";

import image3 from "../../../public/3.jpg";
import image4 from "../../../public/4.jpg";
import image5 from "../../../public/5.jpg";
import image6 from "../../../public/6.jpg";
import image7 from "../../../public/7.jpg";

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function About() {
  return (
    <>
      {/* Brand Story Section */}
      <div className="relative isolate -z-10 pt-10 pb-24 sm:pb-32">
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-yellow-300 to-yellow-500 opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto container px-6 lg:px-8">
            <div className=" gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-yellow-700 sm:text-6xl font-serif">
                  We’re changing the way people Dress.
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-yellow-900 sm:max-w-md lg:max-w-none font-serif">
                  Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in
                  quis cupidatat mollit aute velit. Et labore commodo nulla
                  aliqua proident mollit ullamco exercitation tempor. Sint
                  aliqua anim nulla sunt mollit id pariatur in voluptate cillum.
                  Eu voluptate tempor esse minim amet fugiat veniam occaecat
                  aliqua.
                </p>
              </div>
              <div className="mt-14 flex gap-8 sm:-mt-44 justify-end sm:pl-20 lg:mt-0 lg:pl-0 mr-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      src={image3}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={500}
                      height={500}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      width={500}
                      height={500}
                      src={image4}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      width={500}
                      height={500}
                      src={image5}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      width={500}
                      height={500}
                      src={image6}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      width={500}
                      height={500}
                      src={image7}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Founder's Background section */}
      <div className="relative py-24 sm:py-32">
        <div className="mx-auto flex flex-col lg:flex-row container gap-x-8 lg:items-center justify-between gap-y-20">
          <div className="w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl xl:col-span-2 order-1 xl:order-2">
            <h1 className="text-4xl font-bold tracking-tight text-yellow-700 sm:text-6xl font-serif">
              Founder&apos;s Background.
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-yellow-900 lg:max-w-none font-serif">
              Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
              cupidatat mollit aute velit. Et labore commodo nulla aliqua
              proident mollit ullamco exercitation tempor. Sint aliqua anim
              nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate
              tempor esse minim amet fugiat veniam occaecat aliqua.
            </p>
          </div>
          <div className="hidden relative xl:col-span-2 lg:grid grid-cols-3 grid-rows-3 max-w-xl order-2 xl:order-1">
            <div className="max-w-xs row-span-2 col-span-2 col-start-2 lg:col-start-1">
              <Image src={image4} alt="" className="rounded-xl" />
            </div>
            <div className="absolute max-w-xs row-start-2 row-span-2 col-span-2 lg:col-start-2">
              <Image src={image5} alt="" className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
      {/* team section */}
      <div className="relative py-24 sm:py-32">
        <div className="mx-auto grid container gap-x-20 items-center gap-y-20 px-6 lg:px-8 lg:grid-cols-4">
          <div className="max-w-xl lg:col-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-yellow-700 sm:text-6xl font-serif">
              Our Team.
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-yellow-900 lg:max-w-none font-serif">
              Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
              cupidatat mollit aute velit. Et labore commodo nulla aliqua
              proident mollit ullamco exercitation tempor. Sint aliqua anim
              nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate
              tempor esse minim amet fugiat veniam occaecat aliqua.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image
                    className="h-16 w-16 rounded-xl"
                    src={person.imageUrl}
                    alt=""
                    width={500}
                    height={500}
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Approach and Expertise section */}
      <div className="relative py-24 sm:py-32">
        <div className="mx-auto flex flex-col lg:flex-row container gap-x-8 lg:items-center justify-between gap-y-20">
          <div className="w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl xl:col-span-2 order-1 xl:order-2">
            <h1 className="text-4xl font-bold tracking-tight text-yellow-700 sm:text-6xl font-serif">
              Approach and Expertise.
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-yellow-900 lg:max-w-none font-serif">
              Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
              cupidatat mollit aute velit. Et labore commodo nulla aliqua
              proident mollit ullamco exercitation tempor. Sint aliqua anim
              nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate
              tempor esse minim amet fugiat veniam occaecat aliqua.
            </p>
          </div>
          <div className="hidden relative xl:col-span-2 lg:grid grid-cols-3 grid-rows-3 max-w-xl order-2 xl:order-1">
            <div className="max-w-xs row-span-2 col-span-2 col-start-2 lg:col-start-1">
              <Image src={image4} alt="" className="rounded-xl" />
            </div>
            <div className="absolute max-w-xs row-start-2 row-span-2 col-span-2 lg:col-start-2">
              <Image src={image5} alt="" className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
