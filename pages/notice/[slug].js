import React from "react";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import PageLayout from "../../app/layout/PageLayout";
import { PageContact, SeeAllBranch } from "../../app/components";
import axios from "axios";
import { NOTICE_API_URL } from "../../app/config";

const Component = ({ post }) => {
    const { t } = useTranslation("common");
    const { title, slug, excerpt, date } = post;
    const postedDate = date.split("T");
    return (
        <>
            <Head>
                <title>{t("site-name")} - About us</title>
            </Head>
            <div className="text-lg max-w-prose mx-auto">
                <h1>
                    <span className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
                        {t("title-notice")}
                    </span>
                </h1>

                <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-8 sm:mt-12 spacey-y-4">
                    <div className="p-4 space-y-3">
                        <Link href={`/notice`}>
                            <a className="text-sm text-gray-600 hover:text-primary">
                                Go Back
                            </a>
                        </Link>
                        <h3 className="text-2xl font-medium text-primary">
                            {title}
                        </h3>
                        <div className="text-sm text-gray-500">
                            Posted on: {postedDate[0]} {postedDate[1]}
                        </div>
                        <div className="text-md">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: excerpt,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <SeeAllBranch />
            </div>
            <PageContact />
        </>
    );
};

const Notice = (props) => (
    <PageLayout>
        <Component {...props} />
    </PageLayout>
);

export default Notice;

export async function getServerSideProps(context) {
    const { slug } = context.params;
    // get all notices
    const { data } = await axios.post(
        NOTICE_API_URL,
        {
            query: `query{
                        post(id: "${slug}", idType: SLUG) {
                            id
                            slug
                            title
                            excerpt
                            content
                            dateGmt
                            date
                        }
                    }`,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return {
        props: {
            post: data.data.post,
        },
    };
}
