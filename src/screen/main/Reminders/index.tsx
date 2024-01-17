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
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/colors";
import DropDown from "../../../components/DropDown";
import { data } from "../../../utils/Data";
import CategoryLayout from "../../../components/CategoryLayout";

type Props = {
  navigation?: any;
};

const Reminders = ({ navigation }: Props) => {
  return (
    <ScreenLayout>
        <View style={{ flex: 1 }}>
          <Spacer height={40} />
          <View style={{ paddingHorizontal: "5%" }}>

            <Spacer height={140} />


          </View>
          <Spacer height={5} />

          <CategoryLayout>

            <CustomText
              text={"Reminders"}
              style={{ textAlign: "center" }}
              size={18}
              fontFam="Inter-Bold"
            />

            <Spacer height={20} />

            <DropDown
            //   data={data}
            placeholderColor={colors.placeholdeColor}
            data={data.map((item, _index) => {
              return {
                id: item?.id,
                label: item?.value,
                value: item?.value,
              };
            })}
            placeholder={"At task start"}
            // value={"At task start"}
          />

            <CustomText
              text={"Custom time"}
              style={{ marginVertical: 10 }}
              size={18}
              fontFam="Inter-Bold"
            />

<DropDown
            //   data={data}
            placeholderColor={colors.placeholdeColor}
            data={data.map((item, _index) => {
              return {
                id: item?.id,
                label: item?.value,
                value: item?.value,
              };
            })}
            placeholder={"09:00"}
            // value={"09:00"}
          />

            <Spacer height={"35%"} />

            <CustomButton
              text="Create Category"
              size={15}
              style={{
                alignSelf: "center",
              }}
              onPress={() => {
                navigation.navigate("Subscription");
              }}
            />


          </CategoryLayout>
        </View>
    </ScreenLayout>
  );
};

export default Reminders;
