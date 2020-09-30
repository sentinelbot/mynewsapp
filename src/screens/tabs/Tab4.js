import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Tab4() {
  return (
    <View style={styles.container}>
      <Text>Tab Four</Text>
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
