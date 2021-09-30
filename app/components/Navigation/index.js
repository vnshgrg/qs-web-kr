import React, { useState } from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { Transition } from "@headlessui/react";
import { LanguageSwitcher } from "..";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, lang } = useTranslation("navigation");
    return (
        <>
            <nav
                className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                aria-label="Global"
            >
                <div className="flex items-center flex-1">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <Link href="/">
                            <a>
                                <span className="sr-only">QS Remit</span>
                                <img
                                    className="h-10 w-auto sm:h-12"
                                    src="/qs-logo.svg"
                                    alt="QSRemit"
                                />
                            </a>
                        </Link>
                        <div className="-mr-2 flex items-center md:hidden">
                            <button
                                onClick={() => setIsOpen(true)}
                                type="button"
                                className="bg-blue-700 rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {/* <!-- Heroicon name: outline/menu --> */}
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="hidden space-x-10 md:flex md:ml-10">
                        <Link href="/About">
                            <a className="font-medium text-blue-100 hover:text-white">
                                {t("about")}
                            </a>
                        </Link>
                        <Link href="/HowToSendMoney">
                            <a className="font-medium text-blue-100 hover:text-white">
                                {t("how-to-send")}
                            </a>
                        </Link>
                        <Link href="/HowToRegister">
                            <a className="font-medium text-blue-100 hover:text-white">
                                {t("how-to-register")}
                            </a>
                        </Link>
                        <Link href="/Branches">
                            <a className="font-medium text-blue-100 hover:text-white">
                                {t("branches")}
                            </a>
                        </Link>
                        <Link href="/notice">
                            <a className="font-medium text-yellow-100 hover:text-white">
                                {t("notices")}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <LanguageSwitcher />
                </div>
            </nav>
            <div>
                <Transition
                    show={isOpen}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10">
                        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5  ">
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <span className="text-3xl tracking-normal font-normal text-gray-400 sm:leading-normal">
                                        <span className="text-blue-600 font-bold">
                                            QS
                                        </span>
                                        Remit
                                    </span>
                                </div>
                                <div className="-mr-2">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    >
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        {/* <!-- Heroicon name: outline/x --> */}
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Link href="/About">
                                    <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                        {t("about")}
                                    </a>
                                </Link>
                                <Link href="/HowToSendMoney">
                                    <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                        {t("how-to-send")}
                                    </a>
                                </Link>
                                <Link href="/HowToRegister">
                                    <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                        {t("how-to-register")}
                                    </a>
                                </Link>
                                <Link href="/Branches">
                                    <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                        {t("branches")}
                                    </a>
                                </Link>
                                <Link href="/notice">
                                    <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                        {t("notices")}
                                    </a>
                                </Link>

                                <LanguageSwitcher />
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </>
    );
};

export default Navigation;
