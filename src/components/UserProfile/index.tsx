import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import React from "react";
import { images } from "../../assets";

type Props = {
  taskCount?: number;
  date?: string;
  marginLeft?: number;
  navigation?: any;
  //   status?:string
};

const UserProfile = ({ date, taskCount, marginLeft, navigation }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        //   backgroundColor:"red"
      }}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate("Setting")}
      >
        <View
        style={{
          shadowColor: colors.white,
          shadowRadius: 20,
          elevation: 10,
          shadowOpacity: 40,
          backgroundColor:colors.white,
          width: 50,
          height: 50,
          borderRadius: 100,
          shadowOffset: { width:10, height: 10 },
            marginTop: 15
        }}
        >

<Image
          style={{ width: 55, height: 55, borderRadius: 100, }}
          source={images.man}
        />

        </View>
       
      </TouchableOpacity>
      <View style={{ marginLeft: 15 }}>
        <CustomText
          text={"Timo van Essen"}
          color={colors.white}
          fontFam="Inter-Bold"
          size={18}
        />

        <CustomText
          text={"synesis.app@gmail.com"}
          color={colors.white}
          size={14}
        />
      </View>
    </View>
  );
};
export default UserProfile;

const styles = StyleSheet.create({});
