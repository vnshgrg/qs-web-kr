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
    const { title, slug, content, date, featuredImage } = post;
    const postedDate = date.split("T");
    return (
        <>
            <Head>
                <title>{t("site-name")} - About us</title>
            </Head>
            <div className="text-lg max-w-prose mx-auto">
                <div className="bg-white shadow overflow-hidden w-full md:w-2/3 mx-0 md:mx-auto sm:rounded-lg mt-8 sm:mt-12 spacey-y-4">
                    <div className="p-4 space-y-3">
                        <h1 className="text-3xl font-medium text-primary">
                            {title}
                        </h1>
                        {featuredImage && (
                            <img
                                src={featuredImage.node.sourceURL}
                                className="w-full"
                            />
                        )}
                        <div className="text-sm text-gray-500">
                            Posted on: {postedDate[0]} {postedDate[1]}
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                            className="text-md text-gray-600 space-y-6"
                        />
                    </div>
                </div>

                <div className="text-center mt-10">
                    <Link href={`/notice`}>
                        <a className="text-lg text-gray-600 hover:text-primary">
                            &#8592; Go Back
                        </a>
                    </Link>
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
