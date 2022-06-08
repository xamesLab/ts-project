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

router.post('/createProfile', extractJWT, controller.createProfile);
router.get('/getProfile', extractJWT, controller.getProfile);
router.get('/getAllProfile', extractJWT, controller.getAllProfile);
router.delete('/deleteProfile', extractJWT, controller.deleteProfile);
router.post('/updateProfile', extractJWT, controller.updateProfile);

router.post('/create-key', extractJWT, controller.keyController.createKey);
router.delete('/delete-key', extractJWT, controller.keyController.deleteKey);
router.post('/update-key', extractJWT, controller.keyController.updateKey);
router.get('/getkey', extractJWT, controller.keyController.getKey);

export default router;
