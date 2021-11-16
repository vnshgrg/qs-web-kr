import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { SvgFlag } from "../../config/countries";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

const languageNames = {
    en: "English",
    jp: "日本語",
    np: "नेपाली",
    kr: "한국어",
    bd: "বাংলা",
    pk: "اردو",
};

const LanguageSwitcher = () => {
    const router = useRouter();

    const handleLocaleChange = (newLocale) => {
        router.push(router.pathname, router.asPath, {
            locale: newLocale,
        });
    };

    const renderName = (locale) => {
        let code;
        if (locale === "en") {
            code = "USA";
        } else if (locale === "jp") {
            code = "JPN";
        } else if (locale === "np") {
            code = "NPL";
        } else if (locale === "kr") {
            code = "KOR";
        } else if (locale === "pk") {
            code = "PAK";
        } else if (locale === "bd") {
            code = "BGD";
        }

        return (
            <div className="flex items-center">
                <span className="inline-block mr-2">
                    <SvgFlag code={code} />
                </span>
                {languageNames[locale]}
            </div>
        );
    };

    return (
        <div className="mr-1 md:mr-0 text-right z-10">
            <a
                href="https://jp.qsremit.net"
                target="_blank"
                className="inline-flex justify-center items-center px-3 py-2 mr-3 text-sm text-gray-500 md:text-gray-100 bg-black rounded-md bg-opacity-10 hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
                To QSRemit Japan <ArrowSmRightIcon className="w-5 h-5" />
            </a>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 md:text-white bg-black rounded-md bg-opacity-10 hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        {renderName(router.locale)}
                        <ChevronDownIcon
                            className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-0 ring-transparent ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 space-y-1">
                            {router.locales.map((locale, index) => {
                                const active =
                                    router.locale === locale ? true : false;
                                return (
                                    <Menu.Item key={index.toString()}>
                                        <>
                                            <button
                                                onClick={() =>
                                                    handleLocaleChange(locale)
                                                }
                                                className={`${
                                                    active
                                                        ? "bg-blue-800 text-white"
                                                        : "text-gray-700 hover:bg-blue-100"
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                            >
                                                {renderName(locale)}
                                            </button>
                                        </>
                                    </Menu.Item>
                                );
                            })}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export default LanguageSwitcher;
