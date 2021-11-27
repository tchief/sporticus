import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import Link from "next/link";
import { Coach, Workout } from "../types";

const WorkoutDetails = ({ workout }: { workout: Workout }) => {
  const [coach, setCoach] = useState<Coach>();

  const getCoach = async () => {
    const { data } = await supabase.from<Coach>("users").select("*").eq("id", workout.coach_id).single();
    console.log(data);
    setCoach(data!);
  };

  // @ts-ignore
  useEffect(getCoach, []);

  if (!coach) return <p>Loading</p>;
  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-3xl mb-6">{coach?.name}</h1>
      <Link href={coach.instagram_url}>
        <a>Instagram</a>
      </Link>
      <pre>{JSON.stringify(coach, null, 2)}</pre>
      <pre>{JSON.stringify(workout, null, 2)}</pre>
    </div>
  );
};

export const getStaticPaths = async () => {
  const { data: workouts } = await supabase.from("workoutz").select("id");

  const paths = workouts?.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }: any) => {
  const { data: workout } = await supabase.from("workoutz").select("*").eq("id", id).single();

  return {
    props: {
      workout,
    },
  };
};

export default WorkoutDetails;
