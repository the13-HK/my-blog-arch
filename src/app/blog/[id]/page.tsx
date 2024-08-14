"use client";
import React from "react";
import { api } from "~/trpc/react";
import { useRouter, useParams } from "next/navigation";

const DetailPage = () => {
  const router = useRouter();
  const useParam = useParams();
  const id = useParam.id;
  console.log(id);
  let parseNumberId;
  if (typeof id == "string") {
    parseNumberId = parseInt(id);
  } else {
    parseNumberId = NaN;
    console.log("id is not string");
  }

  const allBlogs = api.post.getAllBlogs.useQuery();
  const detailBlog = api.post.getDetailBlogs.useQuery({ id: parseNumberId });
  console.log(detailBlog.data);

  const deleteBlog = api.post.deleteBlog.useMutation({
    onSettled: () => {
      void allBlogs.refetch();
    },
  });

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      deleteBlog.mutate({ id: parseNumberId });
      router.push("/");
    }
    console.log("delete");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="mx-auto mt-10 w-full max-w-2xl rounded-md bg-white p-6 shadow-md">
        <h1 className="mb-4 text-3xl font-bold">{detailBlog.data?.title}</h1>
        <div className="mb-8 text-sm text-gray-500">
          <span>{detailBlog.data?.createdAt.toLocaleDateString()}</span> {}
        </div>
        <p className="whitespace-pre-line text-gray-700">
          {detailBlog.data?.descriptiion}
        </p>
        <button
          className="mt-4 rounded-md bg-red-500 px-4 py-2 text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </main>
  );
};

export default DetailPage;
