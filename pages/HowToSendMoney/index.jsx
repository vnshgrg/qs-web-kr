import React from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import PageLayout from '../../app/layout/PageLayout';
import { siteName } from '../../app/config';
import { PageContact, SeeAllBranch } from '../../app/components/';

const Component = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <Head>
                <title>How to send money - {siteName}</title>
            </Head>
            <div className="text-lg max-w-prose mx-auto">
                <h1>
                    <span className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
                        {t('title-send-money')}
                    </span>
                </h1>

                <div className="bg-white overflow-hidden shadow rounded-lg divide-y mt-8">
                    <div className="">
                        <div className="bg-gray-400 aspect-w-16 aspect-h-9">
                            &nbsp;
                        </div>
                    </div>
                    <div className="px-4 py-4 sm:px-6 flex flex-col sm:flex-row items-center">
                        <span className="text-gray-700 text-base leading-tight text-center sm:text-left sm:flex-1">
                            {t('title-send-money-app')}
                        </span>
                        <a
                            href="#"
                            className="mt-3 sm:mt-0 text-sm px-4 py-2 bg-primary text-white font-medium rounded hover:bg-yellow-600 inline-flex items-center">
                            <svg
                                className="h-5 w-5 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                            </svg>
                            Play on youtube
                        </a>
                    </div>
                </div>
                <SeeAllBranch />
            </div>
            <PageContact />
        </>
    );
};

const HowToSendMoney = (props) => (
    <PageLayout>
        <Component {...props} />
    </PageLayout>
);

// HowToSendMoney.getInitialProps = async (ctx) => {
//     console.log(ctx);
// };

export default HowToSendMoney;
