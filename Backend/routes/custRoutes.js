const express = require('express');

// eslint-disable-next-line no-unused-vars
const { loginCust, logoutCust } = require('./customer/loginCustomer');
const signupCustomer = require('./customer/signupCustomer');
const statesName = require('./customer/states');

const Router = express.Router();

// Login for the customer
Router.post('/loginCustomer', async (req, res) => {
  const value = await loginCust(req, res);
  return value;
});

// Signup for the customer
Router.post('/signupCustomer', async (req, res) => {
  const value = await signupCustomer(req, res);
  return value;
});

// Logout for the customer
Router.post('/logoutCustomer', async (req, res) => {
  const value = await logoutCust(req, res);
  return value;
});

// Give state names
Router.get('/stateNames', async (req, res) => {
  const value = await statesName(req, res);
  return value;
});
module.exports = Router;
