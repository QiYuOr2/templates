const app = require('../app');
const request = require('supertest');
const { expect } = require('chai');

describe('# App test', () => {
  it('# GET /hello', async () => {
    const res = await request(app).get('/hello');
    expect(res.text).eq('Hello');
  });

  it('# GET /hello/world', async () => {
    const res = await request(app).get('/hello/world');
    expect(res.text).eq('World');
  });
});
