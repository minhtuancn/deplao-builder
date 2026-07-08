import AuthService from '../../services/auth/AuthService';

describe('AuthService', () => {
  it('hashes and verifies password', async () => {
    const hash = await AuthService.hashPassword('secret123');
    expect(await AuthService.verifyPassword('secret123', hash)).toBe(true);
    expect(await AuthService.verifyPassword('wrong', hash)).toBe(false);
  });

  it('issues and verifies JWT', async () => {
    const token = AuthService.signToken({ userId: 1, role: 'admin' });
    const payload = AuthService.verifyToken(token);
    expect(payload.userId).toBe(1);
    expect(payload.role).toBe('admin');
  });
});