import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import type { IHeader } from "./types";

export const Header = ({ distance, distanceUnit }: IHeader) => (
  <>
    <View style={styles.locationWrap}>
      <Text style={styles.locationText}>San Francisco</Text>
      <FontAwesome name="map-marker" size={24} color="blue" />
    </View>
    <Text style={styles.withinDistance}>
      Within {distance} {distanceUnit || "miles"}
    </Text>
  </>
);

const styles = StyleSheet.create({
  locationText: { marginRight: 16, fontWeight: "bold", fontSize: 32 },
  locationWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  withinDistance: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
});
