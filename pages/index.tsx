import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useState } from "react";
import { useWorkouts } from "../hooks/useWorkouts";
import { DEFAULT_COACH, DEFAULT_WORKOUT, Workout } from "../types";
import { isWithinRadius } from "../utils/distance";

const Home: NextPage = ({ workouts }: any) => {
  const router = useRouter();
  const refreshData = () => router.replace(router.asPath);

  const [radius, setRadius] = useState(150000);
  const userLocation = { latitude: 50, longitude: 50 };

  const db = useWorkouts(refreshData);
  const handleAddWorkout = async () => await db.addWorkout(DEFAULT_COACH, DEFAULT_WORKOUT);

  return (
    <div className="w-full max-w-3xl mx-auto my-16 px-2">
      <p>Workouts</p>
      <input value={radius} onChange={(e) => setRadius(+e.target.value)} />
      <button onClick={handleAddWorkout}>Add workout</button>
      {workouts
        .filter((workout: Workout) => isWithinRadius(workout, userLocation, radius))
        .map((workout: any) => (
          <Link key={workout.id} href={`/${workout.id}`}>
            <a className="p-8 h-40 mb-4 shadow rounded text-xl flex">
              <pre>{JSON.stringify(workout, null, 2)}</pre>
            </a>
          </Link>
        ))}
    </div>
  );
};
export const getStaticProps = async () => {
  const db = useWorkouts();

  const { workouts } = await db.getAllWorkouts();

  return {
    props: {
      workouts,
    },
  };
};

export default Home;
