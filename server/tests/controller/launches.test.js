const request = require('supertest')
const app = require('../../src/app')

describe('test API launches', ()=>{
  it('API get launches', async()=>{
    jest.setTimeout(10000)
    const response = await request(app)
      .get('/launches')
    expect(response.statusCode).toBe(200)
  });
  it('API post new launches success', async()=>{
    jest.setTimeout(10000)
    const response = await request(app)
      .post('/launches')
      .send({
        mission: 'aa',
        rocket:'bb',
        target:'cc',
        launchDate: Date.now()
      })
    expect(response.statusCode).toBe(201)
  });
  it('API post new launches without value', async()=>{
    jest.setTimeout(10000)
    const response = await request(app)
      .post('/launches')
    expect(response.statusCode).toBe(400)
  });
  it('API post new launches without value', async()=>{
    jest.setTimeout(10000)
    const response = await request(app)
      .post('/launches')
      .send({
        mission: 'aa',
        rocket:'bb',
        target:'cc',
      })
    expect(response.statusCode).toBe(400)
  });
  it('API delete launches and id is exits', async()=>{
    jest.setTimeout(10000)
    const response = await request(app)
      .delete('/launches/101')
    expect(response.statusCode).toBe(200)
  });
  it('API delete launches but id not exits', async()=>{
    jest.setTimeout(10000)
    const response = await request(app)
      .delete('/launches/102')
    expect(response.statusCode).toBe(400)
  });
})