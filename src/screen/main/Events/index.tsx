import React, { useEffect, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  Platform,
  FlatList,
  Image,
  SectionList,
  ScrollView,
} from "react-native";
import { colors } from "../../../utils/colors";
import CustomBottomTab from "../../../components/CustomBottomTab";
import CustomHeader from "../../../components/CustomHeader";
import SearchBar from "../../../components/SearchBar";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets";
import CustomView from "../../../components/CustomView";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import { windowWidth } from "../HomeChat/ChatList";
import EventContainer from "./EventContainer";

export const Events = () => {
  const [focused, setFocused] = useState(1);
  const [isActive, setIsActive] = useState(0);

  // const eventLists = [
  //   {
  //     month: 'October',
  //     data: [{date:"26 Fri",img:images.eventimage2,title:"Random Event Title!",time:"7:15 PM",des:"Hosted by Jim and John"}],
  //   },
  //   {
  //     month: 'October',
  //     data: [{date:"26 Fri",img:images.eventimage2,title:"Random Event Title!",time:"7:15 PM",des:"Hosted by Jim and John"}],
  //   },
  //   {
  //     month: 'October',
  //     data: [{date:"26 Fri",img:images.eventimage2,title:"Random Event Title!",time:"7:15 PM",des:"Hosted by Jim and John"}],
  //   },
  //   {
  //     month: 'October',
  //     data: [{date:"26 Fri",img:images.eventimage2,title:"Random Event Title!",time:"7:15 PM",des:"Hosted by Jim and John"}],
  //   },
  // ];

  const eventData = [
    {
      month: "October",
      data: [
        {
          day: "Fri",
          date: "26",
          img: images.eventimage3,
          title: "Random Event Title!",
          time: "7:15 PM",
          des: "Hosted by Jim and John",
        },
        {
          day: "Fri",
          date: "26",
          img: images.eventimage1,
          title: "Random Event Title!",
          time: "7:15 PM",
          des: "Hosted by Jim and John",
        },
      ],
    },
    {
      month: "November",
      data: [
        {
          day: "Fri",
          date: "26",
          img: images.eventimage3,
          title: "Random Event Title!",
          time: "7:15 PM",
          des: "Hosted by Jim and John",
        },
        {
          day: "Fri",
          date: "26",
          img: images.eventimage1,
          title: "Random Event Title!",
          time: "7:15 PM",
          des: "Hosted by Jim and John",
        },
      ],
    },
  ];

  const TBDEvent=[
    {
      img: images.eventimage3,
      title: "Random Event Title!",
      time: "TBD",
      des: "Hosted by Jim and John",
    },
    {
      img: images.eventimage3,
      title: "Random Event Title!",
      time: "TBD",
      des: "Hosted by Jim and John",
    },
    {
      img: images.eventimage3,
      title: "Random Event Title!",
      time: "TBD",
      des: "Hosted by Jim and John",
    },
    {
      img: images.eventimage3,
      title: "Random Event Title!",
      time: "TBD",
      des: "Hosted by Jim and John",
    },

  ]

  const renderItem = ({ section, item }) => {
    return (
      <View style={appStyles.row}>
        <CustomText
          text={item}
          color={colors.grey300}
          fontWeight="600"
          size={15}
        />
      </View>
    );
  };

  const renderSectionHeader = ({ section }: any) => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <CustomText
        text={section}
        color={colors.grey300}
        fontWeight="600"
        size={15}
      />
    </View>
  );

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.black,
          paddingTop: Platform.OS == "ios" ? 40 : 30,
        }}
      >
        <View style={{ paddingHorizontal: 20 }}>
          <CustomHeader
            title="Calendar"
            secondImage={images.heart}
            thirdImage={images.calander}
          />

          <Spacer height={20} />
          <View style={appStyles.row}>
            {["Upcoming", "TBD"].map((item, index) => {
              return (
                <View style={{ marginRight: 15 }}>
                  <CustomView
                    onPress={() => setIsActive(index)}
                    borderWidth={isActive == index ? 1 : 0}
                  >
                    <Image
                      style={{ width: 20, height: 20, borderRadius: 5 }}
                      source={index == 0 ? images.calandericon : images.tbd}
                    />
                    <Spacer width={10} />

                    <CustomText
                      text={item}
                      color={colors.white}
                      size={16}
                      // fontWeight='700'
                      fontFam="SF-Pro-Text-Regular"
                    />
                  </CustomView>
                </View>
              );
            })}

            {/* <CustomView>
  <Image
  style={{width:20,height:20}}
  source={images.tbd}
  />
<Spacer width={10}/>

<CustomText
            text={"TBD"}
            color={colors.white}
            size={18}
            // fontWeight='700'
            fontFam='SF-Pro-Text-Regular'
            />
  </CustomView> */}
          </View>
          {/* <Spacer height={5} /> */}
          <ScrollView>
            {
              isActive==0?(
                <SectionList
                sections={eventData}
                scrollEnabled={false}
                contentContainerStyle={{ gap: 15 }}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                  <EventContainer item={item}/>
                  
                )}
                renderSectionHeader={({ section: { month } }) => (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 35,
                    }}
                  >
                    <CustomText
                      text={month}
                      color={colors.grey300}
                      fontWeight="600"
                      size={17}
                    />
  
                    <View
                      style={{
                        height: 0.3,
                        width: "85%",
                        backgroundColor: colors.gray1,
                        marginLeft: 20,
                      }}
                    ></View>
                  </View>
                )}
              />

              ):(
                <View style={{flex:1}} >

<View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop:20,
                      marginBottom:30,

                    }}
                  >
                    <CustomText
                      text={"Date TBD"}
                      color={colors.grey300}
                      // fontWeight="500"
                      fontFam="BeVietnam-Italic"
                      size={17}
                    />
  
                    <View
                      style={{
                        height: 0.3,
                        width: "85%",
                        backgroundColor: colors.gray1,
                        marginLeft: 20,
                      }}
                    ></View>
                  </View>

                  <FlatList
                data={TBDEvent}
                contentContainerStyle={{ gap: 15 }}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                  <EventContainer 
                  TBD
                  item={item}/>
                  
                )}
                
              />

                </View>

            

              )
            }
           
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Events;
