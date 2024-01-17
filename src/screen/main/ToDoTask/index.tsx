import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ScrollView,
  Platform,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";

import { font } from "../../../utils/font";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets";
import { appStyles } from "../../../utils/AppStyles";
import TaskContainer from "../../../components/TaskContainer";
import { categoriesTaskList, toDoTaskList } from "../../../utils/Data";
import TaskHeading from "../../../components/TaskHeading";
import UserHeader from "../../../components/UserHeader/indx";
import TaskDate from "../../../components/TaskDate";
import CategorCard from "./CategorCard";
import AddTaskButton from "../../../components/AddTaskButton";
type Props = {
  navigation?: any;
};

const ToDoTask = ({ navigation }: Props) => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [taskList, setTaskList] = useState(toDoTaskList);
  const [categoriesTask, setCategoriestask] = useState(categoriesTaskList);

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
    <ScreenLayout>
      <View
        style={{
          marginTop: 40,
          height: "100%",
        }}
      >
        <View
          style={{
            paddingHorizontal: "5%",
            paddingTop: Platform.OS == "ios" ? "10%" : "5%",
          }}
        >
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
                        setCategoriestask([]);
                        setTaskList([]);
                        setSelectedDate(index);
                        return;
                      }
                      setCategoriestask(categoriesTaskList);
                      setSelectedDate(index);
                      setTaskList(toDoTaskList);
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
          <Spacer height={10} />

          <View
            style={{ ...appStyles.row, paddingLeft: "4%", marginVertical: 5 }}
          >
            <CustomText
              text={"Categories"}
              color={colors.white}
              fontFam="Inter-Bold"
              size={20}
            />
            <Spacer width={10} />
            <Image
              style={{ width: 15, height: 15, marginTop: 6 }}
              resizeMode="contain"
              source={images.down}
            />
          </View>

          {categoriesTask.length > 0 ? (
            <>
              <FlatList
                data={categoriesTask}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingBottom: 20,
                  paddingLeft: 20,
                }}
                renderItem={({ item, index }) => {
                  return (
                    <>
                      <CategorCard item={item} />

                      <Spacer width={8} />
                    </>
                  );
                }}
              />
            </>
          ) : (
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <CustomText
                text={"Nothing to see here..."}
                color={colors.white}
                fontFam="Inter-SemiBold"
                size={20}
              />
            </View>
          )}

          {taskList.length > 0 ? (
            <FlatList
              data={taskList}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 150,
                paddingHorizontal: "5%",
              }}
              // keyExtractor={(item, index) => item + index}
              renderItem={({ item, index }) => {
                return (
                  <View style={{ marginTop: 10 }}>
                    <TaskHeading
                      date={item?.status}
                      taskCount={item?.task.length}
                      //   marginLeft={15}
                    />
                    <Spacer height={7} />

                    {item.task.map((nu) => {
                      return (
                        <View style={{ marginBottom: 7 }}>
                          <TaskContainer
                            onPress={() => navigation.navigate("TaskDetail")}
                            title={nu.title}
                            backgroundColor={
                              item?.status == "Completed"
                                ? colors.black
                                : colors.lightGray
                            }
                            status={nu?.status}
                            titleColor={
                              item?.status == "Completed"
                                ? colors.superLightGray
                                : colors.white
                            }
                            statusColor={
                              item?.status == "Completed"
                                ? colors.superLightGray
                                : colors.purple
                            }
                            isComplete={
                              item?.status == "Completed" ? false : nu?.complete
                            }
                            boxBorderColor={
                              item?.status == "Completed"
                                ? "transparent"
                                : colors.purple
                            }
                            boxColor={
                              item?.status == "Completed"
                                ? nu?.boxColor
                                : "transparent"
                            }
                            isShadow={
                              item?.status == "Completed" ? true : false
                            }
                            shadowColor={nu?.boxColor}
                            complete={
                              item?.status == "Completed" ? true : false
                            }
                          />
                        </View>
                      );
                    })}
                  </View>
                );
              }}
            />
          ) : (
            <View
              style={{
                width: "100%",

                marginVertical: 10,
                paddingHorizontal: "5%",
              }}
            >
              <CustomText
                text={"Ongoing"}
                color={colors.white}
                fontFam="Inter-Bold"
                size={20}
              />
              <View
                style={{
                  height: 200,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CustomText
                  text={"You have no tasks at the moment..."}
                  color={colors.white}
                  style={{ width: "60%", textAlign: "center" }}
                  fontFam="Inter-SemiBold"
                  size={20}
                />
              </View>
            </View>
          )}
        </ScrollView>
      </View>

      <View style={{ position: "absolute", bottom: 30, right: 30 }}>
        <AddTaskButton onPress={() => navigation.navigate("CreateTask")} />
      </View>
    </ScreenLayout>
  );
};

export default ToDoTask;
