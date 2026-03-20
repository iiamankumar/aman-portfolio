import 'express';
declare global {
  namespace Express {
    interface User {
      claims?: any;
      access_token?: string;
      refresh_token?: string;
      expires_at?: number;
    }
  }
}