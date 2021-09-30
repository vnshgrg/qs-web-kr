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
                <title>{t("site-name")}</title>
            </Head>
            <div className="text-lg max-w-prose mx-auto">
                <h1>
                    <span className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
                        민원 및 분쟁 처리
                    </span>
                </h1>
                <p className="mt-6 text-xl text-gray-500 leading-8 font-bold">
                    * 전화 접수
                </p>
                <p className="mt-6 text-xl text-gray-500 leading-8 border border-gray-200 rounded-lg px-4 py-3">
                    <strong>영어/네팔어:</strong>070-4849-6320 / 010-2952-6321
                    <br />
                    <strong>파키스탄어:</strong>070-4367-6320 / 010-4395-6321
                    <br />
                    <strong>방글라데시어:</strong>070-4367-6320 / 010-4367-6321
                    <br />
                    <strong>한국어:</strong>02-755-6321  
                    <br />
                    <strong>*FAX 접수:</strong>02-755-6320 
                    <br />
                    <strong>*영업점 내방 접수:</strong>동대문점 / 안산점
                </p>
                <p className="mt-6 text-xl text-gray-500 leading-8  font-bold">
                    민원 및 분쟁 처리 절차
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        민원 및 분쟁 처리 담당자: 민원 및 분쟁 접수 및 처리 등
                        일련의 처리 담당자는 고객서비스팀(CS team)의 각 시장 별
                        담당 매니저들로 지정한다.
                    </li>
                    <li>
                        민원 및 분쟁 처리 수집: 고객은 엔앤피코리아의 영업시간에
                        지원 언어별 고객서비스 센터 문의 전화, FAX 및 영업점
                        내방으로 민원 및 분쟁을 제기할 수 있다.
                    </li>
                    <li>
                        민원 및 분쟁 처리 반영: 제기 받은 민원 및 분쟁은 각 시장
                        별 담당 매니저들이 정보접근 권한의 범위내에서 웹서버
                        관리자 계정을 통해 처리한다. 단, 정보접근 권한이 없는
                        범위의 민원을 처리해야 할 경우, 시스템 정보접근 권한이
                        있는 최고기술이사(CTO)가 처리한다.
                    </li>
                    <li>
                        민원 및 분쟁 처리 결과 통보: 해당 민원 및 분쟁 처리의
                        담당 매니저는 민원 및 분쟁 처리 결과에 대해서 민원 및
                        분쟁을 제기한 이용자에게 서면 및 전자적 수단으로 통보를
                        하며, 신청자가 회사에게 결과를 통보 받은 시점을 민원 및
                        분쟁 처리 종료로 간주한다.
                    </li>
                    <li>
                        이의 제기
                        <br />
                        주식회사 엔앤피코리아가 제시하는 민원 및 분쟁처리결과에
                        동의하지 않으시는 경우 민원 및 분쟁 신청인은 분쟁조정을
                        위해 금융감독원 또는 소비자보호원에서 금융민원 상담 및
                        분쟁조정을 신청하거나 법원에 소송을 제기할 수 있습니다.
                        <ul>
                            <li>- 금융감독원 금융민원상담: 국번없이 1332</li>
                            <li>- 한국소비자보호원: 국번없이 1372</li>
                        </ul>
                    </li>
                    <li>
                        전자금융거래이용 약관,소액해외송금서비스약관,
                        개인정보처리방침 및 오픈뱅킹서비스약관의 철회는 하기의
                        연락처에서 철회 할 수 있다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 leading-8 font-bold">
                    * 전화 접수 
                </p>
                <p className="mt-6 text-gray-500">
                    <strong>영어/네팔어:</strong> 070-4849-6320 / 010-2952-6321
                    <br />
                    <strong>파키스탄어:</strong> 070-4367-6320 / 010-4395-6321
                    <br />
                    <strong>방글라데시어:</strong> 070-4367-6320 / 010-4367-6321
                    <br />
                    <strong>한국어:</strong> 02-755-6321  
                    <br />
                    <strong>*FAX 접수:</strong> 02-755-6320 
                    <br />
                    <strong>*영업점 내방 접수:</strong> 동대문점 / 안산점
                    <br />
                    <strong>*mail:</strong> support@qsremit.net
                </p>
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
