import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { colors } from "../../utils/colors";
import { Modalize } from "react-native-modalize";
import CustomText from "../CustomText";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type Props = {
  navigation?: any;
  children?: any;
  paddingHorizontal?: number;
  modalizeRef?: any;
};

const TaskOverViewModalize = ({
  navigation,
  children,
  paddingHorizontal,
  modalizeRef,
}: Props) => {
  let windowWidth = Dimensions.get("screen").width;
  return (
    <GestureHandlerRootView
    style={{flex:1}}
    >
      <Modalize
        modalStyle={{
          backgroundColor: "transparent",
          flex: 1,
          // position: "absolute",
          width: "100%",
        }}
        ref={modalizeRef}
        alwaysOpen={windowWidth > 450 ? 550 : 490}
        useNativeDriver={true}
        modalHeight={700}
        handlePosition="inside"
        // panGestureComponentProps={{ enabled: true }}
      >
        <View
          style={{
            //   width: "100%",
            //   height:800,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            borderWidth: 1,
            paddingHorizontal: paddingHorizontal || 15,
            borderColor: colors.placeholdeColor,
            backgroundColor: colors.black,
            alignSelf: "center",
          }}
        >
          <CustomText
            numberOfLines={1}
            text={"kcndknckd"}
            color={colors.white}
            //   size={size || 15}
            //   style={{ marginLeft: isComplete ? 0 : 15 }}
          />
        </View>
      </Modalize>
    </GestureHandlerRootView>
  );
};

export default TaskOverViewModalize;
const styles = StyleSheet.create({
  dot: {
    width: 5,
    height: 5,
    backgroundColor: colors.white,
    borderRadius: 3,
  },
});
