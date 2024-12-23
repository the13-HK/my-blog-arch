"use client";
import Link from "next/link";
import { ImageGallery } from "react-image-grid-gallery";
import { LatestPost } from "~/app/_components/post";
import { api } from "~/trpc/react";
import { portfolioArray } from "~/assets/portfolio/portfolio";

export default function Home() {
  const uopeopleBlogs = api.post.getUopeopleBlogs.useQuery();
  const badgetsBlogs = api.post.getGadgetsBlogs.useQuery();
  console.log(uopeopleBlogs);

  return (
    <main className="min-h-screen bg-white py-12 text-gray-700">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">Haruka</span> Portfolio
          Blog
        </h1>

        <section className="mt-24">
          <h2 className="text-left text-lg font-extrabold tracking-tight sm:text-[3rem]">
            UoPeople
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {uopeopleBlogs.data?.map((blog) => (
              <Link key={blog.id} href={blog.linkUrl}>
                <div className="rounded-xl border border-black bg-white p-6">
                  <h3 className="mb-4 text-2xl font-bold">{blog.title}</h3>
                  <div className="mb-4 text-lg">{blog.descriptiion}</div>
                  <span className="text-base text-gray-400">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {/* <div className="mt-12 text-center">
            <Link
              href="/postBlog"
              className="rounded-md bg-orange-500 px-6 py-4 font-medium"
            >
              Post
            </Link>
          </div> */}
        </section>
        <section className="mt-24">
          <h2 className="text-left text-lg font-extrabold tracking-tight sm:text-[3rem]">
            Gadget
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {badgetsBlogs.data?.map((blog) => (
              <Link key={blog.id} href={blog.linkUrl}>
                <div className="rounded-xl border border-black bg-white/10 p-6">
                  <h3 className="mb-4 text-2xl font-bold">{blog.title}</h3>
                  <div className="mb-4 text-lg">{blog.descriptiion}</div>
                  <span className="text-base text-gray-400">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="mt-24">
          <h2 className="text-left text-lg font-extrabold tracking-tight sm:text-[3rem]">
            Photgraph
          </h2>
          <div className="mt-10">
            <ImageGallery
              imagesInfoArray={portfolioArray}
              columnCount={"auto"}
              columnWidth={300}
              gapSize={10}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
