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
      <Text>Analysis Is What We Like</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg.secondary,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
