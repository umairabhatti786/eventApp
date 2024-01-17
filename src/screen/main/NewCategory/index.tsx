import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { Spacer } from "../../../components/Spacer";
import CustomText from "../../../components/CustomText";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/colors";
import TopHeader from "../../../components/TopHeader";
import SelectTaskColor from "../../../components/SelectTaskColor";
import CategoryLayout from "../../../components/CategoryLayout";

type Props = {
  navigation?: any;
};

const NewCategory = ({ navigation }: Props) => {
  return (
    <ScreenLayout>
        <View style={{ flex: 1 }}>
          <Spacer height={40} />
          <View style={{ paddingHorizontal: "5%" }}>
            <Spacer height={40} />

            <TopHeader title={"Create New Task"} navigation={navigation} />
            <Spacer height={30} />

            <CustomText text={"Task Details"} size={18} fontFam="Inter-Bold" />

            <CustomText
              color={colors.placeholdeColor}
              text={"Enter the details of your new habit"}
              size={13}
            />
          </View>
          <Spacer height={5} />

          <CategoryLayout>
            <CustomText
              text={"Edit category"}
              style={{ textAlign: "center" }}
              size={18}
              fontFam="Inter-Bold"
            />

            <Spacer height={20} />

            <CustomInput
              label="Title"
              complusory={true}
              textColor="white"
              placeholder={"Pay the bills..."}
            />

            <CustomText
              text={"Color"}
              style={{ marginVertical: 10 }}
              size={18}
              fontFam="Inter-Bold"
            />

            <SelectTaskColor />
            <Spacer height={20} />

            <CustomButton
              text="Create Category"
              size={15}
              style={{
                alignSelf: "center",
              }}
              onPress={() => {
                navigation.navigate("Reminders");
              }}
            />
          </CategoryLayout>
        </View>
    </ScreenLayout>
  );
};

export default NewCategory;
