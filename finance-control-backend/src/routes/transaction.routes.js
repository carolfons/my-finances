const express = require('express');
const router = express.Router();

//importing controller
const {
    getAllTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
} = require('../controllers/transaction.controller');

//defining routes
router.get('/', getAllTransactions); //GET all transactions
router.post('/', createTransaction); //POST a NEW transaction
router.put('/:id', updateTransaction); //UPDATE a transaction by id
router.delete('/:id', deleteTransaction); //DELETE a transaction by ID


//expoting the router
module.exports = router;