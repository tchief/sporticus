import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { Coach, DEFAULT_USER, DEFAULT_WORKOUT, Workout } from "../types";
import { isWithinRadius } from "../utils/distance";
import { supabase } from "../utils/supabase";

const Home: NextPage = ({ workouts }: any) => {
  const router = useRouter();
  const refreshData = () => router.replace(router.asPath);

  const [radius, setRadius] = useState(150000);
  const user = useUser();
  const userLocation = { latitude: 50, longitude: 50 };

  const handleAddWorkout = async () => {
    if (!user.id) {
      const { data: users, error } = await supabase.from<Coach>("users").insert([DEFAULT_USER]);
      alert(JSON.stringify(error ?? users, null, 2));
    }

    const { data: workouts, error } = await supabase.from<Workout>("workoutz").insert([DEFAULT_WORKOUT]);
    alert(JSON.stringify(error ?? workouts, null, 2));

    refreshData();
  };

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
  const { data: workouts } = await supabase.from<Workout>("workoutz").select("*");

  return {
    props: {
      workouts,
    },
  };
};

export default Home;
