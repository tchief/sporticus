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
  is_coach?: boolean;
}

export interface Decision {
  id: string;
  user_id: string;
  workout_id: string;
  decision: boolean;
}

export const DEFAULT_WORKOUT: Omit<Workout, "id"> = {
  max_people: 10,
  date: "2021-11-29T05:11:03+00:00",
  latitude: 27.4829,
  longitude: 53.9365,
  coach_id: "f7a3658c-6f8f-437b-a799-ce3f00498b74",
  title: "Stretching",
  description: "We'll do stretching",
};

export const DEFAULT_COACH: Coach = {
  id: "f7a3658c-6f8f-437b-a799-ce3f00498b74",
  name: "Arnold",
  instagram_url: "https://www.instagram.com/schwarzenegger/",
  profile_url:
    "https://manofmany.com/wp-content/uploads/2019/03/Arnold-Schwarzeneggers-Diet-and-Workout-Plan.jpg",
  is_coach: true,
};

export const DEFAULT_USER: Omit<Coach, "profile_url" | "instagram_url"> = {
  id: "b5a1c9f0-69fa-4af5-96b8-ab80d04312ef",
  name: "Emily",
  is_coach: false,
};
