import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Tab5() {
  return (
    <View style={styles.container}>
      <Text>Tab Five</Text>
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
