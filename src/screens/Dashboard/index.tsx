import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import axios from "axios";

import type { OpenChargeMapPoiData, QueryParams } from "./types";
import { baseUrl, defaultParams } from "./consts";
import { POICard } from "../../components/POICard";
import { SafeScreenView } from "../../components/common/SafeScreenView";
import { Header } from "./components";
import { ExtendedPOIDetails } from "../../types/POIDetails";

export const DashboardScreen = () => {
  /* TODO: If desired, could abstract fetch logic to reusable hook. E.g.
  const { data, loading, error } = useFetchPois(params) */
  const [pois, setPois] = useState<OpenChargeMapPoiData>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPois(params: QueryParams) {
      try {
        setIsLoading(true);
        const { data } = await axios.get<OpenChargeMapPoiData>(baseUrl, {
          params,
        });
        if (data) setPois(data);
      } catch (errors: any) {
        if (errors?.message?.includes("403"))
          setError("You must provide a valid access key");
        else
          setError("We were unable to process your request, please try again");
      } finally {
        setIsLoading(false);
      }
    }
    fetchPois(defaultParams);
  }, []);

  return (
    <SafeScreenView style={styles.wrapper}>
      <Header
        distance={defaultParams.distance}
        distanceUnit={defaultParams.distanceunit}
      />
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {pois.length ? (
            <FlatList
              data={pois}
              keyExtractor={(item) => String(item.ID)}
              renderItem={({ item }: { item: ExtendedPOIDetails }) => (
                <POICard poi={item} />
              )}
            />
          ) : (
            <Text>There are currently no stations nearby</Text>
          )}
        </>
      )}
      {!error && <Text style={styles.errorText}>{error}</Text>}
    </SafeScreenView>
  );
};

const styles = StyleSheet.create({
  errorText: {
    // TODO: Use color from global constants (e.g. colors.red.errorText)
    color: "#fd0000",
  },
  wrapper: { paddingHorizontal: 12, marginBottom: 80 },
});
