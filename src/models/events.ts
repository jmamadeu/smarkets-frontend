export const EVENTS_TYPES = [
  { key: 'baseball_match', name: 'Baseball' },
  { key: 'basketball_match', name: 'Basketball' },
  { key: 'boxing_match', name: 'Boxing' },
  { key: 'call_of_duty_match', name: 'Call of duty' },
  { key: 'cycling', name: 'Cycling' },
  { key: 'darts_match', name: 'Darts Match' },
  { key: 'football_match', name: 'Football' },
  { key: 'golf_match', name: 'Golf' },
  { key: 'greyhound_racing_race', name: 'Greyhound Racing Race' },
  { key: 'handball_match', name: 'Handball' },
  { key: 'horse_racing_race', name: 'Horse_racing_race' },
  { key: 'ice_hockey_match', name: 'Ice hockey' },
  { key: 'league_of_legends_match', name: 'League of Legends' },
  { key: 'mma_match', name: 'MMA' },
  { key: 'motorsports_race', name: 'Motorsports Race' },
  { key: 'rowing', name: 'Rowing' },
  { key: 'tennis_match', name: 'Tennis' },
  { key: 'volleyball_match', name: 'Volleyball' }
];

export type EventProperties = {
  id: string;
  name: string;
  short_name: string;
  state: string;
  start_date: Date;
  type: string;
};

export type EventsPropertiesResponse = {
  events: EventProperties[];
};
