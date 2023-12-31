const app = require('./app');
const supertest = require('supertest');
const request = supertest(app);
let server;

beforeAll((done) => {
  server = app.listen(4000, done);
});

afterAll((done) => {
  server.close(done);
});

it('gets the test endpoint', async () => {
  const response = await request.get('/');

  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello World!');
});
