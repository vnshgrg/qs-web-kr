import React from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import PageLayout from '../../app/layout/PageLayout';
import { siteName } from '../../app/config';
import { PageContact, Branch } from '../../app/components';

const branches = [
    {
        name: 'ASOKA SPICE',
        location: 'Kasumigaseki (Saitama)',
        details: [
            '〒350-1103 埼玉県川越市霞ヶ関 1-3-15 霞ヶ関ビル104',
            'Saitama-Ken Kawagoe-Shi Kasumigaseki 1-3-15, Kasumigaseki bldg. 104 (350-1103)',
            'TEL: 0492-32-2771'
        ]
    },
    {
        name: 'ASOKA SPICE KAMIFUKUOKA',
        location: 'Kamifukuoka (Saitama)',
        details: [
            '〒356-0004 埼玉県ふじみ野市上福岡 1-6-27 2F',
            'Saitama-Ken Fujimino-Dhi Kamifukuoka 1-6-27 Pure bldg.2F (356-0004)',
            'TEL: 070-3521-3222'
        ]
    },
    {
        name: 'KASTHAMANDAP CURRY HOUSE',
        location: 'Okinawa',
        details: [
            '〒901-2125 沖縄県浦添市仲西 1-3-26',
            'Okinawa-Ken Urasoe-Shi Nakanishi 1-3-26 (901-2125)',
            'TEL: 098-963-4949'
        ]
    },
    {
        name: 'DAJU BHAI MART',
        location: 'Hakata (Fukuoka)',
        details: [
            '〒812-0044 福岡県福岡市博多区千代 1-29-21 ハイコートA号室',
            'Fukuoka-Ken Fukuoka-Shi Hakata-Ku Chiyo 1-29-21 High Court A (812-0044)',
            'TEL: 080-7621-6321 (Narayan)'
        ]
    },
    {
        name: 'SAHARA',
        location: 'Funabashi (Chiba)',
        details: [
            '〒273-0003 千葉県船橋市宮本 6-14-7 関ビル2F',
            'Chiba-Ken Funabashi-Shi Miyamoto 6-14-7 Seki Bldg. 2F (273-0003)',
            'TEL: 0474-11-7385'
        ]
    },
    {
        name: 'FEWA ASIAN HALAL FOODS AND GOODS',
        location: 'Tsurumi (Kanagawa)',
        details: [
            '〒230-0001 神奈川県横浜市鶴見区矢向 5-4-21 ハイム平松 101',
            'Kanagawa-Ken Yokohama-Shi Tsurumi-Ku Yakou 5-4-21 Haimu Hiramatsu 101 (230-0001)',
            'TEL: 080-3972-4684'
        ]
    },
    {
        name: 'NAMASTE INDIAN RESTAURANT & BAR',
        location: 'Oyama (Tochigi)',
        details: [
            '〒323-0022 栃木県大山市駅東通り 2-40-32 1F',
            'Tochigi-Ken Oyama-Shi Ekihigashidori 2-40-32 1F (323-0022)',
            'TEL: 080-3082-6183'
        ]
    },
    {
        name: 'AARYAN ASIAN RESTAURANT & BAR',
        location: 'Tokorozawa (Saitama)',
        details: [
            '〒359-0041 埼玉県所沢市中新井 2-211-7',
            'Saitama-Ken Tokorozawa-Shi Nakaarai 2-211-7 (359-0041)',
            'TEL: 04-2001-1008'
        ]
    },
    {
        name: 'SUNITA KITCHEN & BAR',
        location: 'Gunma',
        details: [
            '〒370-0532 群馬県邑楽郡大泉町坂田 2-12-6',
            'Gunma-Ken Oragun Oizumi Machi Sakada 2-12-6 (370-0532)',
            'TEL: 080-4880-3355'
        ]
    },
    {
        name: 'SUPA DEURALI',
        location: 'Gunma',
        details: [
            '〒370-0518 群馬県邑楽郡大泉町城之内 4-5-21',
            'Gunma-Ken Oragun Oizumi Machi Shironouchi 4-5-21 (370-0518)',
            'TEL: 070-4166-0457'
        ]
    },
    {
        name: 'SMILE FOOD',
        location: 'Fukuoka',
        details: [
            '〒802-0016 福岡県北九州市小倉北区宇佐町 2-8-8 大西ビル201号',
            'Fukuoka-Ken Kitakyusyu-Shi Kokurakita-Ku Usamachi 2-8-8 Onishi Bldg. 201 (802-0016)',
            'TEL: 093-967-9399'
        ]
    },
    {
        name: 'KUMAMOTO HALAL',
        location: 'Kumamoto',
        details: [
            '〒862-0950 熊本県熊本市中央区水前寺 1-10-1 101',
            'Kumamoto-Ken Kumamoto-Shi Chou-Ku Suizenji 1-10-1 101 (862-0950)',
            'TEL: 0962-82-8433'
        ]
    },
    {
        name: 'ARAKAWA',
        location: 'Arakawa (Tokyo)',
        details: [
            '〒116-0002 東京都荒川区荒川 3-60-10 キムチの高麗',
            'Tokyo-To, Arakawa-Ku, Arakawa 3-60-10 Kimchi No Koryo (116-0002)',
            'TEL: 03-3801-0003'
        ]
    },
    {
        name: 'OSAKA',
        location: 'Osaka',
        details: [
            '〒542-0082 大阪府大阪市中央区島之内 2-3-4 サンライズハイツ 1F',
            'Osaka-Shi, Chuo-Ku, Shimanouchi 2-3-4 Sunrise Heights 1F (542-0082)',
            'TEL: 06-6212-4469'
        ]
    },
    {
        name: 'TSUKUBA',
        location: 'Ibaraki',
        details: [
            '〒305-0034 茨城県つくば市小野崎 1736-2',
            'Ibaraki-Ken, Tsukuba-Shi, Onozaki 1736-2 (305-0034)',
            'TEL: 080-4070-5339'
        ]
    },
    {
        name: 'AHN',
        location: 'Shinjuku (Tokyo)',
        details: [
            '〒160-0021 東京都新宿区歌舞伎町 2-41-12 泉ビル 301号',
            'Tokyo-To, Shinjuku-Ku, Kabukicho 2-41-12 Izumi Biru 301 (160-0021)',
            'TEL: 090-8803-2289'
        ]
    },
    {
        name: 'VERY G',
        location: 'Ueno (Tokyo)',
        details: [
            '〒110-0005 東京都台東区上野 ５-25-4',
            'Tokyo-To, Taito-Ku, Ueno 5-25-4 (110-0005)',
            'TEL: 080-5088-9664'
        ]
    },
    {
        name: 'MAI TOAN',
        location: 'Ichikawa (Chiba)',
        details: [
            '〒272-0023 千葉県市川市南八幡 4-6-2 高橋ビル 3F',
            'Chiba-ken, Ichikawa-Shi, Minamiyawata 4-6-2 Takahashi Biru 3F (272-0023)',
            'TEL: 080-4888-1368'
        ]
    }
];

const Component = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <Head>
                <title>Branches - {siteName}</title>
            </Head>
            <div className="text-lg max-w-prose mx-auto">
                <h1>
                    <span className="mt-2 block text-3xl leading-8 font-bold tracking-tight text-primary sm:text-4xl">
                        {t('title-branch')}
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
