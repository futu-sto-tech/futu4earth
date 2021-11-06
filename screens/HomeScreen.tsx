import { StyleSheet, View } from "react-native";

import { Button } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { RootStackParamList } from "../App";
import { colors } from "../colors";
import { SafeAreaView } from "react-native-safe-area-context";


type HomeScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

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
    marginBottom: "25%",
    borderRadius: 50,
  },
  text: {
    color: colors.text.primary,
  },
});

export function HomeScreen({ navigation }: HomeScreenNavigationProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        style={styles.button}
        onPress={() => navigation.push("Analysis")}
        labelStyle={styles.text}
      >
        Start Analysis
      </Button>
    </SafeAreaView>
  );
}
