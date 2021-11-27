export interface Workout {
  id: string;
  max_people: number;
  date: string;
  latitude: number;
  longitude: number;
  coach_id: string;
  title: string;
  description: string;
}

export interface Coach {
  id: string;
  name: string;
  profile_url: string;
  instagram_url: string;
}

export interface Decision {
  id: string;
  user_id: string;
  workout_id: string;
  decision: boolean;
}
