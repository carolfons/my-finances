const express = require('express');
const router = express.Router();

//importing schemas
const {
    createTransactionSchema,
    updateTransactionSchema,
} = require('../schemas/transaction.schemas');
//importing middleware
const validateSchema = require('../middleware/validateSchema');

//importing controller
const {
    getAllTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
} = require('../controllers/transaction.controller');

//defining routes
router.get('/', getAllTransactions); //GET all transactions
router.post('/',validateSchema(createTransactionSchema), createTransaction); //POST a NEW transaction
router.put('/:id', validateSchema(updateTransactionSchema), updateTransaction); //UPDATE a transaction by id
router.delete('/:id', deleteTransaction); //DELETE a transaction by ID


//expoting the router
module.exports = router;