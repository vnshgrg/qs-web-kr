import React from "react";
import useTranslation from "next-translate/useTranslation";

const PageContact = () => {
    const { t } = useTranslation("common");
    return (
        <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 lg:px-8 md:mt-16">
            <div className="mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h2 className="text-xl text-gray-800 sm:text-2xl">
                        {t("footer-title-1")}
                    </h2>
                    <div className="mt-3">
                        <p className="text-lg text-gray-500">
                            04541 서울특별시 중구 삼일대로 363(장교동) 장교빌딩
                            710호
                            <br />
                            <span className="text-sm">
                                710 Janggyo Bldg Samildearo 363 Jung-Gu,
                                <br />
                                Seoul, Korea
                            </span>
                        </p>
                    </div>
                    <div className="mt-4">
                        <div className="flex">
                            <div className="text-base text-gray-500">
                                <p className="text-yellow-600">
                                    Monday~Friday 10am-7pm
                                </p>
                                <p className="text-blue-600">
                                    Sunday and Japan national holidays 10am-6pm
                                </p>
                                <p className="text-red-600">
                                    Every Saturday is holiday
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 sm:mt-16 md:mt-0">
                    <h2 className="text-xl text-gray-800 sm:text-2xl">
                        {t("footer-title-2")}
                    </h2>
                    <div className="mt-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                {/* <!-- Heroicon name: outline/phone --> */}
                                <svg
                                    className="h-6 w-6 text-gray-400"
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
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </div>
                            <div className="ml-3 text-base text-gray-500">
                                <p>TEL: 02-755-6321</p>
                                <p className="mt-1">FAX: 02-755-6320</p>
                            </div>
                        </div>
                        <div className="mt-6 flex">
                            <div className="flex-shrink-0">
                                {/* <!-- Heroicon name: outline/mail --> */}
                                <svg
                                    className="h-6 w-6 text-gray-400"
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
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div className="ml-3 text-base text-gray-500">
                                <p>support@qsremit.net</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageContact;
