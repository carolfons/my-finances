// validação com zod

const { z } = require("zod");

//schema for create a transaction
const createTransactionSchema = z.object({
  title: z.string().min(1, "Title is required"),
  value: z.number().positive("Value must be positive"),
  type: z.enum(["income", "expense"]),
});

//schema for update a transaction
const updateTransactionSchema = z.object({
  title: z.string().min(1).optional(),
  value: z.number().positive().optional(),
  type: z.enum(["income", "expense"]).optional(),
});

module.exports = {
  createTransactionSchema,
  updateTransactionSchema,
};
