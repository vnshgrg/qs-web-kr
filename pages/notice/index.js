import React from "react";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import PageLayout from "../../app/layout/PageLayout";
import { PageContact, SeeAllBranch } from "../../app/components";
import axios from "axios";
import { NOTICE_API_URL } from "../../app/config";

const Component = ({ posts }) => {
    const { t } = useTranslation("common");

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
                    {posts.map(({ title, slug, excerpt, date }, index) => {
                        const postedDate = date.split("T");
                        return (
                            <div key={index} className="p-4 space-y-3">
                                <h3>
                                    <Link href={`/notice/${slug}`}>
                                        <a className="text-2xl font-medium text-primary">
                                            {title}
                                        </a>
                                    </Link>
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
                        );
                    })}
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

export async function getServerSideProps() {
    // get all notices
    const { data } = await axios.post(
        NOTICE_API_URL,
        {
            query: `query($categoryId: Int) {
                        posts(where: {categoryId: $categoryId}){
                            nodes {
                                id
                                slug
                                date
                                title
                                excerpt
                                featuredImage{
                                    node{
                                        sourceUrl
                                    }
                                }
                            }
                        }
                    }`,
            variables: {
                categoryId: 2,
            },
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return {
        props: {
            posts: data.data.posts.nodes,
        },
    };
}
