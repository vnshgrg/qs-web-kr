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
                        個人情報保護規程
                    </span>
                </h1>
                <p className="mt-6 text-xl text-gray-500 leading-8 ">
                    株式会社Ｎ＆Ｐ
                    JAPAN（以下「当社」といいます。）は、「個人情報の保護に関する法律」に基づき、会員の個人情報を下記のように取り扱います。
                </p>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第１条（個人情報の利用目的）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        当社は、お客さまの住所・氏名・郵便番号・電話番号・FAX番号・メールアドレスなどの個人情報をお預かりいたします。これらの個人情報は、次の目的で利用させていただきます。また、明示した目的の範囲を超えて利用する必要が生じた場合には、事前にご連絡の上、同意を得るものとします。
                        <br />
                        <strong>【お預かりした個人情報の利用目的】</strong>
                        <br />
                        当社は、「個人情報の保護に関する法律」を遵守し、当社が行う海外送金サービスに関するご案内・ご提案、契約の締結・履行、アフターサービスの実施、お客さまへの連絡・通信、新しい商品・サービスの開発、及び、お客さまに有益と思われる情報の提供などのために、お客さまの個人情報を利用させていただきます。
                    </li>
                    <li>
                        当社が業務の提供・運営のために、個人情報を入手する場合には、入手する個人情報について、適切に入手したものであるかどうかを提供者へ確認を行い、必要な手続を実施の上で入手するものとします。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第２条（個人情報の保管）
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        当社は、会員情報、会員のマーケティングに関する意向及び会員の取引履歴を、法令等に従い、情報の取得目的に必要な期間内に限り、保管します。
                    </li>
                    <li>
                        当該保存期間内に会員が新たな取引を行わない場合には、会員情報及び会員のマーケティングに関する意向に関する情報は削除されます。
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第３条（個人情報の委託）
                </p>
                <p className="mt-6 text-gray-500">
                    当社は、業務を円滑に遂行するために、業務の一部を第三者に委託する場合がありますが、業務の委託に伴い、個人情報を預託する場合には、できる限り範囲を限定するようにします。また、当社の定める基準に基づき個人情報を適正に取り扱っているかどうかについて、定期的に確認します。なお、現時点での委託先は、次のとおりです。
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>BRAC Bank Limited (所在国：バングラデシュ)</li>
                    <li>GLOBAL IME BANK LIMITED（所在国：ネパール）</li>
                    <li>HIMALAYA BANK LIMITED（所在国：ネパール）</li>
                    <li>NNP KOREA（所在国：韓国）</li>
                    <li>THE BANK OF PUNJAB (所在国：パキスタン)</li>
                    <li>
                        SACOMBANK REMITTANCE EXPRESS LIMITED
                        COMPANY（所在国：ベトナム）
                    </li>
                    <li>TRANGLO SDN. BHD（所在国：マレーシア）</li>
                    <li>WO TRANSFER(HK) LIMITED（所在国：香港）</li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第４条（個人情報の第三者提供）
                </p>
                <p className="mt-6 text-gray-500">
                    当社は、あらかじめ会員の同意を得ることなく個人情報を第三者に提供することはありません。ただし、以下の場合は除きます。
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>法令に基づく場合</li>
                    <li>
                        人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
                    </li>
                    <li>
                        公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
                    </li>
                    <li>
                        国の機関若しくは地方公共団体、又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼす恐れがあるとき
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    第５条（個人情報に関する開示・訂正の請求）
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        お客様は、当社の定める方法により、法令に定める範囲内で、自らの情報を閲覧及び謄写をすることができます。なお、閲覧又は謄写には当社所定の手数料が必要となります。また、閲覧又は謄写の方法については、当社所定の方法によるものとします。
                    </li>
                    <li>
                        開示請求に伴い取得した個人情報は、開示請求に必要な範囲のみで取り扱うものとし、提出いただいた取引時確認のための書類は、回答終了後速やかに、当社が定める個人情報の廃棄手続により処理します。
                    </li>
                    <li>
                        お客様は、不完全、不正確又は失効した会員情報を訂正、消去又は停止を求めることができます。
                    </li>
                    <li>
                        お客様は、法令に基づき、会員情報の処理に関する特定の状況について（会員情報の処理が本サービスを完了するために必要な場合を除きます）、正当な理由がある場合には異議を述べることができます。
                    </li>
                    <li>
                        第１項、第３項及び第４項に定める権利を行使される場合、又は当社から以降のご案内を受領することを希望されない場合には、当社までご連絡下さい。
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
