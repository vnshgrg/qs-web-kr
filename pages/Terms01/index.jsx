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
                        反社会的勢力に対する基本方針
                    </span>
                </h1>
                <p className="mt-6 text-xl text-gray-500 leading-8 ">
                    当社は、「コンプライアンスに係る基本的方針等に関する規程」第２条において、反社会的勢力からの企業防衛に関する基本的な姿勢を制定しております。
                </p>
                <p className="mt-6 text-xl text-gray-500 leading-8 border border-gray-200 rounded-lg px-4 py-3">
                    <strong>反社会的勢力からの企業防衛</strong>
                    <br />
                    市民社会の秩序や安全に脅威を与える反社会的勢力とは、毅然とした態度で対決する姿勢を貫き、企業価値を守る。
                </p>
                <p className="mt-6 text-xl text-gray-500 leading-8 ">
                    当社は、この規範を実現するために、「反社会的勢力への対応に関する基本方針」を下記のとおり、宣言いたします。
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        反社会的勢力による不当要求は、代表取締役以下、組織全体で対応します。
                    </li>
                    <li>
                        反社会的勢力による不当要求に対応する従業員の安全を確保します。
                    </li>
                    <li>
                        反社会的勢力による不当要求に備えて、平素から外部の専門機関と緊密な連携関係を構築します。
                    </li>
                    <li>
                        反社会的勢力とは、取引関係を含めて、一切の関係を持ちません。また、反社会的勢力による不当要求は拒絶します。
                    </li>
                    <li>
                        反社会的勢力による不当要求に対しては、民事と刑事の両面から法的対応を行います。
                    </li>
                    <li>
                        反社会的勢力による不当要求が、事業活動上の不祥事や従業員の不祥事を理由とする場合であっても、事案を隠ぺいするための裏取引を絶対行いません。
                        反社会的勢力への資金提供は、絶対に行いません。
                    </li>
                </ol>
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
