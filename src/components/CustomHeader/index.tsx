import { View } from "react-native";
import React from "react";
import { Spacer } from "../Spacer";

const CustomHeader = ({
  LeftSide,
  Center,
  RightSide,
  borderBottomWidth,
  borderBottomColor,
  paddingBottom,
}: any) => {
  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: borderBottomWidth,
        borderBottomColor: borderBottomColor,
        paddingBottom: paddingBottom,
      }}
    >
      {LeftSide ? <LeftSide /> : <Spacer width={20} />}
      {Center ? <Center /> : <Spacer width={20} />}
      {RightSide ? <RightSide /> : <Spacer width={20} />}
    </View>
  );
};

export default CustomHeader;

// const Row = styled(View, {
//   ...commonStyles.rowContainer,
//   justifyContent: "space-between",
// });
