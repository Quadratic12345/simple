import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    question: v.string(),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert("polls", {
      question: args.question,
    });
  },
});

export const get = query({
  args: {
    id: v.id("polls"),
  },

  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});