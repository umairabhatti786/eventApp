import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SectionList,
  FlatList,
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
import { data, planedTaskList } from "../../../utils/Data";
import TaskHeading from "../../../components/TaskHeading";
import DropDown from "../../../components/DropDown";
type Props = {
  navigation?: any;
};

const PlannedTasks = ({ navigation }: Props) => {
  
  return (
    <ScreenLayout>
      <View
        style={{
          height: "100%",
          padding: "5%",
        }}
      >
        <View
          style={{
            marginTop: Platform.OS=="ios"?70: 40,
          }}
        >
          <View style={appStyles.row}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.goBack()}
            >
              <Image
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
                source={images.back}
              />
            </TouchableOpacity>

            <CustomText
              text={"Your planned tasks"}
              size={20}
              fontFam="Inter-Bold"
            />
          </View>

          <Spacer height={15} />
          <DropDown
            //   data={data}
            placeholder={"All planned tasks"}
            data={data.map((item, _index) => {
              return {
                id: item?.id,
                label: item?.value,
                value: item?.value,
              };
            })}
            value={"All planned tasks"}
          />
          <Spacer height={15} />

          <FlatList
            data={planedTaskList}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 150 }}
            // keyExtractor={(item, index) => item + index}
            renderItem={({ item, index }) => {
              return (
                <View style={{ marginTop: 10 }}>
                  <TaskHeading
                    date={item?.date}
                    status={item?.status}
                    taskCount={item?.task.length}
                    marginLeft={15}
                  />
                  <Spacer height={7} />

                  {item.task.map((item) => {
                    return (
                      <View style={{ marginBottom: 7 }}>
                        <TaskContainer
                          onPress={() => navigation.navigate("ToDoTask")}
                          title={item.title}
                          status={item?.status}
                          isComplete={item.complete}
                        />
                      </View>
                    );
                  })}
                </View>
              );
            }}

        
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

export default PlannedTasks;
