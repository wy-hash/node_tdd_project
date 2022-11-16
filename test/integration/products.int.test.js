const request = require('supertest');
const app = require('../../server');
const newProduct = require('../../data/new-product.json');

it('POST /api/product', async () => {
  const response = await request(app).post('/api/products').send(newProduct);
  expect(response.statusCode).toBe(201);
  expect(response.body.name).toBe(newProduct.name);
  expect(response.body.description).toBe(newProduct.description);
});