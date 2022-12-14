import { Authors } from "../components/Authors";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { ARTICLES } from "../lib/articles";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { Tag } from "../components/Tag";

// Next.js
import { NextPage } from "next";
import Link from "next/link";

const Articles: NextPage = () => {
  return (
    <>
      <Seo
        title="Articles - Sahil Pabale"
        description="Sahil Pabale - Full-Stack Developer"
      />
      <Layout>
        <Animate>
          <div className="flex flex-col mb-4 min-h-[4rem] justify-between">
            <Heading style={{ marginBottom: 0 }}>Articles</Heading>
            <Text>A list of interesting articles I found on the internet.</Text>
          </div>
          <div className="flex flex-col mb-4">
            {ARTICLES.map((article) => (
              <div
                className="border-b border-teal-100 dark:border-teal-900
              hover:no-underline py-4 w-full"
                key={article.id}
              >
                <Tag title={article.type} />
                <Link href={article.link}>
                  <a
                    className="text-3xl font-bold cursor-pointer underline
                  dark:text-white hover:no-underline"
                    target="_blank"
                  >
                    {article.title}
                  </a>
                </Link>
                <div className="flex w-full">
                  {article.authors.length === 1 ? (
                    <Text style={{ margin: "0.5rem 0 0.25rem 0" }}>
                      By {article.authors[0]}
                    </Text>
                  ) : (
                    <>
                      <div
                        className="flex"
                        style={{ margin: "0.5rem 0 0.25rem 0" }}
                      >
                        <Authors
                          type="article"
                          authors={article.authors}
                          style="long"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};
//
export default Articles;
