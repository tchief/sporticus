import haversine from "haversine-distance";

export const isWithinRadius = (
  a: { latitude: number; longitude: number },
  b: { latitude: number; longitude: number },
  radius: number
) => haversine(a, b) < radius;
