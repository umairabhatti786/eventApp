import React, { useEffect, useState } from "react";
import { Alert, LogBox, StyleSheet, View, Text, Platform,FlatList } from "react-native";
import { colors } from "../../../utils/colors";
import CustomBottomTab from "../../../components/CustomBottomTab";
import Events from "../Events";
import CustomHeader from "../../../components/CustomHeader";
import SearchBar from "../../../components/SearchBar";
import { Spacer } from "../../../components/Spacer";
import ChatList from "./ChatList";
import { images } from "../../../assets";

export const HomeChat = () => {
  const [focused,setFocused]=useState(1)


  const chatListData=[
    {img:images.eventimage3,name:"Nico’s Birthday!",time:"5:45 PM",message:"Emma added 5 pice to album ",online:true},
    {img:images.usertitle1,name:"Rishi Narain",time:"Yesterday",message:"What’s the plan, stan?",online:true},
    {img:images.eventimage1,name:"Random Event Title",time:"5/31/23",message:"Emma added 5 pice to album "},
    {img:images.eventimage2,name:"Random Event Title",time:"5/31/23",message:"Emma added 5 pice to album "},

    {img:images.eventimage4,name:"Amanda Virden",time:"5:45 PM",message:"Love you long time <3"},
    {img:images.groupimage,name:"Nico Kerner, Ryan Dale, Chr...",time:"5:45 PM",message:"What are you guys doing for dinner?",},

  ]

  const renderChatList=({item,index})=>{
    console.log("ckbdk",index)

    return(
      <ChatList item={item}/>
    )
  }
  return (
    <>
      <View style={{ flex: 1, backgroundColor: colors.black,paddingTop:Platform.OS=="ios"?40:30 }}>

        {
          focused==1?(
            <View style={{padding:20}}>
              <Spacer height={20}/>

              <CustomHeader
              thirdHeight={23}
              thirdWidth={23}
              />
<Spacer height={20}/>
              <SearchBar
              textColor={colors.white}
              placeholder="Search"
            
              />
              <Spacer height={30}/>

              <FlatList
                  data={chatListData}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    gap: 20,
                  }}
                  // style={{
                  //   flex: 1,
                  // }}
                  renderItem={renderChatList}
                  // renderItem={({ item, index }) => {
                  //   return <ChatList item={item} key={index} />;
                  // }}
                />


              </View>


          ):<>
          <Events/>
          </>
        }
      </View>

   

      <CustomBottomTab
      setFocused={setFocused}
      focused={focused}
      />
    </>
  );
};

export default HomeChat;
