import React from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import PageLayout from "../../app/layout/PageLayout";
import { PageContact, SeeAllBranch } from "../../app/components";

const Component = (props) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>About us - {t("site-name")}</title>
      </Head>
      <div className="text-lg max-w-prose mx-auto">
        <h1>
          <span className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
            {t("title-about")}
          </span>
        </h1>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-8 sm:mt-12">
          <div className="px-4 py-5 bg-primary sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-white">
              {t("title-company-profile")}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-yellow-100">
              QSRemit Korea
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  <p>회사 이름</p>
                  <p>Company Name</p>
                </dt>
                <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                  <p>(주)엔앤피코리아</p>
                  <p>N&amp;P KOREA Co., Ltd. </p>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  <p>본점</p>
                  <p>Head office</p>
                </dt>
                <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                  <p>
                    04541 서울특별시 중구 삼일대로 363(장교동) 장교빌딩 710호
                  </p>
                  <p>710 Janggyo Bldg Samildearo 363 Jung-Gu, Seoul, Korea</p>
                  <p className="mt-2">TEL: 02-755-6321</p>
                  <p>FAX: 02-755-6320</p>
                  <p>support@qsremit.net</p>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  <p>事業内容</p>
                  <p>Service</p>
                </dt>
                <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                  <p>국제 송금 서비스</p>
                  <p className="text-xs">(소액해외송금업 등록번호 2017-10호)</p>
                  <p>International Money Transfer</p>
                  <p className="text-xs">(License Number 2017-10)</p>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  <p>설립</p>
                  <p>Established</p>
                </dt>
                <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                  <p>2016년 2월 19일</p>
                  <p>
                    19<sup>th</sup> February, 2016
                  </p>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  <p>자본금</p>
                  <p>Capital</p>
                </dt>
                <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                  <p>1,900,000,000원</p>

                  <p>KRW 1,900,000,000</p>
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