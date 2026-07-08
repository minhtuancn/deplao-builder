import request from 'supertest';
import WebServer from '../../services/web/WebServer';

describe('WebServer', () => {
  it('serves health endpoint', async () => {
    const server = WebServer.createExpressApp();
    const res = await request(server).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});