import React from 'react';
import Link from 'next/link';
import RateCalculator from '../RateCalculator';
import useTranslation from 'next-translate/useTranslation';

const Hero = () => {
    const { t } = useTranslation('hero');
    return (
        <div className="mb-0 my-16 sm:my-24">
            <div className="mx-auto max-w-7xl">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-start">
                        <div>
                            <h1 className="mt-4 text-4xl leading-none font-semibold text-white sm:mt-5">
                                <span className="text-yellow-100 font-normal text-3xl md:block">
                                    {t('title1')}
                                </span>{' '}
                                <span className="mt-4 block">
                                    {t('title2')}
                                </span>
                            </h1>
                            <p className="mt-5 text-base text-yellow-50 sm:mt-6 sm:text-xl lg:text-lg xl:text-xl">
                                {t('description')}
                            </p>
                            <div className="mt-12 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                                <div className="flex flex-wrap items-start">
                                    <div className="flex w-full sm:w-auto">
                                        <a
                                            href="https://apps.apple.com/jp/app/qsremit-japan/id1466724211"
                                            target="_blank"
                                            className="bg-gradient-to-bl from-blue-600 to-blue-700 text-white text-lg font-bold tracking-wide block px-6 py-3 rounded-lg leading-tight hover:bg-blue-700 shadow-lg">
                                            <span className="block text-sm font-normal text-blue-200 leading-tight">
                                                {t('download-app')}
                                            </span>
                                            {t('for-ios')}
                                        </a>
                                    </div>
                                    <div className="flex w-full sm:w-auto pl-0 pt-4 sm:pl-4 sm:pt-0">
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.nnp.qsjapan"
                                            target="_blank"
                                            className="bg-gradient-to-bl from-blue-600 to-blue-700 text-white text-lg font-bold tracking-wide block px-6 py-3 rounded-lg leading-tight hover:bg-blue-700 shadow-lg">
                                            <span className="block text-sm font-normal text-blue-200 leading-tight">
                                                {t('download-app')}
                                            </span>
                                            {t('for-android')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p>
                                <Link href="/TrackTransaction">
                                    <a
                                        href="#"
                                        className="mt-8 text-sm text-yellow-50 tracking-wide sm:mt-10 border border-yellow-500 inline-block px-5 py-2 rounded-full font-semibold hover:text-white hover:bg-yellow-600">
                                        {t('track-transaction')}
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
