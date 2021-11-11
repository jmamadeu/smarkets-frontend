import { api } from './api';

export const getPopularEventIds = async () => {
  const eventsResponse = await api.get('popular/event_ids/sport/football/');

  return eventsResponse;
};
