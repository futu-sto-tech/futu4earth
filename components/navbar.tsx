import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

import { colors } from "../colors";

// import { NativeModules } from "react-native";
// const { StatusBarManager } = NativeModules;

// const statusbarHeight = StatusBarManager.getHeight((statusBarFrameData) => {
//   statusBarFrameData.height;
// });
const NavBar = () => (
  <SafeAreaView>
    <Appbar style={styles.top}>
      <Appbar.Content
        title="Futurice"
        onPress={() => console.log("Pressed Title")}
      />
      <Appbar.Action
        icon="archive"
        onPress={() => console.log("Pressed archive")}
      />
      <Appbar.Action icon="mail" onPress={() => console.log("Pressed mail")} />
      <Appbar.Action
        icon="label"
        onPress={() => console.log("Pressed label")}
      />
      <Appbar.Action
        icon="delete"
        onPress={() => console.log("Pressed delete")}
      />
    </Appbar>
  </SafeAreaView>
);

export default NavBar;

const styles = StyleSheet.create({
  top: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: colors.bg.primary,
  },
});
