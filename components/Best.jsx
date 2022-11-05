/* eslint-disable @next/next/no-img-element */
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { urlFor } from "../lib/client"
import Link from "next/link"
const products = [
  {
    id: 1,
    name: "Basic Tee 8-Pack",
    href: "#",
    price: "$256",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
]

export default function Example({ products }) {
  return (
    <div className="">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="pb-6 text-2xl md:text-3xl lg:text-4xl font-medium">Shop our Bestsellers</h2>

        <div className="flex md:grid overflow-x-scroll  no-scrollbar snap-mandatory snap-x md:snap-none  gap-4 grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <Link key={product._id} href={`/product/${product.slug.current}`}>
              <div
                className="group snap-start min-w-[300px] relative bg-white dark:bg-neutral-900 dark:border-none border border-gray-100 rounded-lg flex flex-col overflow-hidden"
              >
                <div className="aspect-w-3 aspect-h-3 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                  <img
                    src={urlFor(product.image.asset._ref)}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                  />
                </div>
                <div className="flex-1 p-4 space-y-2 flex flex-col">
                  <h2 className="uppercase text-sm font-medium text-red-400">
                    {product.category[0]}
                  </h2>
                  <h3 className=" -translate-y-2.5 uppercase font-bold ">
                    <div>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </div>
                  </h3>
                 
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
