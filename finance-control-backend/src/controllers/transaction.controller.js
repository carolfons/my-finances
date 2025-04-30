const { db } = require("../firebase");

//GET all transactions

async function getAllTransactions(req, res) {
  try {
    //access the firebase database
    const snapshot = await db.collection("transactions").get();
    //search for all transactions
    // const snapshot = await getDocs(transactionsCol);
    //loop through the snapshot and add each transaction to the array
    const transactions = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    //return the transactions
    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error getting transactions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

//POST a new transaction
async function createTransaction(req, res) {
  try {
    const { title, value, type } = req.body;
    if (!title || !value || !type) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newTransaction = {
      title,
      value,
      type,
      date: new Date().toISOString(),
    };
    
    const docRef = await db.collection("transactions").add(newTransaction);
    res.status(201).json({ id: docRef.id, ...newTransaction });
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// UPDATE a transaction by ID
async function updateTransaction(req, res) {
  try{
    const { id } = req.params;
    const updates = req.body;

    const docRef = db.collection("transactions").doc(id);
    const docSnapshot = await docRef.get();
    if (!docSnapshot.exists) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    await docRef.update(updates);
    res.status(200).json({ message: "Transaction updated successfully" });


  }catch(error){
    console.error("Error updating transaction:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

//DELETE a transaction by ID
async function deleteTransaction(req, res) {
  try {
    const { id } = req.params;
    const docRef = db.collection("transactions").doc(id);
    const docSnapshot = await docRef.get();
    if (!docSnapshot.exists) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    await docRef.delete();
    res.status(200).json({ message: "Transaction deleted successfully" });

}catch(error){
    console.error("Error deleting transaction:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getAllTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
