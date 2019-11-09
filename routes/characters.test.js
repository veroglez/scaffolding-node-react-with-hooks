import supertest from 'supertest';
import charactersMock from '@common/characters';
import app from '../server';

const request = supertest(app);

describe('/server:', () => {
  it('/characters', async (done) => {
    const response = await request.get('/characters');
    done();
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual(charactersMock.results);
  });

  it('/characters/:id', async (done) => {
    const response = await request.get('/characters/2');
    done();
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual(charactersMock.results[1]);
  });
});
