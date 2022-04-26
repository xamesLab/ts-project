import express from 'express';
import controller from '../controllers/userControllers';

const router = express.Router();

router.post('/reg', controller.register);
router.post('/login', controller.login);
router.post('/unlog', controller.unlogin);
router.post('/validateToken', controller.validateToken);
router.post('/getUser', controller.getUser);
router.post('/getAllUser', controller.getAllUser);

export default router;