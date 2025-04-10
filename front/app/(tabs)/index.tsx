import React from "react";
import { StyleSheet, Text } from "react-native";
import { trpc } from "@/context/TRPCProvider";

import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "../../../back/";
import { ScrollView } from "react-native-gesture-handler";

type RouterOutput = inferRouterOutputs<AppRouter>;

export default function HomeScreen() {
  const drivers = trpc.drivers.useQuery();

  return (
    <ScrollView>
      {drivers.isLoading && <Text style={styles.text}>Loading drivers...</Text>}
      {drivers.error && (
        <Text style={styles.text}>
          Error loading drivers: {drivers.error.message}
        </Text>
      )}
      {drivers.data && drivers.data.length === 0 && (
        <Text style={styles.text}>No drivers found</Text>
      )}
      {drivers.data && drivers.data.length > 0 && (
        <>
          <Text style={styles.text}>Drivers:</Text>
          {drivers.data.map((driver) => (
            <Text key={driver.id} style={styles.text}>
              {driver.name}
            </Text>
          ))}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  text: {
    color: "white",
  },
});
