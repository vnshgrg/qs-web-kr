import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
    const { t } = useTranslation("navigation");
    return (
        <footer className="bg-primary shadow-inner ">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav
                    className="-mx-5 -my-2 flex flex-wrap justify-center"
                    aria-label="Footer"
                >
                    <div className="px-5 py-2">
                        <Link href="/">
                            <a className="text-base text-yellow-100 hover:text-white">
                                {t("home")}
                            </a>
                        </Link>
                    </div>

                    <div className="px-5 py-2">
                        <Link href="/About">
                            <a className="text-base  text-yellow-100 hover:text-white">
                                {t("about")}
                            </a>
                        </Link>
                    </div>

                    <div className="px-5 py-2">
                        <Link href="/HowToSendMoney">
                            <a className="text-base  text-yellow-100 hover:text-white">
                                {t("how-to-send-money")}
                            </a>
                        </Link>
                    </div>

                    <div className="px-5 py-2">
                        <Link href="/HowToRegister">
                            <a className="text-base  text-yellow-100 hover:text-white">
                                {t("how-to-register")}
                            </a>
                        </Link>
                    </div>

                    <div className="px-5 py-2">
                        <Link href="/Branches">
                            <a className="text-base  text-yellow-100 hover:text-white">
                                {t("our-branches")}
                            </a>
                        </Link>
                    </div>

                    <div className="px-5 py-2">
                        <Link href="/">
                            <a className="text-base  text-yellow-100 hover:text-white">
                                {t("notices")}
                            </a>
                        </Link>
                    </div>

                    <div className="px-5 py-2">
                        <Link href="/">
                            <a className="text-base  text-yellow-100 hover:text-white">
                                {t("contact-us")}
                            </a>
                        </Link>
                    </div>
                </nav>

                <nav
                    className="-mx-5 my-2 mt-8 flex flex-wrap justify-center text-sm"
                    aria-label="Footer"
                >
                    <div className="px-5 py-2">
                        <Link href="/Terms01">
                            <a className="text-yellow-100 hover:text-white">
                                {t("kr-terms-01")}
                            </a>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/Terms02">
                            <a className="text-yellow-100 hover:text-white">
                                {t("kr-terms-02")}
                            </a>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/Terms03">
                            <a className="text-yellow-100 hover:text-white">
                                {t("kr-terms-03")}
                            </a>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/Terms04">
                            <a className="text-yellow-100 hover:text-white">
                                {t("kr-terms-04")}
                            </a>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/Terms05">
                            <a className="text-yellow-100 hover:text-white">
                                {t("kr-terms-05")}
                            </a>
                        </Link>
                    </div>
                </nav>
                <nav
                    className="-mx-5 my-2 mt-3 flex flex-wrap justify-center text-sm"
                    aria-label="Footer"
                >
                    <div className="px-3 py-2">
                        <a
                            href="https://www.facebook.com/QS-REMIT-Offical-101234619188092"
                            className="text-yellow-100 hover:text-white"
                        >
                            <svg className="w-10 h-10" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="px-3 py-2">
                        <a
                            href="https://www.instagram.com/qs_remit/"
                            className="text-yellow-100 hover:text-white"
                        >
                            <svg className="w-10 h-10" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                                />
                            </svg>
                        </a>
                    </div>
                </nav>
                <div className="-mx-5 my-2 mt-4 flex flex-wrap justify-center text-sm">
                    <span className="bg-white inline-block py-2 px-4 rounded-lg">
                        <img src="/mosf-kr.png" className="h-16" />
                    </span>
                </div>

                <p className="mt-4 text-center text-base text-yellow-100">
                    &copy; 2021 N&amp;P Korea Co., Ltd. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
