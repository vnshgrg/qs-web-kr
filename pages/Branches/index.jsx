import React from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import PageLayout from "../../app/layout/PageLayout";
import { siteName } from "../../app/config";
import { PageContact, Branch } from "../../app/components";

const branches = [
    {
        name: "HEAD OFFICE",
        location: "",
        details: [
            "04541 서울특별시 중구 삼일대로 363(장교동) 장교빌딩 710호",
            "710 Jang gyo Bldg 363 Samil-daero, Myeong-dong Jung-gu  Seoul, Korea",
            "TEL: 02-755-6321",
        ],
    },
    {
        name: "Dongdaemun Branch",
        location: "",
        details: [
            "",
            "151-1 Changshin-dong Jongro-gu Seoul, Korea",
            "TEL: 010-2952-6321",
        ],
    },
    {
        name: "Ansan Branch",
        location: "",
        details: [
            "",
            "41 Damunhua2gil Ansan-si Gyeonggi-do",
            "TEL: 010-4395-6321 / 010-4367-6321 ",
        ],
    },
];

const Component = () => {
    const { t } = useTranslation("common");
    return (
        <>
            <Head>
                <title>Branches - {siteName}</title>
            </Head>
            <div className="text-lg max-w-prose mx-auto">
                <h1>
                    <span className="mt-2 block text-3xl leading-8 font-bold tracking-tight text-primary sm:text-4xl">
                        {t("title-branch")}
                    </span>
                </h1>

                <div className="py-16">
                    <ul className="divide-y divide-gray-200">
                        {branches.map((branch, index) => (
                            <Branch
                                key={index.toString()}
                                number={(index + 1).toString()}
                                branch={branch}
                            />
                        ))}
                    </ul>
                </div>
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
//     console.log(ctx);
// };

export default About;
