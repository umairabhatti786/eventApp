import React, { useEffect, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";
import { colors } from "../../../utils/colors";
import { appStyles } from "../../../utils/AppStyles";
import { Spacer } from "../../../components/Spacer";
import TopHeader from "../../../components/TopHeader";
import TopBar from "../../../components/TopBar";
import FriendList from "./FriendList";
import { images } from "../../../assets";
import { image } from "../../../assets/defaultimages";

const HomeScreen = () => {
  const [activeBar, setActiveBar] = useState("Friends");


  const chatList = [
    {
      img: image.man9,
      name: "Lauren Connors",
      message: "Hey everyone! Statuss is great. Here’s a photo of my view...",
      time: "8:34 AM",
      count: "2",
      update:true
    },
    {
      img: image.man2,
      name: "Joe Rogan",
      message: "I’m doing stand-up tonight at the Comedy Club. Come on...",
      time: "7:01 AM",
      count: "10",
    },
    {
      img: image.man3,
      name: "Lexi Reegan",
      message: "Any good movies on Netflix or Amazon Prime?",
      time: "JAN 12",
      count: "14",
    },
    {
      img: image.man4,
      name: "Jenny",
      message:
        "I think that people should be more kind to one another. Just saying...",
      time: "JAN 12",
    //   count: "2",
    },
    {
      img: image.man5,
      name: "Todd Mason",
      message: "Who wants to meet up and grab a drink? On me!",
      time: "JAN 11",
      count: "7",
    },
    {
      img: image.man6,
      name: "Lucas",
      message:
        "Finished my latest track. I’ll post it here when it’s up. Peace!",
      time: "JAN 11",
      count: "453",
    },
    {
      img: image.man7,
      name: "Holly",
      message:
        "I’m learning to speak Spanish at home on my spare time. So far so...",
      time: "JAN 10",
      count: "10",
    },
    {
      img: image.man8,
      name: "Joey D",
      message: "At the laundry mat. Missing my washing machine days...",
      time: "JAN 10",
      count: "3",
    },
  ];

  const renderChatList=({item,index})=>{
    console.log("ckbdk",index)

    return(
      <FriendList item={item}/>
    )
  }

  return (
    <SafeAreaView style={appStyles.main}>
      <Spacer height={7} />
      <View style={{ paddingHorizontal: 20 }}>
        <TopHeader />
        <Spacer height={20} />

        <TopBar activeBar={activeBar} setActiveBar={setActiveBar} />
      </View>
      <Spacer height={10} />
      <View >
        {/* <FriendList /> */}

        <FlatList
          data={activeBar=="My Updates" ?chatList.filter(item=>item.update):chatList}
          contentContainerStyle={{
            gap:5,
          }}
      
          renderItem={renderChatList}
         
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
