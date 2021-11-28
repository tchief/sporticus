import { useState, useEffect } from "react";
import { Coach, Decision, Workout } from "../types";
import { supabase, TABLE_DECISIONS } from "../utils/supabase";
import { NO_OP } from "../utils/utils";
import { useUser } from "./useUser";
import { useWorkouts } from "./useWorkouts";

export const useWorkoutDetailsForUser = ({ workoutId, coachId, refreshData = NO_OP }: any) => {
  const [coach, setCoach] = useState<Coach>();
  const [workout, setWorkout] = useState<Workout>();
  const [decision, setDecision] = useState<boolean>(false);

  const f = useWorkouts({ refreshData });
  const u = useUser();

  const setDecisionToDb = async (userId: string, workoutId: string, decision: boolean) => {
    const { data: decisions, error } = await supabase
      .from<Decision>(TABLE_DECISIONS)
      .insert([{ user_id: userId, workout_id: workoutId, decision }]);
    console.log(JSON.stringify(error ?? decisions, null, 2));

    const decisionReturned = decisions?.length ? decisions[0].decision : null;
    if (decisionReturned) setDecision(decisionReturned);

    return { decision: decisionReturned, error };
  };

  // @ts-ignore
  useEffect(async () => {
    console.log("COACH_ID " + coachId);
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
    setDecision: setDecisionToDb,
  };
};
