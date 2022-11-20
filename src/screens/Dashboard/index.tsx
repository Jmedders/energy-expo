import { FlatList, StyleSheet, Text } from "react-native";
import { POICard } from "../../components/POICard";
import { SafeScreenView } from "../../components/common/SafeScreenView";
import { Header } from "./components";
import type { ExtendedPOIDetails } from "../../types";
import { usePoiFetch } from "../../hooks/usePoiFetch";
import { defaultParams } from "./consts";

export const DashboardScreen = () => {
  const { data: pois, error, isLoading } = usePoiFetch(defaultParams);

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
      {error && <Text style={styles.errorText}>{error}</Text>}
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
