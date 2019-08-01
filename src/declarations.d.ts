declare namespace Express {
  interface Request {
    user?: UserPayload;
  }
}

declare interface UserPayload {
  id: string;
  username: string;
  role: string;
}
