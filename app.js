const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

/* the function used for connect sqlite */
const app = express();
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './finance.db' 
});

app.use(bodyParser.json());


/* the function used for define table sqlite databse */
const Transaction = sequelize.define('Transaction', {
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
  }
});


sequelize.sync();

/* the function used for store the transaction details in database */
app.post('/transactions', async (req, res) => {
  const { type, category, amount, date, description } = req.body;
  try {
    const transaction = await Transaction.create({ type, category, amount, date, description });
    res.status(201).json({ message: 'Transaction created successfully', transaction });
  } catch (error) {
    res.status(500).json({ message: 'Error creating transaction', error });
  }
});

/* the function for get all the transaction from database */
app.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving transactions', error });
  }
});


/* the function get specific transaction from database based on id */
app.get('/transactions/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findByPk(id);
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving transaction', error });
  }
});


/* the method for update specific transaction details in database */
app.put('/transactions/:id', async (req, res) => {
  const { id } = req.params;
  const { type, category, amount, date, description } = req.body;
  try {
    const transaction = await Transaction.findByPk(id);
    if (transaction) {
      transaction.type = type;
      transaction.category = category;
      transaction.amount = amount;
      transaction.date = date;
      transaction.description = description;
      await transaction.save();
      res.status(200).json({ message: 'Transaction updated successfully', transaction });
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating transaction', error });
  }
});

/* the method used for delete transaction from datase */
app.delete('/transactions/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findByPk(id);
    if (transaction) {
      await transaction.destroy();
      res.status(200).json({ message: 'Transaction deleted successfully' });
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting transaction', error });
  }
});


/* the function get summary of tranasctions from sqlite databse */
app.get('/summary', async (req, res) => {
  try {
    const income = await Transaction.sum('amount', { where: { type: 'income' } });
    const expense = await Transaction.sum('amount', { where: { type: 'expense' } });
    const balance = income - expense;
    res.status(200).json({ totalIncome: income, totalExpense: expense, balance });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving summary', error });
  }
});

/* the function used for run the server */
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
