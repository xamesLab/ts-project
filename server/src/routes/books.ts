import express from 'express';
import controller from '../controllers/book';

const router = express.Router();

router.post('/create', controller.createBook);
router.get('/getAll', controller.getAllBooks);

export default router;
