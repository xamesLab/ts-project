import express from 'express';
import controller from '../controllers/userControllers';
import extractJWT from '../middleware/extractJWT';

const router = express.Router();

router.post('/reg', controller.register);
router.post('/login', controller.login);
router.post('/unlog', controller.unlogin);
router.post('/validateToken', extractJWT, controller.validateToken);
router.post('/getUser', controller.getUser);
router.post('/getAllUser', extractJWT, controller.getAllUser);

export default router;