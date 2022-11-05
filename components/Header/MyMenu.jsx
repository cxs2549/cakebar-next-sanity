/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react"
import { Popover, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
import { BsChevronDown } from "react-icons/bs"
import { motion, AnimatePresence } from "framer-motion"
const shopLinks = ["cakes", "pies", "cookies", "ice cream", "donuts"]
const occasionLinks = [
  "fall shop",
  "birthday shop",
  "cookie gift shop",
  "corporate/bulk gifts",
  "gifts under $50",
  "e-gift cards",
]
const locationLinks = [
  "new york",
  "los angeles",
  "washington, D.C.",
  "boston",
  "las vegas",
  "toronto",
  "classes",
  "same day delivery",
]
const navigation = [
  { name: "Contact us", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Log in", href: "#" },
]
const MyMenu = () => {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 -translate-y-2"
      enterTo="opacity-100 translate-y-0"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-2"
    >
      <Popover.Panel
        focus
        className={`absolute z-30 top-0 inset-x-0  p-2 transition transform origin-top-right md:hidden rounded-2xl`}
      >
        <div className="rounded-2xl shadow-lg bg-white border border-neutral-50 dark:border-none dark:bg-neutral-800">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <img src="/logo.png" className="w-10" alt="" />
              <div className="-mr-1">
                <Popover.Button
                  className={`rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none focus:ring-0`}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-2">
                <DropLink title="shop" links={shopLinks} />
                <DropLink title="shop by occasion" links={occasionLinks} />
                <DropLink title="Locations" links={locationLinks} />

                {["loyalty", "order ASAP delivery"].map((item) => (
                  <div
                    key={item}
                    className={`flex justify-between rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700   p-2 flex-col  capitalize tracking-tight cursor-pointer dark:text-neutral-400 dark:hover:text-neutral-200 text-neutral-500 hover:text-neutral-600 font-medium`}
                  >
                    {item}
                  </div>
                ))}
              </nav>
            </div>
          </div>
          <div className="py-6 px-7 bg-neutral-50 dark:bg-neutral-700 rounded-b-2xl ">
            <div className="grid grid-cols-2 gap-4">
              {navigation.map((item) => (
                <Popover.Button
                  key={item.name}
                  href={`/`}
                  className=" hover:underline dark:text-neutral-400 text-left hover:text-neutral-200"
                >
                  {item.name}
                </Popover.Button>
              ))}
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  )
}

const DropLink = ({ title, links }) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div
        className={`flex justify-between rounded-lg hover:bg-gray-100  dark:hover:bg-neutral-700   p-2 flex-col`}
      >
        <div
          className="flex capitalize tracking-tight justify-between w-full cursor-pointer text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 font-medium"
          onClick={() => setOpen(!open)}
        >
          <span>{title}</span>
          <BsChevronDown
            size={20}
            className={` text-gray-400 ${open && "rotate-180"}`}
          />
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{
                duration: 0.6,
                ease: [0.04, 0.62, 0.23, 0.98],
              }}
            >
              <ul
                className={`overflow-hidden dark:bg-neutral-700 bg-gray-50 transition-all duration-150 rounded-lg mt-3`}
              >
                {links.map((item, i) => (
                  <li
                    key={i}
                    className="py-2 capitalize  hover:bg-red-400 rounded-xl hover:text-white p-2 font-semibold text-sm cursor-pointer"
                  >
                    <Popover.Button
                      href="/"
                      className={`capitalize w-full text-left focus:outline-none focus:ring-0`}
                    >
                      {item}
                    </Popover.Button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MyMenu
