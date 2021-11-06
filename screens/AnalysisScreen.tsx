import { StyleSheet, Text, View } from "react-native";

import { Button } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { RootStackParamList } from "../App";
import { colors } from "../colors";
import { SafeAreaView } from "react-native-safe-area-context";

type AnalysisScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "Analysis"
>;

export function AnalysisScreen({}) {
  return (
    <SafeAreaView style={styles.container}>
        <Button
        style={styles.addButton}
        onPress={() => console.log("Adding Company")}
        labelStyle={styles.addText}
      >
        +
      </Button>
      <Button
        style={styles.button}
        onPress={() => console.log("Running Analysis")}
        labelStyle={styles.text}
      >Run analysis</Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg.secondary,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: colors.brand.tertiary,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 50,
  },
  text: {
    color: colors.text.primary,
  },
  addText: {
    color: colors.text.secondary,
    fontSize: 24,
  },
  addButton: {
      borderRadius: 100,
      backgroundColor: colors.brand.primary,
      padding: 24,
      marginBottom: 20,

  }
});
