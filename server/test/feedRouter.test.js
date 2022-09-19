// import { request } from 'express';
const request = require('supertest');
const feedRouter = require('../routes/feedRouter');
const server = require('../server');

// Connecting to database
const { Pool } = require('pg');
const PG_URI =
  'postgres://yzgszbpv:9Euzu8gFAbJM-0QpB5yHtz0RDzbG6Odx@jelani.db.elephantsql.com/yzgszbpv';
const pool = new Pool({
  connectionString: PG_URI
});

describe('TEST SUITE FOR FEED ROUTE', () => {
  describe('GET /feed', () => {
    describe('when /feed is accessed respond with our database data', () => {
      // Should respond with a json object containing the data

      test('Status(200) && Properties of [material, detail, quantity, location, contact]', async () => {
        /** Test Notes
         * request() is a superTest function.
         * We're passing in the http server object feedRouter
         * Then performing the get request to the /feed endpoint
         *
         * Supertest is going to take the http server then bind the feedRouter to whatever port supertest wants to bind it to
         * Then we just initialize the get request and let supertest handle the rest
         *
         * We initialized a response object that contains all the details from the http response
         * THEN we can use that with the Jest expect function
         */
        const response = await request(server).get('/feed/test');
        expect(response.body).toHaveProperty('material');
        expect(response.body).toHaveProperty('detail');
        expect(response.body).toHaveProperty('quantity');
        expect(response.body).toHaveProperty('location');
        expect(response.body).toHaveProperty('contact');

        // console.log(response);
        // expect(response.statusCode).toBe(200);
        // expect(response.text).toBe('Jefferey');
        // expect(true).toBe(true);
      });
      // Should specify json in the content type header
    });
  });
});
