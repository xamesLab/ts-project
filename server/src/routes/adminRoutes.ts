import express from 'express';
import controller from '../controllers/adminControllers';

const router = express.Router();

router.post('/to-archive', controller.adminController.setUserStatus);
router.post('/del', controller.adminController.deleteUser);

export default router;
