import axios from "axios";
import { useEffect, useState } from "react";

import { baseUrl } from "./consts";
import type { OpenChargeMapPoiData } from "./types";
import type { QueryParams } from "../../types";

export const usePoiFetch = (params: QueryParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<OpenChargeMapPoiData>([]);

  useEffect(() => {
    async function fetchPois(params: QueryParams) {
      try {
        const { data } = await axios.get<OpenChargeMapPoiData>(baseUrl, {
          params,
        });
        if (data) setData(data);
      } catch (errors: any) {
        if (errors?.message?.includes("403"))
          setError("You must provide a valid access key");
        else
          setError("We were unable to process your request, please try again");
      } finally {
        setIsLoading(false);
      }
    }
    fetchPois(params);
  }, [params]);

  return { data, error, isLoading };
};
