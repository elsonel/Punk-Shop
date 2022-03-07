import app from '../src/app.js';
import request from 'supertest';

describe("App Server", () => {
  it('responds to /api/punks', async () => {
    const res = await request(app)
        .get("/api/punks")
        .send();
    expect(res.status).toEqual(200);
    expect(res.body).not.toBeNull();
  })

  it('responds to valid /api/punks/id', async () => {
    const res = await request(app)
        .get("/api/punks/9998")
        .send();
    expect(res.status).toEqual(200);
  })

  it('404 http status to invalid /api/punks/id', async () => {
    const res = await request(app)
        .get("/api/punks/1234")
        .send();
    expect(res.status).toEqual(404);
    expect(res.text).toEqual('Unable to find requested resource');
  })

});