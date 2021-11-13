import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { EventProperties, EventsProperties } from '../models/events';
import { api } from '../services/api';

type UseEventsProperties = {
  type: string;
};

const fetchEvents = async (type: string) => {
  const { data } = await api.get<EventsProperties>(`/events?type=${type}`);

  return data.events;
};

export function useEvents({ type }: UseEventsProperties) {
  return useQuery<EventProperties[], AxiosError>(['events', type], () =>
    fetchEvents(type)
  );
}
