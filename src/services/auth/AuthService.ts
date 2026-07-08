import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'deplao-dev-secret-change-me';

class AuthService {
  public static async hashPassword(plain: string): Promise<string> {
    return bcrypt.hash(plain, 10);
  }

  public static async verifyPassword(plain: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plain, hash);
  }

  public static signToken(payload: { userId: number; role: string }): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
  }

  public static verifyToken(token: string): any {
    return jwt.verify(token, JWT_SECRET);
  }
}

export default AuthService;