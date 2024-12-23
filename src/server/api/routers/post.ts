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

  getUopeopleBlogs: publicProcedure.query(() => {
    return db.uopeople.findMany();
  }),

  getGadgetsBlogs: publicProcedure.query(() => {
    return db.gadgets.findMany();
  }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.uopeople.create({
        data: {
          title: input.name,
        },
      });
    }),

  postBlog: publicProcedure
    .input(z.object({ title: z.string(), description: z.string() }))
    .mutation((req) => {
      return db.uopeople.create({
        data: {
          title: req.input.title,
          descriptiion: req.input.description,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.uopeople.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),

  getDetailBlogs: publicProcedure
    .input(z.object({ id: z.number() }))
    .query((req) => {
      return db.uopeople.findUnique({
        where: {
          id: req.input.id,
        },
      });
    }),

  deleteBlog: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation((req) => {
      return db.uopeople.delete({
        where: {
          id: req.input.id,
        },
      });
    }),
});
