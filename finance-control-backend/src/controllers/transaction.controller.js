// Mock data for transactions (temporary)

let transactions =[
    {id: 1,
    description: 'Coffee',
    amount: 5.0,
    date: '2025-04-28',},
    { id: 2, description: 'Lunch', amount: 15.0, date: '2025-04-28' }

]

//GET all transactions
const getAllTransactions = (req, res) => {
    res.status(200).json(transactions);
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
