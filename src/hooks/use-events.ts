import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { EventProperties, EventsPropertiesResponse } from '../models/events';
import { api } from '../services/api';
import { queryClient } from '../services/react-query';

type UseEventsProperties = {
  type: string;
};

const fetchEvents = async (type: string) => {
  const { data } = await api.get<EventsPropertiesResponse>(
    `/events?type=${type}`
  );

  return data.events;
};

export function useEvents({ type }: UseEventsProperties) {
  return useQuery<EventProperties[], AxiosError>(
    ['events', type],
    () => fetchEvents(type),
    {
      onSuccess: (events) => {
        events.forEach((event) => {
          queryClient.setQueryData(['event', event.id], event);
        });
      }
    }
  );
}
