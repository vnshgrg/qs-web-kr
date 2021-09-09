import React from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import PageLayout from '../../app/layout/PageLayout';
import { PageContact, SeeAllBranch } from '../../app/components';

const Component = (props) => {
    const { t } = useTranslation('common');

    return (
        <>
            <Head>
                <title>About us - {t('site-name')}</title>
            </Head>
            <div className="text-lg max-w-prose mx-auto">
                <h1>
                    <span className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
                        {t('title-about')}
                    </span>
                </h1>

                <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-8 sm:mt-12">
                    <div className="px-4 py-5 bg-primary sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-white">
                            {t('title-company-profile')}
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-yellow-100">
                            QSRemit Japan
                        </p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-900">
                                    <p>会社名</p>
                                    <p>Company Name</p>
                                </dt>
                                <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                                    <p>株式会社 N&P JAPAN</p>
                                    <p>N&P JAPAN Co., Ltd.</p>
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-900">
                                    <p>本社</p>
                                    <p>Head office</p>
                                </dt>
                                <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                                    <p>〒169-0073東京都新宿百人町2-20-2</p>
                                    <p>
                                        2-20-2 Hyakunin-Cho, Shinjuku-Ku, Tokyo,
                                        Japan (169-0073)
                                    </p>
                                    <p className="mt-2">TEL: 03-5937-6321</p>
                                    <p>FAX:03-5937-6320</p>
                                    <p>support@qsremit.net</p>
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-900">
                                    <p>事業内容</p>
                                    <p>Service</p>
                                </dt>
                                <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                                    <p>資金移動業</p>
                                    <p className="text-xs">
                                        (関東財務局長第00033号)
                                    </p>
                                    <p>International money transfer</p>
                                    <p className="text-xs">
                                        (Kanto Regional Finance Bureau of Japan
                                        00033)
                                    </p>
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-900">
                                    <p>設立</p>
                                    <p>Established</p>
                                </dt>
                                <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                                    <p>2012年7月20日</p>
                                    <p>
                                        20<sup>th</sup>July, 2012
                                    </p>
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-900">
                                    <p>資本金</p>
                                    <p>Capital</p>
                                </dt>
                                <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                                    <p>60,000,000円</p>

                                    <p>JPY 60,000,000</p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <h2 className="mt-14">
                    <span className="mt-2 block text-2xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-3xl">
                        Message from CEO
                    </span>
                </h2>
                <p className="mt-6 text-primary leading-8 text-2xl font-medium ">
                    顧客の信頼に堅実に応える海外送金専門会社
                </p>
                <p className="mt-4 text-gray-500 leading-8 ">
                    2013年10月に韓国送金を始め海外送金サービスを開始し、お客様の信頼と応援により現在に至りました。
                    経験が豊富なスタッフと一緒に、顧客の皆様の満足と安心を得られる海外送金サービスを提供してまいります。
                    これからも皆様のなお一層のご支援を心よりお願い申し上げます。
                </p>
                <SeeAllBranch />
            </div>

            <PageContact />
        </>
    );
};

const About = (props) => (
    <PageLayout>
        <Component {...props} />
    </PageLayout>
);

// About.getInitialProps = async (ctx) => {
//     return true;
// };

export default About;
