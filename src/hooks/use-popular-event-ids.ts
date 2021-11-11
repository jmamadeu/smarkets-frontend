import { useQuery } from 'react-query';
import { getPopularEventIds } from '../services/events';

export function usePopularEventIds() {
  return useQuery('popular-event-ids', () => getPopularEventIds());
}
