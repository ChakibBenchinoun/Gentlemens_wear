import product1 from "/public/products/product1.jpg";
import product2 from "/public/products/product2.jpg";
import product3 from "/public/products/product3.jpg";
import product4 from "/public/products/product4.jpg";
import product5 from "/public/products/product5.jpg";
import { CarouselSlider } from "../carousel-slider";
import { cn } from "@/lib/utils";

const favorites = [
  {
    product_name: "Black Basic Tee",
    price: "22000",
    product_image: product1,
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    product_name: "Off-White Basic Tee",
    price: "32000",
    product_image: product2,
    imageAlt: "Model wearing women's off-white cotton crewneck tee.",
  },
  {
    product_name: "Mountains Artwork Tee",
    price: "16000",
    product_image: product3,
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
  {
    product_name: "Mountains Artwork Tee",
    price: "19500",
    product_image: product4,
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
  {
    product_name: "Mountains Artwork Tee",
    price: "13000",
    product_image: product5,
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
  {
    product_name: "Mountains Artwork Tee",
    price: "35000",
    product_image: product5,
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
  {
    product_name: "Mountains Artwork Tee",
    price: "19500",
    product_image: product5,
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
];

export function OurFavoritesSection({ className }: { className?: string }) {
  return (
    <section aria-labelledby="favorites-heading">
      <div className={className}>
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2
              id="favorites-heading"
              className="text-2xl font-bold tracking-tight text-yellow-200 font-serif"
            >
              Our Favorites
            </h2>
            <a
              href="/products"
              className="group hidden text-sm font-semibold text-yellow-100 sm:block"
            >
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
              <div className="bg-yellow-500 h-0.5 scale-x-0 group-hover:scale-x-100 transition-all origin-left" />
            </a>
          </div>
          <div className="my-5">
            <CarouselSlider images={favorites} />
          </div>
          <div className="mt-6 sm:hidden">
            <a
              href="/products"
              className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a>
            CarouselSlider
          </div>
        </div>
      </div>
    </section>
  );
}
