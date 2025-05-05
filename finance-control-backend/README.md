# Finance Control - Backend

This is the backend of the Finance Control application, built with **Node.js**, **Express**, and **Firebase**.  
It provides a basic **CRUD** API to manage financial transactions.

## 🚀 Technologies Used

- Node.js
- Express
- Firebase/Firestore(as the database)
- dotenv (for environment variables)
- cors (for API access control)
- nodemon (for development)
- Zod (for input validation)
- Jest (for testing)
- Supertest (for api testing)

## 📂 Project Structure

```bash
finance-control-backend/
├── node_modules/
├── src/
│   ├── app.js
│   ├── firebase.js
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middlewares/
│   ├── schemas/
│   ├── tests/
│   └── config/
     
├── .gitignore
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

### 🔹 User Routes 
- `GET /users` → list all users
- `POST /users` → create a new user

### 🔹 Validation and Testing
- `Zod` → used for input validation
- `Jest` → used for testing
- `Supertest` -> used for http testing

## 🎯 Next Steps:
-   ~integrate Firebase to store transactions persistently (instead of in memory).~
-   ~Implement input validations (using zod).~
-   ~Add unit tests.~
-   ~Add firebase variables in .env~

- Authentication and Authorization using JWT
- Dashboard for financial analysis information

