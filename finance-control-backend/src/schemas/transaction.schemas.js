// validação com zod

const { z } = require("zod");

//schema for create a transaction
const createTransactionSchema = z.object({
  title: z.string().min(1, "Title is required"),
  value: z.number().positive("Value must be positive"),
  type: z.enum(["income", "expense"]),
  location: z.string().min(1, "Location is required"),
  category: z.string().min(1, "Category is required"),
});

//schema for update a transaction
const updateTransactionSchema = z.object({
  title: z.string().min(1).optional(),
  value: z.number().positive().optional(),
  type: z.enum(["income", "expense"]).optional(),
  location: z.string().min(1).optional(),
  category: z.string().min(1).optional(),
});

module.exports = {
  createTransactionSchema,
  updateTransactionSchema,
};
