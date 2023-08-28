import React from "react";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import PageLayout from "../../app/layout/PageLayout";
import { PageContact, SeeAllBranch } from "../../app/components";
import { getAllPosts } from "../../app/lib";

const Component = ({ posts }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{`${t("site-name")} - ${t("title-notice")}`}</title>
      </Head>
      <div className="text-lg max-w-prose mx-auto">
        <h1 className=" text-center">
          <span className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-primary sm:text-4xl">
            {t("title-notice")}
          </span>
        </h1>

        <div className="bg-white shadow overflow-hidden w-full md:w-2/3 mx-0 md:mx-auto sm:rounded-lg mt-8 sm:mt-12 spacey-y-4">
          {posts.map(({ title, slug, excerpt, date }, index) => {
            const postedDate = date.split("T");
            return (
              <div key={index} className="p-4 space-y-3">
                <h3>
                  <Link
                    href={`/notice/${slug}`}
                    className="text-2xl font-medium text-primary"
                  >
                    {title}
                  </Link>
                </h3>
                <div className="text-sm text-gray-500">
                  Posted on: {postedDate[0]} {postedDate[1]}
                </div>
                <div
                  className="text-md text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: excerpt,
                  }}
                ></div>
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
  const allPosts = getAllPosts(["title", "date", "slug", "excerpt"]);
  return {
    props: { posts: allPosts },
  };
}
