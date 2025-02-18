import Channel from '../schema/channel.js';
import crudRepository from './crudRepository.js';

const channelRepository = {
  ...crudRepository(Channel),
  getChannelWithWorkspaceDetails: async function (channelId) {
    const channel = await Channel.findById(channelId).populate('workspaceId');
    return channel;
  },
  updateChannelRepository: async function (channelId, data) {
    const response = await Channel.findByIdAndUpdate(channelId, data, {
      new: true,
      runValidators: true
    });
    console.log('RESPONSE REPOSITORY', response);
    return response;
  }
};

export default channelRepository;
