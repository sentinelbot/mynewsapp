import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Bookmarks() {
  return (
    <View style={styles.container}>
      <Text>Bookmarks Screen</Text>
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
