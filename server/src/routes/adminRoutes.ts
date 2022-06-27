import express from 'express';
import controller from '../controllers/adminControllers';

const router = express.Router();

router.post('/to-archive', controller.adminController.setUserStatus);

export default router;
