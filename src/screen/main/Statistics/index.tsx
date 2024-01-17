import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SectionList,
  FlatList,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import { font } from "../../../utils/font";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets";
import { appStyles } from "../../../utils/AppStyles";
import TaskContainer from "../../../components/TaskContainer";
import { planedTaskList } from "../../../utils/Data";
import TaskHeading from "../../../components/TaskHeading";
import DropDown from "../../../components/DropDown";
import UserHeader from "../../../components/UserHeader/indx";
import CustomView from "../../../components/CustomView";
type Props = {
  navigation?: any;
};

const Statistics = ({ navigation }: Props) => {
  const dataDropDown = [
    {
      id: 1,
      label: "All planned tasks",
      value: "All planned tasks",
    },
    {
      id: 2,
      label: "All planned tasks",
      value: "All planned tasks",
    },
  ];

  const data = {
    labels: ["0:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
    datasets: [
      {
        data: [20, 40, 60, 80, 100, 120],
      },
    ],
  };
  return (
    <ScreenLayout>
      <ScrollView
        style={{
          height: "100%",
          paddingVertical: "5%",
          paddingHorizontal: "3%",
        }}
      >
        <View
          style={{
            marginTop: Platform.OS=="ios"?60: 40,
          }}
        >
          <UserHeader navigation={navigation} />

          <View style={{ ...appStyles.row, alignSelf: "center" }}>
            <TouchableOpacity>
              <Image
                style={{ width: 15, height: 15 }}
                resizeMode="contain"
                source={images.backword}
              />
            </TouchableOpacity>
            <CustomText
              text={"December"}
              color={colors.placeholdeColor}
              size={15}
              style={{ marginHorizontal: 50 }}
            />
            <TouchableOpacity>
              <Image
                style={{ width: 15, height: 15 }}
                resizeMode="contain"
                source={images.next}
              />
            </TouchableOpacity>
          </View>

          <Spacer height={20} />
          <DropDown
            data={dataDropDown.map((item, _index) => {
              return {
                id: item?.id,
                label: item?.value,
                value: item?.value,
              };
            })}
            placeholder={"Monthly"}
            placeholderColor={colors.placeholdeColor}
            value={"def"}
          />
          <Spacer height={20} />

          <CustomText
            text={"General"}
            color={colors.placeholdeColor}
            size={18}
            fontFam="Inter-Bold"
            style={{ marginBottom: 5 }}
          />

          <View style={appStyles.rowjustify}>
            <View>
              <CustomView
                paddingVertical={10}
                borderWidth={1}
                borderRadius={12}
                paddingHorizontal={30}
              >
                <CustomText
                  text={"26"}
                  color={colors.placeholdeColor}
                  size={35}
                  fontFam="Inter-Bold"
                />
              </CustomView>

              <CustomText
                text={"Completed"}
                style={{ textAlign: "center", marginTop: 2 }}
                color={colors.placeholdeColor}
                size={13}
                fontFam="Inter-Bold"
              />
            </View>

            <View>
              <CustomView
                paddingVertical={10}
                borderWidth={1}
                borderRadius={12}
                paddingHorizontal={30}
              >
                <CustomText
                  text={"26"}
                  color={colors.placeholdeColor}
                  size={35}
                  fontFam="Inter-Bold"
                />
              </CustomView>
              <CustomText
                text={"Forgotten"}
                style={{ textAlign: "center", marginTop: 2 }}
                color={colors.placeholdeColor}
                size={13}
                fontFam="Inter-Bold"
              />
            </View>

            <View>
              <CustomView
                paddingVertical={10}
                borderWidth={1}
                borderRadius={12}
                paddingHorizontal={15}
              >
                <CustomText
                  text={"50%"}
                  color={colors.placeholdeColor}
                  size={35}
                  fontFam="Inter-Bold"
                />
              </CustomView>

              <CustomText
                text={"Percentage"}
                style={{ textAlign: "center", marginTop: 2 }}
                color={colors.placeholdeColor}
                size={13}
                fontFam="Inter-Bold"
              />
            </View>
          </View>
        </View>

        <CustomText
          text={"Weekly"}
          style={{ marginVertical: 10 }}
          color={colors.placeholdeColor}
          size={18}
          fontFam="Inter-Bold"
        />

        <View
          style={{
            alignSelf: "center",
            borderRadius: 15,
            borderWidth: 1.5,
            borderColor: colors.superLightGray,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:colors.lightGray,


          }}
        >
          <LineChart
            data={{
              labels: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [
                {
                  data: [60, 40, 60, 80, 100, 120, 140],
                },
              ],
            }}
            width={Dimensions.get("window").width / 1.2} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#1F1F1F",
              backgroundGradientFrom: "#1F1F1F",
              backgroundGradientTo: "#1F1F1F",

              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(1, 156, 210, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${0.7})`,
              propsForDots: {
                r: "1",
                strokeWidth: "2",
                stroke: "#019CD2",
              },
            }}
            
            withVerticalLines={false}
            withHorizontalLines={false}
            withHorizontalLabels={false} // Set to false to hide left axis labels
            bezier
            style={{
              borderRadius: 16,
              marginRight:20,
            //   paddingRight:10,
              paddingRight:20
              
            }}
          />
        </View>

        <Spacer height={20} />
        <CustomText
          text={"Hourly"}
          style={{ marginVertical: 10 }}
          color={colors.placeholdeColor}
          size={18}
          fontFam="Inter-Bold"
        />

        <View
          style={{
            alignSelf: "center",
            borderRadius: 15,
            borderWidth: 1.5,
            borderColor: colors.superLightGray,
            backgroundColor:colors.lightGray,
          }}
        >
          <BarChart
            data={data}
            width={Dimensions.get("window").width / 1.1} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: "#1F1F1F",
              backgroundGradientFrom: "#1F1F1F",
              backgroundGradientTo: "#1F1F1F",
              strokeWidth: 2,

              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(1, 156, 210, ${1})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${0.7})`,
              style: {
                borderRadius: 16,
              
              },
              propsForDots: {
                r: "1",
                strokeWidth: "2",
                stroke: "#019CD2",
              },
            }}
            style={{paddingRight:5,borderRadius:15}}
            
            withInnerLines={false}
            xLabelsOffset={-5}
            
            withHorizontalLabels={false} // Set to false to hide left axis labels
          />
        </View>
        <Spacer height={30} />
      </ScrollView>
    </ScreenLayout>
  );
};

export default Statistics;

