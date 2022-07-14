import { Router } from 'express';

const authRouter = Router();

authRouter.get('/', (req, res) => {
  res.send('Hello from auth');
});

export default authRouter;
