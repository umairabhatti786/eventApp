import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";
const ProgressBar = ({ steps }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <View style={styles.progressContainer}>
        <View
          style={{
            width: 40,
            height: "100%",
            backgroundColor:
              steps == 1
                ? colors.white
                : steps > 1
                ? colors.white
                : "transparent",
          }}
        ></View>
      </View>
      <View style={styles.progressContainer}>
        <View
          style={{
            width: 40,
            height: "100%",
            backgroundColor:
              steps == 2
                ? colors.white
                : steps > 2
                ? colors.white
                : "transparent",
          }}
        ></View>
      </View>
      <View style={styles.progressContainer}>
        <View
          style={{
            width: steps == 2.5 ? 20 : 40,
            height: "100%",
            backgroundColor:
              steps == 2.5
                ? colors.white
                : steps == 3
                ? colors.white
                : steps > 3
                ? colors.white
                : "transparent",
          }}
        ></View>
      </View>
      <View style={styles.progressContainer}>
        <View
          style={{
            width: 40,
            height: "100%",
            backgroundColor:
              steps == 4
                ? colors.white
                : steps > 4
                ? colors.white
                : "transparent",
          }}
        ></View>
      </View>
    </View>
  );
};
export default ProgressBar;

const styles = StyleSheet.create({
  progressContainer: {
    width: 40,
    height: 4,
    borderRadius: 100,
    backgroundColor: colors.lightGray,
    overflow: "hidden",
  },
});
