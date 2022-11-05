/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
      <div className="bg-white">
        <div className="relative bg-gray-900">
          {/* Decorative image and overlay */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <img
              src="/hero-2.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
  
          <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">Autumn treats are here</h1>
            <p className="mt-4 text-xl text-white">
              All the pumpkin spice you could ever desire. Check out the latest options from our small-batch release
              while they're still in stock.
            </p>
            <a
              href="#"
              className="mt-8 inline-block  border border-transparent rounded-full bg-red-400 px-8 py-4 uppercase text-base font-bold text-white hover:bg-gray-100"
            >
              Shop New treats
            </a>
          </div>
        </div>
      </div>
    )
  }
  