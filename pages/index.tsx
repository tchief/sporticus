import type { NextPage } from "next";
import Link from "next/link";
import { Workout } from "../types";
import { supabase } from "../utils/supabase";

const Home: NextPage = ({ workouts }: any) => {
  return (
    <div className="w-full max-w-3xl mx-auto my-16 px-2">
      <p>Workouts</p>
      {workouts.map((workout: any) => (
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
