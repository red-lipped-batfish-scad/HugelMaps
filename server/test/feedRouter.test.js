// import { request } from 'express';
const request = require('supertest');
const feedRouter = require('../routes/feedRouter');
const server = require('../server');

describe('GET /feed', () => {
  describe('when /feed is accessed respond with our database data', (done) => {
    // Should respond with a json object containing the data

    test('should respond with a status code of 200', async () => {
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
      const response = await request(server).get('/feed/');
      // expect(true).toBe(true).end;
      expect(response.status).toBe(200);
    });

    // Should specify json in the content type header
  });
});
