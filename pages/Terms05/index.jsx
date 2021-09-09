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
                        제1장 총칙
                    </span>
                </h1>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제1조 (목적)
                </p>
                <p className="mt-6 text-gray-500">
                    본 약관은 주식회사 엔앤피코리아(이하 “회사” 라 합니다) 가
                    이용자에게 제공하는 오픈뱅킹서비스(이하 “서비스” 라
                    합니다)의 이용과 관련하여 회사와 이용자 간의 기본적인 사항을
                    규정함을 목적으로 합니다.
                </p>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제2조 (용어의 정의)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                        <ol className="list-decimal text-gray-500 mt-4 ml-5">
                            <li>
                                “오픈뱅킹서비스”란 오픈뱅킹공동업무를 활용하여
                                회사가 이용자에게 제공하는 금융거래 관련
                                서비스를 총칭합니다.
                            </li>
                            <li>
                                “이용자”란 금융거래를 위하여 본 약관에 의하여
                                회사와 체결한 계약에 따라 회사가 제공하는
                                서비스를 이용하는 자를 말합니다.
                            </li>
                            <li>
                                “금융거래”란 회사가 제공하는 상품 및 서비스를
                                고객이 이용하는 행위를 말합니다.
                            </li>
                            <li>“지급인”이란 자금을 주는자를 말합니다.</li>
                            <li>“수취인”이란 자금을 받는자를 말합니다.</li>
                            <li>
                                “신청계좌”란 서비스 이용을 위해 연결하는
                                계좌로서 오픈뱅킹공동업무 등록이 가능한 은행의
                                계좌를 말합니다.
                            </li>
                            <li>
                                “입금계좌”란 서비스를 이용하여 자금이 입금되는
                                계좌를 말합니다.
                            </li>
                            <li>
                                “운영기관”이란 오픈뱅킹 공동업무를 운영·제공하는
                                사단법인 금융결제원을 말합니다.
                            </li>
                            <li>
                                “오픈뱅킹 공동업무”란 회사가 은행과의 별도 제휴
                                없이 운영기관을 통하여 API형태로 운영·제공하는
                                다음 각 호의 업무를 말합니다.
                                <ul className="text-gray-500 mt-4 ml-5">
                                    <li>
                                        가. “출금이체”란 회사의 출금에 동의한
                                        이용자의 신청계좌에서 자금을 출금하여
                                        회사의 계좌로 실시간 입금하는 업무를
                                        말합니다.
                                    </li>
                                    <li>
                                        나. “입금이체”란 회사의 계좌에서 자금을
                                        출금하여 수취인의 계좌로 실시간 입금하는
                                        업무를 말합니다.
                                    </li>
                                    <li>
                                        다.“계좌실명조회”란 회사가 수취인 또는
                                        출금이체 신청을 한 이용자 계좌의
                                        정상여부 및 실명을 실시간 조회하는
                                        업무를 말합니다.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                “모바일기기”란 무선인터넷 및 이동통신망을 이용할
                                수 있는 휴대폰, 스마트폰, 태블릿 PC등의 기기를
                                통칭합니다.
                            </li>
                            <li>
                                “전용 어플리케이션”이란 서비스이용을 위해
                                모바일기기에 설치하는 회사가 제공하는
                                어플리케이션을 말합니다.
                            </li>
                            <li>
                                “수수료”란 회사의 서비스를 이용하는 과정에서
                                회사가 정하는 기준에 따라 이용자에게 부과하는
                                비용을 말합니다.
                            </li>
                        </ol>
                    </li>
                    <li>
                        본 약관에서 별도로 정의하지 아니한 용어는
                        『전자금융거래법』 등 관계 법령에서 정하는 바에 따르며,
                        그 외는 일반 상관례에 따릅니다.
                    </li>
                </ol>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제3조 (약관의 변경)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 전용
                        어플리케이션 화면 내 또는 홈페이지에 게시하여
                        제공합니다.
                    </li>
                    <li>
                        회사는 관계 법령을 위배하지 않는 범위에서 본 약관을
                        개정할 수 있으며, 약관의 변경과 관련된 사항은
                        『전자금융거래기본약관』의 내용을 준용합니다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제4조 (약관적용의 우선순위)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사는 개별서비스에 적용될 사항의 규정을 위해 개별약관을
                        사용하거나 이용정책을 구분하여 개별서비스를 운영할 수
                        있으며, 해당 내용이 본 약관과 상충되는 경우 개별서비스에
                        대한 개별약관이 우선 적용됩니다.
                    </li>
                    <li>
                        본 약관에서 정하지 아니한 사항에 대해서는 전자금융거래법
                        등 관련법령과 전자금융감독규정 등 관련 외규를 우선
                        적용합니다.
                    </li>
                </ol>

                <h2 className="mt-6 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
                    제2장 이용계약
                </h2>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제5조 (이용계약의 체결)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사와 이용자 사이의 오픈뱅킹서비스 이용계약(이하
                        “이용계약”이라 함)은 이용자가 되고자 하는 자(이하
                        “가입신청자”라 함)가 신청계좌를 정하여 회사가 정한
                        양식에 따라 가입신청을 하고, 회사가 이에 대해
                        승낙함으로써 체결됩니다.
                    </li>
                    <li>
                        가입신청자가 동의 의사를 회사에 전자적 방식으로 전송하게
                        되면 본 약관에 동의하고 회사에 서비스 이용을 신청한
                        것으로 봅니다.
                    </li>
                    <li>
                        회사는 가입신청자의 가입신청이 제6조 제3항 각 호의 어느
                        하나에 해당하는 경우 이를 승낙하지 않을 수 있습니다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제7조 (이용계약의 해지)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        이용자는 언제든지 이용계약 해지신청을 할 수 있으며,
                        회사는 관련 법령, 이용규약 등이 정하는 바에 따라 이를
                        즉시 처리하여야 합니다.
                    </li>
                    <li>
                        이용계약 해지 이후에 발생하는 불이익은 이용자 본인이
                        부담합니다.
                    </li>
                    <li>
                        회사는 이용자에게 다음 각 호에 해당하는 사유가
                        발생하거나 확인된 경우 이용계약을 해지할 수 있습니다.
                        <ol className="list-decimal text-gray-500 mt-4 ml-5">
                            <li>타인의 정보를 이용해 가입신청을 하는 경우</li>
                            <li>
                                허위의 정보를 기재하거나, 회사가 제시하는 내용을
                                기재하지 않는 경우
                            </li>
                            <li>
                                이용자가 서비스의 원활한 제공을 방해하거나
                                시도하는 경우
                            </li>
                            <li>
                                다른 이용자의 권리나 정당한 이익을 침해하거나
                                법령 또는 선량한 풍속 기타 사회질서에 위배되는
                                행위를 한 경우
                            </li>
                            <li>
                                기타 본 약관에 위배되거나 위법 또는 부당한
                                거래가 확인된 경우
                            </li>
                        </ol>
                    </li>
                    <li>
                        회사가 이용계약을 해지하는 경우 이용자에게 해지사유를
                        밝혀 해지의사를 통지하며, 이용자는 1개월이내에 이의를
                        신청할 수 있습니다. 다만, 본 약관 및 운영정책에서 정하는
                        사유가 있을 경우에는 별도의 이의 신청 기간을 부여하지
                        않을 수 있습니다.{" "}
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제8조 (이용자에 대한 통지)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사가 이용자에 대한 통지를 하는 경우 SMS, LMS, 이메일,
                        서면, 앱 푸시 등 가용한 수단을 활용하여 통지합니다.
                    </li>
                    <li>
                        회사는 전체이용자에 대한 통지를 하는 경우 홈페이지,
                        전용어플리케이션 등에 게시함으로써 제1항의 통지에 갈음할
                        수 있습니다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제9조 (이용자 정보의 제공 및 변경)
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사는 이용계약 체결 이후 필요한 경우 “이용자”의 동의를
                        받아 “이용자”의 정보를 추가적으로 수집할 수 있습니다.
                    </li>
                    <li>
                        이용자는 회사에 제공한 회원정보에 변경사항이 있을 경우
                        이를 온라인으로 수정하거나 이메일 등의 수단으로 회사에
                        알려야 합니다
                    </li>
                </ol>

                <h2 className="mt-6 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
                    제3장 오픈뱅킹서비스
                </h2>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제10조 (서비스의 제공)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        제6조에 따라 회사가 가입신청자의 이용신청을 승낙함과
                        동시에 가입신청자는 제2조 1항 9호의 오픈뱅킹공동업무
                        이용에 동의한 이용자가 되며, 이 때부터 회사는 신청계좌에
                        대해 본 약관이 정하는 서비스를 제공합니다.
                    </li>
                    <li>
                        회사는 본 약관이 정한 서비스 외에 추가적인 서비스를
                        제공하기 위하여 이용자에게 별도의 추가적인 약관 동의,
                        정보 수집 및 이용 동의 등 절차의 이행을 요청할 수
                        있으며, 이러한 절차가 완료되지 않는 경우 이용자는
                        추가적인 서비스의 전부 또는 일부를 이용할 수 없습니다.
                    </li>
                    <li>
                        회사는 오픈뱅킹공동업무를 적용하여 제공할 서비스를 정할
                        수 있습니다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제11조 (이체대상 및 이용한도)
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        출금이체 및 입금이체를 이용한 서비스의 이체대상은
                        현금으로 합니다.
                    </li>
                    <li>
                        출금이체를 이용한 서비스의 이용한도는 운영기관의
                        이용한도를 따릅니다.
                    </li>
                    <li>
                        출금이체에 의한 고객 신청계좌에서의 출금은 회사가
                        출금요청을 접수한 은행의 예금잔액에 한하여 회사의
                        청구대로 출금합니다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제12조 (인증)
                </p>
                <p className="mt-6 text-gray-500">
                    회사는 서비스의 종류 및 보안수준에 따라 별도로 인증수단을
                    적용할 수 있습니다.
                </p>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제13조 (서비스의 중단)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사는 다음 각 호의 어느 하나의 경우에는 서비스의 전부
                        또는 일부를 중단할 수 있습니다.
                        <ol className="list-decimal text-gray-500 mt-4 ml-5">
                            <li>운영기관의 서비스 점검시간</li>
                            <li>
                                개별서비스 점검, 변경 등 개별서비스 운영에 관한
                                사항
                            </li>
                            <li>
                                정보통신설비의 보수점검, 증설, 교체, 이전 등
                                시스템 관리업무
                            </li>
                            <li>
                                정전, 제반 설비의 장애 또는 이용량의 폭주 등
                                정상적인 서비스 이용에 지장이 있는 경우
                            </li>
                            <li>
                                기타 천재지변, 폭동, 전쟁, 테러, 국가비상사태 등
                                불가항력적 사유가 있는 경우
                            </li>
                            <li>
                                운영기관의 오픈뱅킹 공동업뮤규약 및 시행세칙,
                                관련 법령, 정책 변화 등 서비스 운영상 상당한
                                이유가 있는 경우
                            </li>
                        </ol>
                    </li>
                    <li>
                        제1항에 따라 서비스의 제공을 일시적으로 중단하는 경우
                        회사는 사전에 서비스 중단을 공지합니다. 다만, 불가피하게
                        사전 공지를 할 수 없는 경우 회사는 이를 사후 공지할 수
                        있습니다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제14조 (서비스의 제한)
                </p>
                <p className="mt-6 text-gray-500">
                    회사는 다음 각 호의 어느 하나의 경우에는 서비스의 전부 또는
                    일부를 제한할 수 있습니다.
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        압류, 가압류, 가처분 등 법적 지급제한이나 법령 위반
                        등으로 서비스 제공이 부적합할 경우
                    </li>
                    <li>회사 및 센터에 사고신고가 접수된 경우</li>
                    <li>
                        회사가 제공하는 서비스 이용방법에 의하지 아니하고
                        비정상적인 방법으로 서비스를 이용하거나 회사의 시스템에
                        접근하는 행위
                    </li>
                    <li>이용자가 회사의 서비스 운영을 고의로 방해하는 경우</li>
                    <li>이용자가 이용계약을 해지하는 경우</li>
                    <li>
                        회사가 기타 합리적인 판단에 의해 서비스의 제공을 거부할
                        필요가 있다고 인정할 경우
                    </li>
                </ol>

                <h2 className="mt-6 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
                    제4장 수수료
                </h2>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제15조 (수수료)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사는 서비스 이용에 따른 수수료를 부과할 수 있습니다.
                    </li>
                    <li>
                        회사는 수수료에 관한 사항을 홈페이지나
                        전용어플리케이션에 별도로 게시합니다.
                    </li>
                    <li>
                        회사는 수수료에 관한 사항이 변경될 경우 제3조를
                        준용합니다.
                    </li>
                </ol>
                <h2 className="mt-6 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
                    제5장 의무 및 제한사항
                </h2>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제16조 (준수사항)
                </p>
                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사는 서비스가 안전하게 처리될 수 있도록 선량한
                        관리자로서의 주의를 다하며, 관계법령에서 정한 경우를
                        제외하고는 고객 동의 없이 이를 제 3자에게 제공하거나
                        업무 목적 외에 누설 또는 이용하지 않습니다.
                    </li>
                    <li>
                        이용자는 서비스의 이용과 관련하여 관계 법령, 약관,
                        세부이용지침, 서비스 이용안내 및 공지사항 등을
                        준수하여야 합니다.
                    </li>
                    <li>
                        이용자는 다음 각 호의 어느 하나에 해당하는 경우 즉시
                        회사에 통보하여야 합니다.
                        <ol className="list-decimal text-gray-500 mt-4 ml-5">
                            <li>
                                자신의 명의가 도용되거나 제3자에게 부정하게
                                사용된 것을 인지한 경우
                            </li>
                            <li>
                                전용어플리케이션을 이용중인 스마트기기의 분실,
                                도난
                            </li>
                            <li>
                                기타 거래절차상 고객만이 알고 있는 비밀을 요하는
                                사항이 누설되었음을 알게 된 경우
                            </li>
                        </ol>
                    </li>
                </ol>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제17조 (손해배상 및 면책)
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        회사는 전자금융거래법 및 전자금융거래기본약관 등
                        개별약관의 책임 및 면책항목을 준용합니다.
                    </li>
                    <li>
                        회사는 고객의 신청계좌 예금잔액이 출금일 현재 회사의
                        청구금액보다 부족하거나, 예금의 지급제한,한도대출의 연체
                        등의 사유에 해당되는 경우 출금이체 처리를 하지
                        아니합니다.
                    </li>
                </ol>

                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제18조 (동의의 유효기간 및 철회방법)
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        이용자가 오픈뱅킹서비스의 동의하면 유효기간은 1년이다.
                        이용자의 동의에 의해 이 유효기간은 연장될 수 있습니다.
                    </li>
                    <li>
                        이 동의 철회는 이용자가 회사에 전화 또는 메일등으로
                        철회가 가능하며, 동의가 철회되면 회사가 제공하는
                        서비스를 이용할 수 없습니다.
                    </li>
                </ol>
                <p className="mt-6 text-xl text-gray-500 font-bold">
                    제19조 (준거법 및 재판관할)
                </p>

                <ol className="list-decimal text-gray-500 mt-4 ml-5">
                    <li>
                        본 약관과 관련된 사항에 대하여는 대한민국 법률을
                        준거법으로 합니다.
                    </li>
                    <li>
                        본 약관과 관련하여 발생한 분쟁에 대해서는 법령에서
                        별도로 정하는 경우를 제외하고 민사소송법에서 정하는 바에
                        따릅니다.
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
