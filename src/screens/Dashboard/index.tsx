import { Link } from "@react-navigation/native";
import { useEffect } from "react";
import { Text } from "react-native";
import { SafeScreenView } from "../../components/common/SafeScreenView";

export const DashboardScreen = () => (
  <SafeScreenView>
    <Text>Dashboard</Text>
    <Link to={{ screen: "StationDetails" }}>
      Check out the station details route
    </Link>
  </SafeScreenView>
);
