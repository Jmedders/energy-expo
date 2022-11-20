import type { QueryParams } from "../../types";

export const defaultParams: QueryParams = {
  countrycode: "US",
  distance: 5,
  maxresults: 20,
  verbose: false,
  // TODO: use env variable
  key: "123",
  /** TODO: could easily fetch user's location via {@link https://docs.expo.dev/versions/latest/sdk/location/ | Expo Location API}*/
  // for now, just using random coordinates for San Francisco
  latitude: 37.7749,
  longitude: -122.4194,
};
