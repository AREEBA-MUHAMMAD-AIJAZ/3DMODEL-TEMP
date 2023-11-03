"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-8 py-4 font-serif font-bold">
      <nav className="flex justify-between items-center">
          <h1>MENU</h1>
            <ul className="lg:flex hidden gap-5 text-sm items-center">
                <li>NEW TRAILER</li>
                <li>ABOUT PLOT</li>
                <li>CAST</li>
                <li> 
                    <img src="/bmwicon.webp" alt="icon" className="w-[70px]"/> 
                </li>
                <li>GHOSTBUSTERS</li>
                <li>EQUIPMENT </li>
                <li>MEMS</li>
            </ul>
        <div>
          WHO YOU <br /> GONNA CALL
        </div>
        

        
      </nav>

      {/* <hr className="border-black" /> */}
      {/* modal */}
      {/* <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
        

              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                         
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>

                           <div className="mt-96">

                              <a href="#" className="p-5 mt-10"> HOME </a>
                              <hr className="w-40 border-t-2 border-black m-5"  />

                              <a href="#"  className="p-5" >PAGES </a>
                              <hr className="w-40 border-t-2 border-black m-5"  />

                             <a href="#" className="p-5" > SHOP </a>
                              <hr className="w-40 border-t-2 border-black m-5"  />

                             <a href="#" className="p-5" > BLOG </a>
                              <hr className="w-40 border-t-2 border-black m-5"  />

                             <a href="#" className="p-5" > VIDEO </a>
                              <hr className="w-40 border-t-2 border-black m-5"  />

                             <a href="#" className="p-5" > NEW </a>
                              <hr className="w-40 border-t-2 border-black m-5"  />

                            </div> 


                          </div>

                   
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
        </Dialog>
      </Transition.Root> */}
    </div>
  );
};
export default Navbar;
 