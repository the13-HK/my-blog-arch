import { z } from "zod";
import { db } from "~/server/db";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAllBlogs: publicProcedure.query(() => {
    return db.post.findMany();
  }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          title: input.name,
        },
      });
    }),

  postBlog: publicProcedure
    .input(z.object({ title: z.string(), description: z.string() }))
    .mutation((req) => {
      return db.post.create({
        data: {
          title: req.input.title,
          descriptiion: req.input.description,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),

  getDetailBlogs: publicProcedure
    .input(z.object({ id: z.number() }))
    .query((req) => {
      return db.post.findUnique({
        where: {
          id: req.input.id,
        },
      });
    }),

  deleteBlog: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation((req) => {
      return db.post.delete({
        where: {
          id: req.input.id,
        },
      });
    }),
});
