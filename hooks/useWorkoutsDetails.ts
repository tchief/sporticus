import { useState } from "react";
import { Coach, Workout } from "../types";
import { NO_OP } from "../utils/utils";
import { useUser } from "./useUser";
import { useWorkouts } from "./useWorkouts";

export const useWorkoutDetailsForUser = ({ workoutId, coachId, refreshData = NO_OP }: any) => {
  const [coach, setCoach] = useState<Coach>();
  const [workout, setWorkout] = useState<Workout>();
  const [decision, setDecision] = useState<boolean>(false);

  const f = useWorkouts({ refreshData });
  const u = useUser();

  // @ts-ignore
  useEffect(async () => {
    const { user, error } = await f.getCoach(coachId);
    if (error) console.log(error);
    if (user) setCoach(user);
  }, []);
  // @ts-ignore
  useEffect(async () => {
    const { decision, error } = await f.getDecision(workoutId, u.id);
    if (error) console.log(error);
    if (decision) setDecision(decision);
  }, []);
  // @ts-ignore
  useEffect(async () => {
    const { workout, error } = await f.getWorkout(workoutId);
    if (error) console.log(error);
    if (workout) setWorkout(workout);
  }, []);

  return {
    coach,
    decision,
    workout,
    setCoach,
    setDecision,
    setWorkout,
  };
};
