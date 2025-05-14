import { Router } from "express";
import { login, register } from "./auth.controller";
import { validate } from "../../middleware/validation";
import { registerSchema } from "./auth.zodSchema";


const router= Router();

router.post('/register',  register);
router.post('/login',  login);

export const authRoute = router;