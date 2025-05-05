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
- `Zod` → input validation
- `Jest` → unit testing
- `Supertest`→  http testing

## 🔐Autheentication and Authorization
The aplication includes a authentication and authorization system using JWT (Json Web Tokens).
- `JWT` → used for authentication and authorization
- `POST /login` → authenticate a user and return a JWT token
- All transactions routes (`/transactions`) are now protected by middleware: a valid token is required in the header
- Only authenticated users can perform operations

## 🔑 JWT & Security
- User passwords are hashed using the `bcryptjs`  before stored in Firebase.
- The JWT Token includes the user's `id` and `email` 
- The JWT secret Key is securely stored in the `.env` file.
```bash
#.env
SECRET_KEY=your_secret_key
USER_EMAIL=your_user_email
USER_PASSWORD=your_user_password
```


## 🎯 Next Steps:
-   ~integrate Firebase to store transactions persistently (instead of in memory).~
-   ~Implement input validations (using zod).~
-   ~Add unit tests.~
-   ~Add firebase variables in .env~

- ~Authentication and Authorization using JWT~
- Dashboard for financial analysis information
- Frontend integration

---

dEVeloPed by: [@CarolFons](https://github.com/carolfons)

