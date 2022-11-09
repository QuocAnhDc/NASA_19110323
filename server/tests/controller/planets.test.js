const request = require('supertest')
const app = require('../../src/app')

describe('test API get planets', ()=>{
  it('get planets', async()=>{
    jest.setTimeout(10000)
    const response = await request(app)
      .get('/planets')
    expect(response.statusCode).toBe(200)
  })
})