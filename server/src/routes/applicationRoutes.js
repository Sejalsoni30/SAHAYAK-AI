import express from 'express';
import { createApplicationDraft, getUserApplications } from '../controllers/applicationController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', verifyToken, createApplicationDraft);
router.get('/', verifyToken, getUserApplications);

export default router;