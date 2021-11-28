import React from "react";
import Link from "next/link";
import { Workout } from "../types";
import { useUser } from "../hooks/useUser";
import { useWorkouts } from "../hooks/useWorkouts";
import { useWorkoutDetailsForUser } from "../hooks/useWorkoutsDetails";

const WorkoutDetails = ({ workout }: { workout: Workout }) => {
  const user = useUser();
  const { coach, decision, setDecision } = useWorkoutDetailsForUser({
    workoutId: workout.id,
    coachId: workout.coach_id,
  });

  const handleGoToWorkout = async () => await setDecision(user.id, workout.id, true);

  if (!coach) return <p>Loading</p>;
  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-3xl mb-6">{coach?.name}</h1>
      <Link href={coach.instagram_url}>
        <a>Instagram</a>
      </Link>
      <pre>{JSON.stringify(coach, null, 2)}</pre>
      <pre>{JSON.stringify(workout, null, 2)}</pre>
      <button onClick={handleGoToWorkout} disabled={decision}>
        {decision ? "Already attend" : "I'll go"}
      </button>
    </div>
  );
};

export const getStaticPaths = async () => {
  const db = useWorkouts();

  const { workouts } = await db.getAllWorkoutsIds();

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
  const db = useWorkouts();

  const { workout } = await db.getWorkout(id);

  return {
    props: {
      workout,
    },
  };
};

export default WorkoutDetails;
