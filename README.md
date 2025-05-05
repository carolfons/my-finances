# Finance Control - Backend

This is the backend of the Finance Control application, built with **Node.js**, **Express**, and **Firebase**.  
It provides a basic **CRUD** API to manage financial transactions.

## 🚀 Technologies Used

- Node.js
- Express
- Firebase Firestore (as the database)
- Zod (for input validation)
- Jest (for testing)
- Supertest (for API testing)
- dotenv (for environment variables)
- cors (for API access control)
- nodemon (for development)

## 📂 Project Structure

```bash
finance-control-backend/
├── node_modules/
├── src/
│   ├── app.js
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── config/
├── .env
├── package.json
└── README.md

```


## 📚 Current Features

### 🔹 Transaction Routes
- `GET /transactions` → List all transactions
- `POST /transactions` → create a new transaction
- `PUT /transactions/:id` → update a transaction by id
- `DELETE /transactions/:id` → delete a transaction by id

### 🔹 User Routes (Usuárias)
- `GET /users` → list all users
- `POST /users` → create a new user

## 🔹 Input validation and Unit  Tests
- `ZOD`→ Input validation
- `Jest`→ Unit tests
- `Supertest`→ API testing

## 🎯 Next Steps:
-   ~integrate Firebase to store transactions persistently (instead of in memory).~
-   ~Implement input validations (using zod).~
-   ~Add unit tests.~
-   Add firebase variables in .env


--- 

MADE WITH ❤️ BY @CAROLFONS

