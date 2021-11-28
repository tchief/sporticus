import { DEFAULT_USER } from "./../types";
import { Coach } from "../types";

export const useUser = (): Pick<Coach, "id"> => DEFAULT_USER;
