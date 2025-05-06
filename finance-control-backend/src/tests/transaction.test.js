const request = require("supertest"); //supertest import
const app = require("../app"); //import express app

const testUser = {
  email:process.env.TEST_USER_EMAIL,
  password:process.env.TEST_USER_PASSWORD,
};

let token;

describe("Transaction API (JWT Protected", () => {

  //beforeAll runs before all tests
  beforeAll(async () => {
    //login to get the token
    const res = await request(app)
    .post("/auth/login")
    .send(testUser);
    token = res.body.token;
  });

/**
     * Test: GET /transactions
     * Description: verify if the API returns all transactions with status 200
     */
  it("should return all transactions", async () => {
    const res = await request(app)
    .get("/transactions")
    .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true); //expeect the response body to be an array
  });


  /**
   * Test: POST /transactions
   * Description: verify if the API creates a new transaction with status 201
   * */
  it("should create a new transaction with valid data", async () => {

    const newTransaction = {
      title: "Test Transaction",
      value: 1000,
      type: "income",
      location: "Test Location",
      category: "Test Category",
    };

    const response = await request(app)
    .post("/transactions")
    .set("Authorization", `Bearer ${token}`)
    .send(newTransaction);

    expect(response.statusCode).toBe(201); //expect the response status code to be 201
    expect(response.body).toHaveProperty("id");//expect the response body to have a property id
    expect(response.body.title).toBe("Test Transaction");//expect the response body to have a property title
  });

  /**
   * Test: POST /transactions(with invalid data)
   * Description: verify if the API returns a 400 status code when creating a new transaction with invalid data
   * */
  
  it("should return 400 when creating transaction with missing fields", async () => {
    const incompleteTransaction = {
       value: 100,
      type: "expense"
      //missing title
    };

    const response = await request(app)
    .post("/transactions")
    .set("Authorization", `Bearer ${token}`)
    .send(incompleteTransaction);

    expect(response.statusCode).toBe(400);
    expect(response.body.errors[0]).toHaveProperty("message");
  });

  /**
   * Test: PUT /transactions/:id
   * Description: verify if the API updates a transaction with status 200
   * */
  it("should update an existing transaction", async () => {
    const newTransaction = {
      title: "Updated Transaction",
      value: 200,
      type: "income",
      location: "Updated Location",
      category: "Updated Category",
    };

    //creating a new transaction to test
    const createResponse = await request(app)
    .post("/transactions")
    .set("Authorization", `Bearer ${token}`)
    .send(newTransaction);
    //getting the id of the new transaction
    const transactionId = createResponse.body.id;
    //updating the transaction
    const response = await request(app)
    .put(`/transactions/${transactionId}`)
    .set("Authorization", `Bearer ${token}`)
    .send(newTransaction);
    
    
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe("Updated Transaction");
    });

    /*
    Test: DELETE /transactions/:id
    * Description: verify if the API deletes a transaction with status 200
    */
   it("should delete an existing transaction", async () => {
      const newTransaction = {
        title: "To be Deleted",
        value: 200,
        type: "expense",
        location: "Deleted Location",
        category: "Deleted Category",
      };
      //creating a new transaction to test
      const createResponse = await request(app)
      .post("/transactions")
      .set("Authorization", `Bearer ${token}`)
      .send(newTransaction);

      const transactionId = createResponse.body.id;
      const response = await request(app)
      .delete(`/transactions/${transactionId}`)
      .set("Authorization", `Bearer ${token}`);

      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("Transaction deleted successfully");
    });

 });
