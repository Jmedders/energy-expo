import { StyleSheet, Text, View } from "react-native";
import { IPOICard } from "./types";

export const POICard = ({ poi }: IPOICard) => (
  <View style={styles.cardWrap} key={poi.ID}>
    <Text style={{ fontWeight: "bold" }}>{poi.AddressInfo.Title}</Text>
    <Text>{poi.AddressInfo.AddressLine1}</Text>
    <Text>
      {poi.AddressInfo.Town}, {poi.AddressInfo.StateOrProvince}{" "}
      {poi.AddressInfo.Postcode}
    </Text>
    {poi.NumberOfPoints && (
      <Text>Number of stations: {poi.NumberOfPoints}</Text>
    )}
    {poi.UsageCost && <Text>Cost: {poi.UsageCost}</Text>}
    {poi.AddressInfo.Distance && (
      <Text>
        Distance: {Math.round(poi.AddressInfo.Distance * 100) / 100}{" "}
        {poi.AddressInfo.DistanceUnit === 2 ? "miles" : "km"}
      </Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  cardWrap: {
    padding: 16,
    backgroundColor: "pink",
    margin: 8,
  },
});
