const bcrypt = require("bcryptjs");
const { db } = require("../firebase");

const USERS_COLECTION = "users";

const UserModel = {
  //finds user by email
  async findByEmail(email) {
    const snapshot = await db
      .collection(USERS_COLECTION)
      .where("email", "==", email)
      .get();
    if (snapshot.empty) {
      return null;
    }
    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() };
  },

  //create a new user (password is cryypted)
  async create({email,password}){
    const hashedPassword = await bcrypt.hash(password, 10);
    //create user
    const userRef = await db.collection(USERS_COLECTION).add({
      email,
      password: hashedPassword,
    });
    return { id: userRef.id, email};
  }
};


module.exports = UserModel;