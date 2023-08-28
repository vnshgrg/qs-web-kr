import React from "react";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import PageLayout from "../../app/layout/PageLayout";
import { PageContact, SeeAllBranch } from "../../app/components";
import { getPostBySlug, markdownToHtml } from "../../app/lib";

const Component = ({ post }) => {
  const { t } = useTranslation("common");
  const { title, content, date } = post;
  const postedDate = date.split("T");
  return (
    <>
      <Head>
        <title>{`${t("site-name")} - Notice`}</title>
      </Head>
      <div className="text-lg max-w-prose mx-auto">
        <div className="bg-white shadow overflow-hidden w-full md:w-2/3 mx-0 md:mx-auto sm:rounded-lg mt-8 sm:mt-12 spacey-y-4">
          <div className="p-4 space-y-3">
            <h1 className="text-3xl font-medium text-primary">{title}</h1>
            {/* {featuredImage && (
              <img src={featuredImage.node.sourceURL} className="w-full" />
            )} */}
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
          <Link
            href={`/notice`}
            className="text-lg text-gray-600 hover:text-primary"
          >
            &#8592; Go Back
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

export async function getServerSideProps({ params }) {
  // const posts = getAllPosts(["slug"]);
  const post = getPostBySlug(params.slug, ["title", "date", "slug", "content"]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}
