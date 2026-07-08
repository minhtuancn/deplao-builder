import { Request, Response, NextFunction } from 'express';
import AuthService from './AuthService';

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'No token' });
  }
  try {
    const payload = AuthService.verifyToken(header.slice(7));
    (req as any).user = payload;
    next();
  } catch {
    return res.status(401).json({ success: false, error: 'Invalid token' });
  }
}