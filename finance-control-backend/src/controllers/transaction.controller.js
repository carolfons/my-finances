const { db } = require('../firebase');


//GET all transactions

async function getAllTransactions(req,res){
    try{
        //access the firebase database
        const transactionsRef = db.ref('transactions');
        //search for all transactions
        const snapshot = await transactionsRef.get();
        //create an array to store the transactions
        const transactions = [];
        //loop through the snapshot and add each transaction to the array
        snapshot.forEach((doc)=>{
            transactions.push({id: doc.id, ...doc.data()});
        });

        //return the transactions
        res.status(200).json(transactions);
    }catch(error){
        console.error('Error getting transactions:', error);
        res.status(500).json({message: 'Internal server error'});
    }
}

//POST a new transaction
function createTransaction(req, res) {
    const {description, amount, date} = req.body;
    const newTransaction = {
        id: transactions.length + 1, // ?
        description,
        amount,
        date
    };
    transactions.push(newTransaction);
    res.status(201).json(newTransaction);
}

// UPDATE a transaction by ID
function updateTransaction(req, res) {
    const {id} = req.params;
    const {description, amount, date} = req.body;

    let transaction = transactions.find(t => t.id === parseInt(id)); //?
    if (!transaction) return res.status(404).json({message: 'Transaction not found'});

    transaction.description = description || transaction.description;
    transaction.amount = amount || transaction.amount;
    transaction.date = date || transaction.date; 
    res.status(200).json(transaction);
}

//DELETE a transaction by ID
function deleteTransaction(req, res) {
    const {id} = req.params;
    const index = transactions.findIndex(t => t.id === parseInt(id));
    if (index === -1) return res.status(404).json({message: 'Transaction not found'});

    transactions.splice(index, 1);
    res.status(200).json({message: 'Transaction deleted successfully'});
}

module.exports = {
    getAllTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
}
