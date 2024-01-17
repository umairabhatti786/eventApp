import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets";
import CustomText from "../../../components/CustomText";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/colors";
import { appStyles } from "../../../utils/AppStyles";
import { font } from "../../../utils/font";
import TopHeader from "../../../components/TopHeader";
import DropDown from "../../../components/DropDown";
import { data } from "../../../utils/Data";
import CustomView from "../../../components/CustomView";
import SelectTaskColor from "../../../components/SelectTaskColor";
import CategoryLayout from "../../../components/CategoryLayout";
import CheckBox from "../../../components/CheckBox";

type Props = {
  navigation?: any;
};

const Subscription = ({ navigation }: Props) => {
  return (
    <ScreenLayout>
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: "5%" }}>

          <Spacer height={Platform.OS=="ios"? 140:120} />
        </View>

        <CategoryLayout paddingHorizontal={30}>
            <Spacer height={20} />

            <CustomText
              text={"Try our Pro plans for free! "}
              size={30}
              fontFam="Inter-Bold"
            />

            <Spacer height={20} />

            <CustomView paddingHorizontal={15}>
              <CustomText text={"Strive Pro"} size={15} fontFam="Inter-Bold" />
              <CustomText
                text={"$ 2.99 per month"}
                color={colors.placeholdeColor}
                size={12}
              />
            </CustomView>
            <Spacer height={20} />

            <View style={{ ...appStyles.row, marginLeft: 20 }}>
              <CheckBox
                width={23}
                height={23}
                borderWidth={-1}
                isShadow={true}
                shadowColor={colors.lightGreen}
                backgroundColor={colors.lightGreen}
                complete={true}
              />
              <Spacer width={10} />
              <CustomText
                text={"Includes Strive Pro"}
                color={colors.placeholdeColor}
                size={14}
              />
            </View>

            <Spacer height={20} />

            <View style={{ ...appStyles.row, marginLeft: 20 }}>
              <CheckBox
                width={23}
                height={23}
                borderWidth={-1}
                shadowColor={colors.lightGreen}
                isShadow={true}

                backgroundColor={colors.lightGreen}
                complete={true}
              />
              <Spacer width={10} />
              <CustomText
                text={"Unlimited features"}
                color={colors.placeholdeColor}
                size={14}
              />
            </View>

            <Spacer height={20} />

            <View style={{ ...appStyles.row, marginLeft: 20 }}>
              <CheckBox
                width={23}
                height={23}
                borderWidth={-1}
                shadowColor={colors.lightGreen}
                isShadow={true}

                backgroundColor={colors.lightGreen}
                complete={true}
              />
              <Spacer width={10} />
              <CustomText
                text={"More features"}
                color={colors.placeholdeColor}
                size={14}
              />
            </View>
            <Spacer height={20} />

            <CustomView paddingVertical={10} paddingHorizontal={15}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <CustomText
                    text={"Synesis+"}
                    size={17}
                    fontFam="Inter-Bold"
                  />

                  <CustomText
                    text={"$ 5.99 per month"}
                    color={colors.placeholdeColor}
                    size={12}
                  />
                </View>

                <CustomText
                  text={"Most popular"}
                  color={colors.placeholdeColor}
                  size={13}
                />
              </View>
            </CustomView>
            <Spacer height={20} />

            <View style={{ ...appStyles.row, marginLeft: 20 }}>
              <CheckBox
                width={23}
                height={23}
                borderWidth={-1}
                shadowColor={colors.purple}
                isShadow={true}
                backgroundColor={colors.purple}
                complete={true}
              />
              <Spacer width={10} />
              <CustomText
                text={"Includes the Pro versions of our entire eco-system"}
                color={colors.placeholdeColor}
                size={14}
              />
            </View>

            <Spacer height={20} />

            <View style={{ ...appStyles.row, marginLeft: 20 }}>
              <CheckBox
                width={23}
                height={23}
                borderWidth={-1}
                isShadow={true}

                shadowColor={colors.purple}
                backgroundColor={colors.purple}
                complete={true}
              />
              <Spacer width={10} />
              <CustomText
                text={"Includes Strive Pro"}
                color={colors.placeholdeColor}
                size={14}
              />
            </View>

            <Spacer height={20} />

            <View style={{ ...appStyles.row, marginLeft: 20 }}>
              <CheckBox
                width={23}
                height={23}
                borderWidth={-1}
                shadowColor={colors.purple}
                isShadow={true}

                backgroundColor={colors.purple}
                complete={true}
              />
              <Spacer width={10} />
              <CustomText
                text={"Try for free for 14 days"}
                color={colors.placeholdeColor}
                size={14}
              />
            </View>
            <Spacer height={20} />

            <CustomButton
              text="Create Category"
              size={15}
              style={{
                alignSelf: "center",
              }}
              onPress={() => {
                navigation.navigate("NewCategory");
              }}
            />
        </CategoryLayout>
      </View>
    </ScreenLayout>
  );
};

export default Subscription;

