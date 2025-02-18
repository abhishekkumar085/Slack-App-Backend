import { StatusCodes } from 'http-status-codes';

import {
  editChannelByIdService,
  getChannelByIdService
} from '../services/channelService.js';
import {
  customErrorResponse,
  internalErrorResponse,
  successResponse
} from '../utils/common/responseObjects.js';

export const getChannelByIdController = async (req, res) => {
  try {
    const response = await getChannelByIdService(
      req.params.channelId,
      req.user
    );
    return res
      .status(StatusCodes.OK)
      .json(successResponse(response, 'Channel fetched successfully'));
  } catch (error) {
    console.log('get channel by id controller error', error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
  }
};

export const updateChannelController = async (req, res) => {
  try {
    const channelId = req.params.channelId;
    const name = req.body;

    const response = await editChannelByIdService(channelId, name);
    return res
      .status(StatusCodes.OK)
      .json(successResponse(response, 'resource updated successfully!'));
  } catch (error) {
    console.log(error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
  }
};
