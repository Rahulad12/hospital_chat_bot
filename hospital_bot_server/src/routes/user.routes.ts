import { Router } from "express";
import { createUserController, loginUserController } from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/", createUserController);
userRouter.post("/login", loginUserController);

export default userRouter;