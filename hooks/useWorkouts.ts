import { Coach, Decision, DEFAULT_USER, DEFAULT_WORKOUT, Workout } from "../types";
import { TABLE_DECISIONS, supabase, TABLE_USERS, TABLE_WORKOUTS } from "../utils/supabase";
import { NO_OP } from "../utils/utils";

export const useWorkouts = ({ refreshData = NO_OP }: any) => {
  const addUser = async (userToAdd: Coach) => {
    const { data: users, error } = await supabase
      .from<Coach>(TABLE_USERS)
      .insert([userToAdd ?? DEFAULT_USER]);
    console.log(JSON.stringify(error ?? users, null, 2));

    refreshData();

    return { users, error };
  };

  const addWorkout = async (userToAdd: Coach, workoutToAdd: Workout) => {
    if (!userToAdd.id) {
      const { data: users, error } = await supabase
        .from<Coach>(TABLE_USERS)
        .insert([userToAdd ?? DEFAULT_USER]);
      console.log(JSON.stringify(error ?? users, null, 2));
    }

    const { data: workouts, error } = await supabase
      .from<Workout>(TABLE_WORKOUTS)
      .insert([workoutToAdd ?? DEFAULT_WORKOUT]);
    console.log(JSON.stringify(error ?? workouts, null, 2));

    refreshData();

    return { workouts, error };
  };

  const setDecision = async (userId: string, workoutId: string, decision: boolean) => {
    const { data: decisions, error } = await supabase
      .from<Decision>(TABLE_DECISIONS)
      .insert([{ user_id: userId, workout_id: workoutId, decision }]);
    console.log(JSON.stringify(error ?? decisions, null, 2));
    const decisionReturned = decisions?.length ? decisions[0].decision : null;
    return { decision: decisionReturned, error };
  };

  return {
    addWorkout,
    addUser,
    setDecision,

    getAllWorkouts,
    getWorkoutsForCoach,
    getWorkout,

    getAllCoaches,
    getCoach,

    getDecision,
    getPeopleCountForWorkout,
  };
};

const getAllWorkouts = async () => {
  const { data: workouts, error } = await supabase.from<Workout>(TABLE_WORKOUTS).select("*");
  return { workouts, error };
};

const getWorkoutsForCoach = async (coachId: string) => {
  const { data: workouts, error } = await supabase
    .from<Workout>(TABLE_WORKOUTS)
    .select("*")
    .eq("coach_id", coachId);
  return { workouts, error };
};

const getWorkout = async (workoutId: string) => {
  const { data: workout, error } = await supabase
    .from<Workout>(TABLE_WORKOUTS)
    .select("*")
    .eq("id", workoutId)
    .single();
  return { workout, error };
};

const getAllCoaches = async () => {
  const { data: users, error } = await supabase
    .from<Coach>(TABLE_USERS)
    .select("*")
    .eq("is_coach", true);
  return { users, error };
};

const getCoach = async (coachId: string) => {
  const { data: user, error } = await supabase
    .from<Coach>(TABLE_USERS)
    .select("*")
    .eq("id", coachId)
    .single();
  return { user, error };
};

const getDecision = async (workoutId: string, userId: string) => {
  const { data: decisions, error } = await supabase
    .from<Decision>(TABLE_DECISIONS)
    .select("*")
    .eq("workout_id", workoutId)
    .eq("user_id", userId);
  const decision = decisions?.length ? decisions[0].decision : null;
  return { decision, error };
};

const getPeopleCountForWorkout = async (workoutId: string) => {
  const { data: decisions, error } = await supabase
    .from<Decision>(TABLE_DECISIONS)
    .select("*")
    .eq("workout_id", workoutId);
  const total = decisions?.length ?? 0;
  return { total, error };
};
