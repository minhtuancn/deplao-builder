import request from 'supertest';
import express from 'express';
import { AuthRoutes } from '../../services/auth/AuthRoutes';
import authMiddleware from '../../services/auth/authMiddleware';

const app = express();
app.use(express.json());
app.use('/api/auth', AuthRoutes);
app.get('/api/protected', authMiddleware, (req, res) => res.json({ ok: true }));

describe('AuthRoutes', () => {
  it('login fails with bad creds', async () => {
    const res = await request(app).post('/api/auth/login').send({ username: 'nope', password: 'x' });
    expect(res.status).toBe(401);
  });

  it('protected rejects missing token', async () => {
    const res = request(app).get('/api/protected');
  });
});