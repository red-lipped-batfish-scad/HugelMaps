const express = require('express');
const feedController = express.Router();

const db = require('../models/model');

// get entire DB
feedController.getFeed = (req, res, next) => {
  const text = 'SELECT * FROM feed;';

  db.query(text)
    .then((dbResults) => {
      // store on res.locals
      // console.log(dbResults.rows[0]);
      res.status(200).json(dbResults.rows[0]);
      return next();
    })
    .catch((err) => {
      return next({
        log: `feedController.getFeed: ERROR: ${err}`,
        message: { err: 'Error occured in feedController.getFeed' }
      });
    });

  // res.locals.student = 'Jefferey';
  // res.status(200).send(res.locals.student);
  // console.log(res);
  // res.sendStatus(200);
  // return next();
};

feedController.test = (req, res, next) => {
  const text = 'SELECT * FROM feed;';

  db.query(text)
    .then((dbResults) => {
      // store on res.locals
      // console.log(dbResults.rows[0]);
      res.status(200).json(dbResults.rows[0]);
      return next();
    })
    .catch((err) => {
      return next({
        log: `feedController.getFeed: ERROR: ${err}`,
        message: { err: 'Error occured in feedController.getFeed' }
      });
    });

  // res.locals.student = 'Jefferey';
  // res.status(200).send(res.locals.student);
  // console.log(res);
  // res.sendStatus(200);
  // return next();
};

// access req.body object to INSERT
feedController.postGive = (req, res, next) => {
  const { material, detail, quantity, location, contact } = req.body;

  const text =
    'INSERT INTO feed (material, detail, quantity,location, contact) VALUES ($1, $2, $3, $4, $5';
  const values = [material, detail, quantity, location, contact];

  db.query(text, values)
    .then((dbResults) => {
      // store on res.locals
      console.log(dbResults);
      next();
    })
    .catch((err) => {
      return next({
        log: `feedController.postGive: ERROR: ${err}`,
        message: { err: 'Error occured in feedController.postGive' }
      });
    });
};

feedController.fulfilledGive = (req, res, next) => {};

module.exports = feedController;
