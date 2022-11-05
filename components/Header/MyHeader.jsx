/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from "@headlessui/react"
import {
  AiOutlineEllipsis,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai"
import Link from "next/link"
import Menu from "./MyMenu"
import { Fragment, useState, useRef, useEffect } from "react"
import {
  AnnotationIcon,
  ChatAlt2Icon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline"
import { FiSearch } from "react-icons/fi"
import Searchbar from "./Searchbar"
import { AnimatePresence, motion } from "framer-motion"
import Headroom from "react-headroom"
import { useStateContext } from "../../context/StateContext"

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
const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatAlt2Icon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
]

const navigation = [
  { name: "Contact us", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Log in", href: "#" },
]
const staticLinks = [
  {
    name: "loyalty",
  },
  {
    name: "order ASAP delivery",
  },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
const MyHeader = () => {
  const [openSearch, setOpenSearch] = useState(false)
  const {totalQuantities} = useStateContext()
  const ref = useRef()
  useOnClickOutside(ref, () => setOpenSearch(false))
  return (
    <Headroom className="relative z-20">
      <header className="bg-white relative z-20">
        <Popover className={`relative z-20`} as="nav">
          <div className="flex items-center justify-between md:justify-start max-w-7xl mx-auto px-4 h-24 relative z-20">
            <div className="cursor-pointer md:flex-1">
              <Link href={`/`}>
                <img src="/logo.png" className="w-14 md:w-16" alt="" />
              </Link>
            </div>
            <div className="hidden md:flex gap-8 mr-8 text-sm text-neutral-500 dark:text-neutral-200">
              {navigation.map((item, i) => (
                <div key={i} className="hover:text-neutral-700 cursor-pointer">
                  {item.name}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6 -mr-2">
              <div ref={ref} className="md:hidden">
                <FiSearch
                  onClick={() => setOpenSearch(true)}
                  className="text-gray-500 dark:text-gray-200"
                  size={24}
                />
                <AnimatePresence initial={false}>
                  {openSearch && (
                    <motion.div
                      className=""
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
                      <Searchbar setOpen={setOpenSearch} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="hidden md:block relative">
                <input type="search" placeholder="Search our store" className="pr-12 focus:border-red-400 focus:border-2 focus:outline-none focus:ring-0 rounded-full border-neutral-200" />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <FiSearch
      
                  className="text-gray-500 dark:text-gray-200"
                  size={24}
                />
                </div>
              </div>
              <AiOutlineUser
                size={24}
                className="text-gray-500 dark:text-gray-200 hover:text-neutral-700 cursor-pointer"
              />
              <div className="relative">
                <AiOutlineShopping
                  size={24}
                  className="text-gray-500 dark:text-gray-200 hover:text-neutral-700 cursor-pointer"
                />
                <div className="absolute bg-red-400 text-white rounded-full h-5 scale-95 -translate-y-2 translate-x-2 w-5 text-sm grid place-items-center font-bold">{totalQuantities}</div>
              </div>
              <div className="-ml-2 md:hidden">
                <Popover.Button
                  className={`p-2 inline-flex items-center justify-center text-gray-400 hover:text-neutral-700 focus:outline-none focus:ring-0 `}
                >
                  <span className="sr-only">Open menu</span>
                  <AiOutlineEllipsis size={26} />
                </Popover.Button>
              </div>
            </div>
            <Menu />
          </div>
        </Popover>
        <Popover.Group
          as="nav"
          className="hidden md:flex gap-8 xl:gap-12 h-12 items-center  justify-center w-full z-20"
        >
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "" : "",
                    "group  rounded-md inline-flex items-center text-sm lg:text-base font-extrabold capitalize gap-1 focus:outline-none focus:ring-0 "
                  )}
                >
                  <span>shop</span>
                  <img src="/down.png" className={`${open && "rotate-180"} w-3 translate-y-0.5`} />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-40 -ml-4 mt-3 transform w-screen max-w-md xl:max-w-lg lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid bg-white gap-6 dark:bg-neutral-800 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {shopLinks.map((item) => (
                          <p
                            key={item}
                            className="-m-3 p-3 flex items-center rounded-full hover:bg-red-400 hover:text-white dark:hover:bg-neutral-900"
                          >
                            <div>
                              <p className="text-base font-medium capitalize">
                                {item}
                              </p>
                            </div>
                          </p>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "" : "",
                    "group  rounded-md inline-flex items-center text-sm font-extrabold lg:text-base capitalize gap-1 focus:outline-none focus:ring-0 "
                  )}
                >
                  <span>shop by occasion</span>
                  <img src="/down.png" className={`${open && "rotate-180"} w-3 translate-y-0.5`} />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-40 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-lg lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid bg-white gap-6 dark:bg-neutral-800 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {occasionLinks.map((item) => (
                          <p
                            key={item}
                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-red-400 hover:text-white dark:hover:bg-neutral-900"
                          >
                            <div>
                              <p className="text-base font-medium capitalize">
                                {item}
                              </p>
                            </div>
                          </p>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "" : "",
                    "group lg:text-base rounded-md inline-flex items-center text-sm font-extrabold capitalize gap-1 focus:outline-none focus:ring-0 "
                  )}
                >
                  <span>locations</span>
                  <img src="/down.png" className={`${open && "rotate-180"} w-3 translate-y-0.5`} />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-40 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-lg lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid bg-white gap-6 dark:bg-neutral-800 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {locationLinks.map((item) => (
                          <p
                            key={item}
                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-red-400 hover:text-white dark:hover:bg-neutral-900"
                          >
                            <div>
                              <p className="text-base font-medium capitalize">
                                {item}
                              </p>
                            </div>
                          </p>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          {staticLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm lg:text-base capitalize font-extrabold   "
            >
              {item.name}
            </a>
          ))}
        </Popover.Group>
      </header>
    </Headroom>
  )
}

export default MyHeader

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }

        handler(event)
      }

      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)

      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}
