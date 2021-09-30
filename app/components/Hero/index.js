import React from "react";
import Link from "next/link";
import RateCalculator from "../RateCalculator";
import useTranslation from "next-translate/useTranslation";

const Hero = () => {
    const { t } = useTranslation("hero");
    return (
        <div className="mb-0 my-16 sm:my-24">
            <div className="mx-auto max-w-7xl">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-start">
                        <div>
                            <h1 className="mt-4 text-4xl leading-none font-semibold text-white sm:mt-5">
                                <span className="text-yellow-100 font-normal text-3xl md:block">
                                    {t("title1")}
                                </span>{" "}
                                <span className="mt-4 block">
                                    {t("title2")}
                                </span>
                            </h1>
                            <p className="mt-5 text-base text-yellow-50 sm:mt-6 sm:text-xl lg:text-lg xl:text-xl">
                                {t("description")}
                            </p>
                            <div className="mt-12 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                                <div className="flex flex-wrap items-start">
                                    <div className="flex w-full sm:w-auto">
                                        <a
                                            href="https://apps.apple.com/kr/app/qsremit/id1308897297"
                                            target="_blank"
                                            className="flex items-center bg-gradient-to-bl from-blue-600 to-blue-700 text-white text-lg font-bold tracking-wide px-6 py-3 pl-3 rounded-lg leading-tight hover:bg-blue-700 shadow-lg"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 50 50"
                                                className="fill-current w-8 h-8 mr-3"
                                            >
                                                <path d="M14 3.99c-5.511 0-10 4.489-10 10v22c0 5.512 4.489 10 10 10h22c5.511 0 10-4.488 10-10v-22c0-5.511-4.489-10-10-10H14zm0 2h22c4.43 0 8 3.57 8 8v22c0 4.43-3.57 8-8 8H14c-4.43 0-8-3.57-8-8v-22c0-4.43 3.57-8 8-8zm8.572 5.903A2.001 2.001 0 0 0 20.72 14.9l1.811 3.09L16.666 28H12a2 2 0 0 0 0 4h15.412a3.328 3.328 0 0 0-.379-2.355l-.004-.004A4.911 4.911 0 0 0 25.48 28h-4.177l7.676-13.102a2 2 0 0 0-3.452-2.021l-.677 1.156-.678-1.156a1.998 1.998 0 0 0-1.6-.984zm5.739 8.048-.827 1.373a4.99 4.99 0 0 0-.107 4.942l6.297 10.746c.372.636 1.04.988 1.726.988a1.998 1.998 0 0 0 1.723-3.01L35.377 32H38a2 2 0 0 0 0-4h-4.967l-4.722-8.059zM14.625 34.004a4.895 4.895 0 0 0-1.613.232l-.446.758a2 2 0 1 0 3.452 2.022l1.076-1.836a3.334 3.334 0 0 0-2.463-1.176h-.006z" />
                                            </svg>
                                            <div>
                                                <span className="block text-sm font-normal text-blue-200 leading-tight">
                                                    {t("download-app")}
                                                </span>
                                                {t("for-ios")}
                                            </div>
                                        </a>
                                    </div>
                                    <div className="flex w-full sm:w-auto pl-0 pt-4 sm:pl-4 sm:pt-0">
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.drminside.qsmobile"
                                            target="_blank"
                                            className="flex items-center bg-gradient-to-bl from-blue-600 to-blue-700 text-white text-lg font-bold tracking-wide px-6 py-3 pl-3 rounded-lg leading-tight hover:bg-blue-700 shadow-lg"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                className="fill-current w-8 h-8 mr-3"
                                            >
                                                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49Z" />
                                            </svg>
                                            <div>
                                                <span className="block text-sm font-normal text-blue-200 leading-tight">
                                                    {t("download-app")}
                                                </span>
                                                {t("for-android")}
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p>
                                <Link href="/TrackTransaction">
                                    <a
                                        href="#"
                                        className="mt-8 text-sm text-yellow-50 tracking-wide sm:mt-10 border border-yellow-500 inline-block px-5 py-2 rounded-full font-semibold hover:text-white hover:bg-yellow-600"
                                    >
                                        {t("track-transaction")}
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                    <RateCalculator />
                </div>
            </div>
        </div>
    );
};

export default Hero;
