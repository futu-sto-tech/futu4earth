import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "../colors";

const NavBar = () => (
  <SafeAreaView style={{ backgroundColor: colors.bg.secondary }}>
    <View>
      <Appbar style={styles.top}>
        <Appbar.Content
          title="Futurice"
          style={{  right: 140 }}
          onPress={() => console.log("Pressed Title")}
        />
        <Appbar.Action
          icon="account"
          onPress={() => console.log("Pressed delete")}
        />
      </Appbar>
    </View>
  </SafeAreaView>
);

export default NavBar;

const styles = StyleSheet.create({
  top: {
    backgroundColor: colors.bg.secondary,
    shadowOpacity: 0,
  },
});
