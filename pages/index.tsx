import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { Workout } from "../types";
import { isWithinRadius } from "../utils/distance";
import { supabase } from "../utils/supabase";

const Home: NextPage = ({ workouts }: any) => {
  const [radius, setRadius] = useState(150000);
  const userLocation = { latitude: 50, longitude: 50 };

  return (
    <div className="w-full max-w-3xl mx-auto my-16 px-2">
      <p>Workouts</p>
      <input value={radius} onChange={(e) => setRadius(+e.target.value)} />
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
