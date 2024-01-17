import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SectionList,
  FlatList,
  ScrollView,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import { Modalize } from "react-native-modalize";

import { font } from "../../../utils/font";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets";
import { appStyles } from "../../../utils/AppStyles";
import TaskContainer from "../../../components/TaskContainer";
import { toDoPlannedTask } from "../../../utils/Data";
import UserHeader from "../../../components/UserHeader/indx";
import TaskDate from "../../../components/TaskDate";
import AddTaskButton from "../../../components/AddTaskButton";
import CustomHeader from "../../../components/CustomHeader";
type Props = {
  navigation?: any;
};

const ToDoPlanner = ({ navigation }: Props) => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [taskList, setTaskList] = useState(toDoPlannedTask);
  const modalizeRef = useRef(null);
  const [hideModelize, setHideModelize] = useState(false);

  const taskDate = [
    { day: "Mon", date: "25" },
    { day: "Tue", date: "26" },
    { day: "Wed", date: "27" },
    { day: "Thu", date: "28" },
    { day: "Fri", date: "29" },
    { day: "Sat", date: "30" },
    { day: "Sun", date: "31" },
  ];

  return (
    <>
      <ScreenLayout>
        <View
          style={{
            marginTop: 40,
            height: "100%",
          }}
        >
          <View style={{ paddingHorizontal: "5%", paddingTop: "5%" }}>
            <UserHeader navigation={navigation} />
          </View>
          <Spacer height={5} />
          <View style={{ height: 60 }}>
            <FlatList
              data={taskDate}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                paddingLeft: 5,
              }}
              // keyExtractor={(item, index) => item + index}
              renderItem={({ item, index }) => {
                return (
                  <>
                    <TaskDate
                      index={index}
                      selectedDate={selectedDate}
                      onPress={() => {
                        if (index != 0) {
                          setTaskList([]);
                          setSelectedDate(index);
                          return;
                        }
                        setSelectedDate(index);
                        setTaskList(toDoPlannedTask);
                      }}
                      item={item}
                    />
                    <Spacer width={7} />
                  </>
                );
              }}
            />
          </View>

          <ScrollView>
            <Spacer height={20} />
            <View style={{ flexDirection: "row" }}>
              <ScrollView style={{ width: 50 }}>
                {[
                  "0.00",
                  "7.00",
                  "08:00",
                  "08:15",
                  "08:15",
                  "11:00",
                  "12:00",
                  "14:30",
                  "15:15",
                  "16:00",
                  "20:00",
                  "22:00",
                  "22:30",
                  "24:00",
                  "24:00",
                  "24:00",
                  "24:00",
                  "24:00",
                ].map((item, index) => {
                  return (
                    <View
                      style={{
                        width: 50,
                        marginVertical: 10,
                        // backgroundColor: "red",
                      }}
                    >
                      <CustomText
                        text={item}
                        color={colors.placeholdeColor}
                        size={14}
                      />
                    </View>
                  );
                })}
              </ScrollView>
              <View
                style={{
                  width: 3,
                  height: "100%",
                  marginTop: 5,
                  backgroundColor: colors.lightGreen50,
                  right: "44%",
                  // zIndex: -999,
                }}
              ></View>

              {taskList.length > 0 && (
                <FlatList
                  data={taskList}
                  showsVerticalScrollIndicator={false}
                  style={{ position: "absolute", right: -20, width: "90%" }}
                  contentContainerStyle={{
                    paddingBottom: 150,
                  }}
                  renderItem={({ item, index }) => {
                    return (
                      <View style={{ marginTop: 30 }}>
                        <View style={{ marginBottom: 7 }}>
                          <TaskContainer
                            width={"90%"}
                            onPress={() => {

                              modalizeRef.current?.open();
                              setHideModelize(true);

                            }}
                            title={item.title}
                            statusColor={item.color}
                            complete={item.complete}
                            boxColor={item.complete && colors.lightGreen}
                            boxBorderColor={item.color}
                            isShadow={item?.complete == true ? true : false}
                            // shadowColor={}
                            isComplete={item.complete}
                            textColor={colors.white}
                            status={item?.status}
                            shadowDistance={5}
                            isShadow={item?.complete == true ? true : false}
                            shadowColor={colors.lightGreen}
                          />
                        </View>
                      </View>
                    );
                  }}
                />
              )}
            </View>
          </ScrollView>
        </View>

        <View style={{ position: "absolute", bottom: 30, right: 30 }}>
          <AddTaskButton onPress={() => navigation.navigate("CreateTask")} />
        </View>
      </ScreenLayout>

      {hideModelize == true && (
        <Modalize
          modalStyle={{
            borderColor: colors.placeholdeColor,
            backgroundColor: colors.black,
            flex: 1,
            borderWidth: 1,

            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            width: "100%",
          }}
          ref={modalizeRef}
          useNativeDriver={true}
          modalHeight={450}
          handlePosition="inside"
        >
          <View
            style={{
              flex: 1,
              padding: 30,
            }}
          >
            <CustomHeader
              LeftSide={() => (
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  activeOpacity={0.6}
                  onPress={() => navigation.goBack()}
                >
                  <Image
                    resizeMode="contain"
                    style={{ width: 20, height: 20 }}
                    source={images.basket}
                  />
                </TouchableOpacity>
              )}
              Center={() => (
                <View style={{ marginLeft: -20 }}>
                  <CustomText
                    text={"Task Overview"}
                    color={colors.white}
                    fontFam="Inter-Bold"
                    size={20}
                  />
                </View>
              )}
              RightSide={() => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() =>
                    navigation.navigate("CreateTask", { isEdit: true })
                  }
                >
                  <Image
                    resizeMode="contain"
                    style={{ width: 20, height: 20 }}
                    source={images.edit}
                  />
                </TouchableOpacity>
              )}
            />

            <View
              style={{
                alignSelf: "center",
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Spacer height={30} />
              <CustomText
                text={"Morning"}
                color={colors.white}
                fontFam="Inter-Bold"
                size={28}
              />
              <CustomText
                text={"routine"}
                color={colors.white}
                fontFam="Inter-Bold"
                size={28}
              />
              <Spacer height={5} />

              <CustomText
                text={"Personal"}
                color={colors.lightGreen}
                size={13}
              />

              <View style={{ ...appStyles.row, marginVertical: 5 }}>
                <CustomText
                  text={"07:00"}
                  color={colors.placeholdeColor}
                  size={13}
                />
                <CustomText
                  text={"till"}
                  color={colors.placeholdeColor}
                  style={{ marginHorizontal: 5 }}
                  size={13}
                />
                <CustomText
                  text={"08:00"}
                  color={colors.placeholdeColor}
                  size={13}
                />
              </View>
              <Spacer height={60} />
            </View>
            <CustomText
              text={"View Details"}
              style={{ textAlign: "center" }}
              color={colors.white}
              fontFam="Inter-SemiBold"
              size={20}
            />
            <Spacer height={20} />

            <View
              style={{
                ...appStyles.row,
                backgroundColor: colors.primary,
                borderRadius: 15,
                justifyContent: "space-between",
                height: 55,
              }}
            >
              <View
                style={{
                  width: 53,
                  height: 53,
                  backgroundColor: colors.black,
                  borderRadius: 15,
                  marginLeft: 2,
                }}
              ></View>

              <CustomButton
                text="Mark task as completed"
                width={"80%"}
                size={15}
                style={{
                  alignSelf: "center",
                }}
                onPress={() => {
                  setHideModelize(false);
                  navigation.navigate("Statistics");
                }}
              />
            </View>
          </View>
        </Modalize>
      )}
    </>
  );
};

export default ToDoPlanner;

