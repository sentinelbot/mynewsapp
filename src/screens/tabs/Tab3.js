import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Tab3() {
  return (
    <View style={styles.container}>
      <Text>Tab three</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
