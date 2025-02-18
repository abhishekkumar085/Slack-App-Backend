import express from 'express';

import {
  getChannelByIdController,
  updateChannelController
} from '../../controllers/channelController.js';
import { isAuthenticated } from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/:channelId', isAuthenticated, getChannelByIdController);
router.patch('/:channelId', updateChannelController);

export default router;
