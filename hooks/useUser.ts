import { DEFAULT_COACH, DEFAULT_USER } from "./../types";
import { Coach } from "../types";

export const useUser = (): Pick<Coach, "id"> => DEFAULT_USER;
export const useCoach = (): Pick<Coach, "id"> => DEFAULT_COACH;
