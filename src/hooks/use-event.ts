import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { EventProperties, EventsPropertiesResponse } from '../models/events';
import { api } from '../services/api';

const fetchEvent = async (id: EventProperties['id']) => {
  const { data } = await api.get<EventsPropertiesResponse>(`/events/${id}`);

  return data.events?.[0];
};

export function useEvent(id: EventProperties['id']) {
  return useQuery<EventProperties, AxiosError>(['event', id], () =>
    fetchEvent(id)
  );
}
