
# Personal Expense Tracker
The objective is to develop a RESTful API for managing personal financial records, allowing users to track their income and expenses, retrieve past transactions, and get summaries by category or time period. The project will use Node.js and Express.js for the backend, and the database can SQLite.


## Tools and Technologies:
Node.js: For the server-side JavaScript runtime.

Express.js: For building the API routes.

SQLite : As the database to store financial records.

Sequelize: ORM for SQLite.

Postman: For testing API endpoints.





## Database Setup

Using SQLite, create tables:

transactions:
id: Auto-incremented primary key

type: Either "income" or "expense"

category: Text field for the category (e.g., "salary", "food", etc.)

amount: The amount for the transaction

date: Date of the transaction

description: Optional description field


categories:

id: Auto-incremented primary key

name: Name of the category (e.g., "food", "salary")

type: Either "income" or "expense"
## API Endpoints
POST /transactions: Adds a new transaction (income or expense).

GET /transactions: Retrieves all transactions.

GET /transactions/:id: Retrieves a transaction by ID.

PUT /transactions/:id: Updates a transaction by ID.

DELETE /transactions/:id: Deletes a transaction by ID.

GET /summary: Retrieves a summary of transactions, such as total income, total expenses, and balance.

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node app.js
```


## Setting Up the Project:

Install my-project with npm

```bash
mkdir personal-expense-tracker

cd personal-expense-tracker

npm init -y
```

```bash
npm install express sequelize sqlite3 body-parser

```
```bash
npm install express mongoose body-parser

```

    
## Screenshots

POST /transactions

![App Screenshot](https://res.cloudinary.com/dnml2vs6t/image/upload/v1729661462/vjgtfa2ebs8ulh9p69ko.png)

GET /transactions

![App Screenshot](https://res.cloudinary.com/dnml2vs6t/image/upload/v1729661537/ebxlpgyxaxu31h9zpsvz.png)

GET /transactions/:id

![App Screenshot](https://res.cloudinary.com/dnml2vs6t/image/upload/v1729661617/vraonn7z25e5doftcwjk.png)

PUT /transactions/:id

![App Screenshot](https://res.cloudinary.com/dnml2vs6t/image/upload/v1729661669/z5scszmlbamfggomkgii.png)

DELETE /transactions/:id

![App Screenshot](https://res.cloudinary.com/dnml2vs6t/image/upload/v1729661720/omgdsptlbj0w7frz7glk.png)

GET /summary

![App Screenshot](https://res.cloudinary.com/dnml2vs6t/image/upload/v1729661769/p1gldang16dqaa8iihve.png)
