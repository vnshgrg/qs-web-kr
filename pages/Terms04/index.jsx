import React from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import PageLayout from "../../app/layout/PageLayout";
import { PageContact } from "../../app/components";

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
                        소액해외송금서비스 이용 약관
                    </span>
                </h1>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제1조(적용범위)
                </p>
                <p className="mt-6 text-gray-500">
                    이 약관은 주식회사 엔앤피코리아(이하 ‘회사’라 합니다.)와
                    ‘회사가 제공하는「소액해외송금서비스」(이하 ‘서비스’라
                    합니다.)를 이용하는 고객’(이하 ‘고객’이라 합니다.) 사이에
                    적용됩니다.
                </p>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제2조(실명거래)
                </p>
                <p className="mt-6 text-gray-500">
                    고객은 회사와의 소액해외송금거래시 실명으로 거래하여야
                    하며, 회사가 실명확인을 위해 고객에게 실명확인증표 등 필요한
                    자료를 요구할 경우 이에 따르기로 합니다.
                </p>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제3조(송금한도)
                </p>
                <p className="mt-6 text-gray-500">
                    고객이 본 서비스를 통해 송금할 수 있는 한도는 다음 각 호와
                    같습니다.
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>건당 지급 및 수령 한도는 각각 미화 5천달러</li>
                    <li>연간 지급 및 수령 누계 한도는 각각 미화 5만달러</li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제4조(지정계좌)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사는 ‘소액해외송금업무에 사용할 계좌인 것으로
                        소액해외송금업 등록(변경등록 포함) 당시 지정한
                        회사명의의 금융회사개설 계좌’(이하 ‘지정계좌’라
                        합니다.)를 통해서만 고객에게 자금을 지급하거나
                        고객으로부터 자금을 수령할 수 있으며, 지정계좌는 아래와
                        같습니다.
                        <br />
                        농협은행 301-0187-4671-31
                        <br />
                        신한은행 140-011-883602
                    </li>
                    <li>
                        회사는 제1항의 지정계좌에 관한 내용을 회사 홈페이지 등에
                        게시하고 이를 최신 내용으로 관리합니다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제5조(수수료)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사가 고객으로부터 본 서비스 이용신청을 받을 경우
                        고객이 부담하는 수수료(이하 ‘수수료’라 합니다.)는
                        별지1와 같습니다.
                    </li>
                    <li>
                        회사는 수수료에 관한 사항을 회사 홈페이지 등에 게시하고
                        이를 최신 내용으로 관리 합니다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제6조(적용환율)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사가 고객으로부터 본 서비스 이용신청을 받을 경우
                        고객에게 적용할 환율은,
                        <br />
                        송금시는 신한은행의 KRW/USD T.T.S환율을
                        기준으로 +15원에서-15원 사이로 결정됩니다.
                        <br />
                        수령시는 신한은행의 KRW/USD T.T.B환율을
                        기준으로 -15원에서+15원 사이로 결정됩니다.
                    </li>
                    <li>
                        회사는 고객에게 적용할 환율에 관한 사항을 회사 홈페이지
                        등에 게시하고 이를 최신 내용으로 관리 합니다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제7조(지급,수령금액)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사는 본 서비스를 신청한 고객이 지정계좌에 입금할 경우
                        수수료를 차감한 금액을 외화로 환전하여 고객이 요청한
                        수취인에게 송금처리를 합니다.
                    </li>
                    <li>
                        회사가 고객으로부터 본 서비스 이용신청을 받은 경우
                        고객이 지급,수령하는 자금의 원화표시 및 외화표시 금액에
                        관한 사항은 전자문서 또는 직접교부 합니다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제8조(소요기간)
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사가 고객으로부터 본 서비스 이용신청을 받은 경우
                        고객에게 지급 또는 수령에 소요되는 예상 기간에 관한
                        사항은 고객에게 신청을 받은 후 수령인에게 지급되기까지의
                        소요시간은 10분에서 2일(각국의 협력회사 영업일 기준)이
                        소요됩니다. 외국협력업체로부터 수령의 신청을 받은 후
                        수령되기까지의 소요시간은 10분에서 2일(실명확인이 끝난
                        후)이 소요됩니다.
                    </li>
                    <li>
                        회사는 본 서비스를 이용할 경우 지급 또는 수령에 소요되는
                        예상 기간에 관한 사항을 회사 홈페이지 등에 게시하고 이를
                        최신 내용으로 관리합니다.
                    </li>
                </ol>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제9조(송금의 변경,취소)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        고객은 본 서비스를 신청하여 수취인 계좌에 정상 입금되는
                        등 송금처리가 완료되지 않은 건에 대하여 유선 또는 영업점
                        방문 등을 통하여 회사에 변경 또는 취소를 신청할 수
                        있습니다. 단, 수취인 계좌에 정상 입금되는 등 송금처리가
                        완료된 건에 대해서는 변경 또는 취소를 신청할 수
                        없습니다.
                    </li>
                    <li>
                        회사는 고객으로부터 송금신청건에 대한 변경 또는 취소를
                        요청받은 경우 해당 요청사항을 처리하고 그 결과를
                        고객에게 통보합니다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제10조(송금결과의 통보)
                </p>
                <p className="mt-6 text-gray-500">
                    회사는 수취인 계좌에 정상 입금되는 등 송금처리가 완료된 경우
                    즉시 그 결과를 고객이 사전에 등록한 연락처 등을 통하여
                    고객에게 통지합니다.
                </p>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제11조(손해배상)
                </p>
                <p className="mt-6 text-gray-500">
                    회사의 책임있는 사유로 인하여 고객에게 손해가 발생한 경우
                    회사의 손해배상 범위는 민법에서 정하고 있는 통상손해를
                    포함하고, 특별한 사정으로 인한 손해는 회사가 그 사정을
                    알았거나 알 수 있었을 때에 한하여 배상책임이 있습니다.
                </p>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제12조(환급)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        고객의 귀책사유 없이 고객이 회사에 본 서비스를 신청하여
                        지정계좌에 입금한 날로부터 15일 이내에 송금처리가
                        완료되지 않은 경우에는 회사에 환급을 신청할 수 있습니다.
                    </li>
                    <li>
                        회사는 고객으로부터 제1항의 환급신청을 받은 경우 특별한
                        사정이 있는 경우를 제외하고는 당초 고객이 지정계좌에
                        입금한 금액 및 제11조(손해배상) 해당금액 등을 고객에게
                        지급 합니다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제13조(분쟁처리절차)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사는 ‘소액해외송금업무와 관련하여 고객이 제기하는
                        정당한 의견이나 불만을 반영하고 고객이
                        소액해외송금업무와 관련하여 입은 손해를 배상하기 위한
                        절차’ (이하 ‘분쟁처리절차’)에 관한 사항을 마련합니다.
                    </li>
                    <li>
                        회사는 분쟁사항에 대한 접수방법,분쟁 처리절차 및
                        분쟁처리결과에 대한 고객통보에 관한 사항을 별지2와 같이
                        제공합니다.
                    </li>
                    <li>
                        회사는 분쟁처리책임자와 담당자 지정내역 및 그 연락처
                        등을 회사 홈페이지 등에 게시하고 이를 최신 내용으로
                        관리합니다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제14조(거래기록의 보존)
                </p>
                <p className="mt-6 text-gray-500">
                    회사는 외국환거래법령 등에 따라 고객과의 지급 및 수령거래
                    기록을 5년간 보관 합니다.
                </p>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제15조(비밀보장의무)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사는 ‘고객의 인적사항, 계좌정보, 회사와의 송금거래
                        내용 및 실적에 관한 자료 등 소액해외송금업무 수행을
                        통하여 알게 된 일체의 고객정보’(이하 ‘고객정보’라
                        합니다.)에 대하여 관계법령에서 정한 경우를 제외하고는
                        고객 동의 없이 제3자에게 제공하거나 업무 목적 외에
                        누설하거나 이용하지 않습니다.
                    </li>
                    <li>
                        회사가 관리소홀 등 회사의 귀책사유로 제1항을 위반하거나
                        고객정보의 도난 또는 유출이 발생한 경우 회사가
                        피해고객에게 배상책임이 있습니다. 다만, 회사가 고의 또는
                        과실이 없음을 증명한 경우에는 그 책임을 면할 수
                        있습니다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제16조(약관의 교부,설명)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사는 약관을 정하거나 변경한 경우 인터넷 홈페이지 등을
                        통하여 공시하여야 하며, 고객과 소액해외송금업무와 관련한
                        계약을 체결할 때 약관을 명시합니다.
                    </li>
                    <li>
                        회사는 고객에게 전자문서의 전송(전자우편을 이용한 전송을
                        포함합니다.), 모사전송, 우편 또는 직접 교부의 방식으로
                        약관의 사본을 고객에게 교부 합니다.
                    </li>
                    <li>
                        회사는 고객이 약관의 내용에 대한 설명을 요청하는 경우
                        다음 각 호의 어느 하나의 방법으로 고객에게 약관의
                        중요내용을 설명 합니다.
                        <ol className="list-decimal text-gray-500 mt-4 ml-5">
                            <li>약관의 중요내용을 고객에게 직접 설명</li>
                            <li>
                                약관의 중요내용에 대한 설명을 전자적 장치를
                                통하여 고객이 알기 쉽게 표시하고 고객으로부터
                                해당 내용을 충분히 인지하였다는 의사표시를
                                전자적 장치를 통하여 수령
                            </li>
                        </ol>
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제17조(준용규정)
                </p>
                <p className="mt-6 text-gray-500">
                    이 약관에서 정하지 않은 사항에 대하여는 외국환거래법규 등
                    관련법규에 따릅니다.
                </p>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제18조(관할법원)
                </p>
                <p className="mt-6 text-gray-500">
                    이 거래와 관련한 분쟁이 발생할 경우 양 당사자의 합의에 의해
                    해결함을 원칙으로 합니다. 다만 당사자 간에 합의할 수 없거나
                    합의가 이루어지지 않아 이 거래와 관련하여 소송이 제기되는
                    경우 관할법원은 민사소송법에서 정하는 바에 따르기로 합니다.
                </p>
                <p className="mt-6 text-gray-500">
                    부칙(적용일자)
                    <br />이 약관은 2017년11월3일부터 적용됩니다.
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
