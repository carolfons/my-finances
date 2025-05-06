const { parse } = require("dotenv");
const { db } = require("../firebase");
const {createTransactionSchema, updateTransactionSchema} = require("../schemas/transaction.schemas");

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

    //validate the request body with zod
    const parsed = createTransactionSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: parsed.error.message });
    }

    const { title, value, type, location, category } = parsed.data;

    const newTransaction = {
      title,
      value,
      type,
      location,
      category,
      date: new Date().toISOString(),
    };
    //save the transaction to the database
    const docRef = await db.collection("transactions").add(newTransaction);
    //response
    res.status(201).json({ id: docRef.id, ...newTransaction });

  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// UPDATE a transaction by ID
async function updateTransaction(req, res) {
  try{
    //get the id from the request params
    const { id } = req.params;

    //validate the request body
    const parsed = updateTransactionSchema.safeParse(req.body);
    //check if the request body is valid
    if (!parsed.success) {
      return res.status(400).json({ message: parsed.error.message });
    }


    //creates a new document with the id and the data from the request body
    const docRef = db.collection("transactions").doc(id);
    //get the document from the database
    const docSnapshot = await docRef.get();
  

    //check if the document exists
    if (!docSnapshot.exists) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    //update the document
    await docRef.update(parsed.data);
    ///get the updated document
    const updatedTransaction = {id:docSnapshot.id, ...parsed.data};
    //return the updated document
    res.status(200).json(updatedTransaction);


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
