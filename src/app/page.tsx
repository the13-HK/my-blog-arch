"use client";
import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api } from "~/trpc/react";

export default function Home() {
  const allBlogs = api.post.getAllBlogs.useQuery();
  console.log(allBlogs);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] py-12 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">Haruka</span> Portfolio
          Blog
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allBlogs.data?.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.id}`}>
              <div className="rounded-xl bg-white/10 p-6">
                <h3 className="mb-4 text-2xl font-bold">{blog.title}</h3>
                <div className="mb-4 text-lg">{blog.descriptiion}</div>
                <span className="text-base text-gray-400">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/postBlog"
            className="rounded-md bg-orange-500 px-6 py-4 font-medium"
          >
            Post
          </Link>
        </div>
      </div>
    </main>
  );
}
