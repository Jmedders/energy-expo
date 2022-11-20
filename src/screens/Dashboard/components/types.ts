import type { QueryParams } from "../../../types";

export interface IHeader {
  /** The actual distance in miles or km */
  distance: QueryParams["distance"];
  /** The type of unit distance is measured in. Either miles or km */
  distanceUnit: QueryParams["distanceunit"];
}
