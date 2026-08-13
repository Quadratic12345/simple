import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  polls: defineTable({
    question: v.string(),
  }),
});