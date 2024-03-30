import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
import { images } from "../../../assets";
import AddLinkBottomSheet from "../../../components/AddLinkBottomSheet";
import CustomText from "../../../components/CustomText";
import CustomView from "../../../components/CustomView";
import DateTimeBottomSheet from "../../../components/DateTimeBottomSheet";
import EventBottomSheet from "../../../components/EventBottomSheet/inde";
import LocationBottomSheet from "../../../components/LocationBottomSheet";
import MessageContainer from "../../../components/MessageContainer";
import MessageSender from "../../../components/MessageSender";
import PhotosBottomSheet from "../../../components/PhotosBottomSheet";
import { Spacer } from "../../../components/Spacer";
import TopBar from "../../../components/TopBar";
import { appStyles } from "../../../utils/AppStyles";
import { colors } from "../../../utils/colors";
import CalendarDetailSheet from "../CalendarDetailSheet";
import CreatePollSheet from "../ChatPoll/CreatePollSheet";
import PollDetailSheet from "../ChatPoll/PollDetailSheet";
import PollOptionSheet from "../ChatPoll/PollOptionSheet";
import CreateGroup from "../CreateGroup";
import GroupCalendar from "../GroupCalendar";
import GroupInfo from "../GroupInfo";
import { windowWidth } from "../HomeChat/ChatList";
import Activities from "./Activities";
import AddContainer from "./AddContainer";
import CameraContainer from "./CameraContainer";
import ChatEvents from "./ChatEvents";
import MessageReaction from "./MessageReaction";
import PlainCard from "./PlainCard";
import PollCard from "./PollCard";

const MessageScreen = ({ navigation, route }) => {
  const [activeBar, setActiveBar] = useState("Chat");
  const [isAdded, setIsAdded] = useState(false);
  const [isCamera, setIsCamera] = useState(false);
  const [isReaction,setIsReaction]=useState(false)
  const [selectedMessage,setSelectedMessage]=useState()
  const [selectedMessageIndex,setSelectedMessageIndex]=useState()
  const [replyMessage,setReplyMessage]=useState()

  const planSheetRef = useRef();
  const isEvent = route?.params.isEvent;
  const isGroup = route?.params.isGroup;

  const photosSheetRef = useRef();
  const dateTimeSheetRef = useRef();
  const LocationSheetRef = useRef();
  const GroupCalendarSheetRef = useRef();
  const CalendarSheetRef = useRef();
  const pollOptionsSheetRef = useRef();
  const pollDetailSheetRef = useRef();
  const groupInfoSheetRef = useRef();
  const createGroupSheetRef = useRef();
  const AddLinkSheetRef=useRef()
  const [chatList,setChatList]=useState([

    {
      message:
        "Hi everyone just wanted to make sure we’re all on the same page for the party tonight! ",
      time: "20.00",
      date: "Today",
      from: true,
      reaction:""

    },
    {
      message:
        "Hi everyone just wanted to make sure we’re all on the same page for the party tonight! ",
      time: "20.00",
      from: true,
      reaction:""
    },
    {
      message: "Thanks for all those fun photos! It’s been an awesome party! ",
      time: "20.01",
      reaction:""

    },
    {
      message: "Thanks for all those fun photos! It’s been an awesome party! ",
      time: "20.01",
      plan: true,
    },
    {
      pollData: [
        { name: "Waffle House", member: 5, vote: 1 },
        { name: "Chipotle", member: 5, vote: 0 },
        { name: "Very, very long restau...", member: 3, vote: 2 },
      ],
      poll: true,
    },
    {
      message: "Thanks for all those fun photos! It’s been an awesome party! ",
      time: "20.01",
      reaction:""

    },

  ])



  const CreatePollSheetRef = useRef();


  const TopData = ["Chat", "Activities"];
  const eventTopBar = ["Event", "Chat", "Activities"];




  const eventList = [
   

  
    {
      message: "Hey Everyone! Super excited for you all to come to my movie night! Bring some popcorn and  some PJs!  ",
      time: "20.01",
    },

   
  ];

  const Header = () => {
    return (
      <View style={appStyles.rowjustify}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
          style={appStyles.row}>
          <Image
            style={{ width: 20, height: 20 }}
            source={images.back}
            resizeMode="contain"
          />
          <Spacer width={10} />
          <CustomText
            text={"Back"}
            color={colors.white}
            size={18}
            fontWeight="600"
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />
        </TouchableOpacity>
        <CustomText
          text={"Amanda Virden"}
          color={colors.white}
          size={18}
          style={{ marginLeft: -30 }}
          fontWeight="600"
          numberOfLines={1}
          fontFam="SF-Pro-Display-Bold"
        />
        <View>
          {
            isGroup&&(
                 <TouchableOpacity
                 onPress={()=>groupInfoSheetRef.current.open()}
                 >
          <Image
            style={{ width: 22, height: 22 }}
            source={images.info}
            resizeMode="contain"
          />
        </TouchableOpacity> 
            )
          }

        </View>

     
      </View>
    );
  };

  const renderChatList = ({ item, index }) => {
    console.log("ItemChatlost",item.reaction)
    return (
      <>
        {item.plan ? (
          <>
            <PlainCard onPress={() => CalendarSheetRef.current.open()} />
          </>
        ) : item.poll ? (
          <PollCard
            pollData={item?.pollData}
            onPress={() => pollOptionsSheetRef.current.open()}
          />
        ) : (
          <MessageContainer 
          isGroup={isGroup}
          onLongPress={()=>{
            setSelectedMessage(item)
            setSelectedMessageIndex(index)
            setIsReaction(true)

          }}
          item={item} />
        )}
      </>
    );
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 1 : 1}
        // keyboardVerticalOffset={
        //   Platform.OS === 'ios' ?-10 : 12
        // }
      >
        <View
          style={{
            flex: 1,
            paddingTop: Platform.OS == "ios" ? 60 : 10,
            paddingHorizontal: 15,
            backgroundColor: colors.black,
          }}>
          <Header />
          <Spacer height={20} />

          <TopBar
            topBarData={isEvent ? eventTopBar : TopData}
            width={isEvent ? windowWidth / 3.4 : windowWidth / 2.2}
            activeBar={activeBar}
            setActiveBar={setActiveBar}
          />
          {activeBar == "Chat" ? (
            <>
              <View style={{ flex: 1 }}>
                <Spacer height={15} />
                {
                  isEvent?(
                    <View>
                       <FlatList
                    data={ eventList}
                    showsVerticalScrollIndicator={false}
                    // style={{paddingBottom:30}}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ gap: 20 }}
                    renderItem={renderChatList}
                  />

                    </View>
                   
                  ):
                  <FlatList
                  data={chatList}
                  showsVerticalScrollIndicator={false}
                  // style={{paddingBottom:30}}
                  keyExtractor={(item) => item}
                  contentContainerStyle={{ gap: 20 }}
                  renderItem={renderChatList}
                />
                }
                {/* <View> */}
               
                {/* <Spacer  height={50}/> */}
                {
                  replyMessage&&(
                    <View style={{width:"100%",height:80,backgroundColor:colors.black,borderTopWidth:1,borderTopColor:"#515151",padding:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                  
                    <View style={{width:"80%"}}>

                    <CustomText
                    text={"Replying to Amanda Virden"}
                    color={colors.white}
                    size={16}
                    lineHeight={22}
                    // style={{ marginVertical:20,textAlign:"center" }}
                    fontWeight="400"
                  />
                   <CustomText
                    text={"Thanks for all those fun photos! It’s been an..."}
                    color={"#7C7C7C"}
                    size={16}
                    lineHeight={22}
                    numberOfLines={1}
                    // style={{ marginVertical:20,textAlign:"center" }}
                    fontWeight="400"
                  />

                    </View>

                    <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={()=>setReplyMessage(false)}
                    style={{width:20,height:20}}
                    >
                      <Image
                      style={{width:"100%",height:"100%"}}
                      resizeMode="contain"
                      source={images.circleCross}
                      />

                    </TouchableOpacity>

               


                </View>

                  )
                }
              


                {/* </View> */}

                
                {
                  isEvent&&(
                    <View style={{marginHorizontal:10,alignItems:"center"}}>
                       <CustomText
                    text={"The event location is currently TBD, please vote for the location that is best for you:"}
                    color={"#9F9F9F"}
                    size={16}
                    lineHeight={22}
                    style={{ marginVertical:20,textAlign:"center" }}
                    fontWeight="400"
                  />

<CustomView

                  borderWidth={ 0}>
                  <View style={appStyles.row}>
                    <Image
                      style={{ width: 20, height: 20, borderRadius: 5 }}
                      source={
                        images.location
                      }
                    />
                    <Spacer width={10} />

                    <CustomText
                      text={"Vote for Location"}
                      color={colors.white}
                      size={16}
                      // fontWeight='700'
                      fontFam="SF-Pro-Text-Regular"
                    />
                  </View>
                </CustomView>

                {/* <Spacer height={20} /> */}

                <CustomText
                    text={"The event time is currently TBD, please vote for the time that works best for you:"}
                    color={"#9F9F9F"}
                    size={16}
                    lineHeight={22}
                    style={{ marginVertical:20,textAlign:"center" }}
                    fontWeight="400"
                  />

<CustomView

                  borderWidth={ 0}>
                  <View style={appStyles.row}>
                    <Image
                      style={{ width: 20, height: 20, borderRadius: 5 }}
                      source={
                        images.calandericon
                      }
                    />
                    <Spacer width={10} />

                    <CustomText
                      text={"Vote for Date and Time"}
                      color={colors.white}
                      size={16}
                      // fontWeight='700'
                      fontFam="SF-Pro-Text-Regular"
                    />
                  </View>
                </CustomView>

                    </View>
                  )
                }
              </View>
              {isAdded && (
                <View style={{ ...appStyles.rowjustify, marginVertical: 15 }}>
                  <AddContainer
                    txt={"New Plan"}
                    onPress={() => {
                      console.log("Knckdnkc");
                      setIsAdded(false);
                      planSheetRef.current.open();
                    }}
                    img={images.flag}
                  />
                  <AddContainer
                    txt={"Poll"}
                    img={images.poll}
                    onPress={() => {
                      console.log("Knckdnkc");
                      setIsAdded(false);
                      CreatePollSheetRef.current.open();
                    }}
                  />
                  <AddContainer txt={"GIF"} img={images.gif} />
                  <AddContainer txt={"New Event"} img={images.plain} />
                </View>
              )}

              {isCamera && (
                <View style={{ ...appStyles.rowjustify, marginVertical: 15 }}>
                  <CameraContainer txt={"Take Photo"} img={images.cameragrey} />
                  <CameraContainer txt={"Photo Library"} img={images.library} />
                </View>
              )}

              <MessageSender
                onAdd={() => {
                  setIsCamera(false);
                  setIsAdded(!isAdded);
                }}
                isAdded={isAdded}
                isCamera={isCamera}
                onCamera={() => {
                  setIsAdded(false);

                  setIsCamera(!isCamera);
                }}
                isAdd
              />
              <Spacer height={30} />
            </>
          ) : activeBar == "Activities" ? (
            <>
              <Activities 
              isGroup={isGroup}
              navigation={navigation}
              isEvent={isEvent}

              
              groupSheetRef={GroupCalendarSheetRef}
              />
            </>
          ) : (
            <>
              <ChatEvents />
            </>
          )}
        </View>
      </KeyboardAvoidingView>
      <EventBottomSheet
        sheetRef={planSheetRef}
        isPlain={true}
        photosSheetRef={photosSheetRef}
        dateTimeSheetRef={dateTimeSheetRef}
        LocationSheetRef={LocationSheetRef}
        AddLinkSheetRef={AddLinkSheetRef}
        // InviteFriendSheetRef={InviteFriendSheetRef}
      />
      <PhotosBottomSheet sheetRef={photosSheetRef} />
      <DateTimeBottomSheet sheetRef={dateTimeSheetRef} />
      <LocationBottomSheet sheetRef={LocationSheetRef} />
      <CalendarDetailSheet sheetRef={CalendarSheetRef} />
      <CreatePollSheet sheetRef={CreatePollSheetRef} />
      <PollOptionSheet
        sheetRef={pollOptionsSheetRef}
        pollDetailSheetRef={pollDetailSheetRef}
        onPressVote={() => {
          pollOptionsSheetRef.current.close();
          setTimeout(() => {
            pollDetailSheetRef.current.open();
          }, 300);
        }}
      />
      <PollDetailSheet
        sheetRef={pollDetailSheetRef}
        onChangeVote={() => {
          pollDetailSheetRef.current.close();
          setTimeout(() => {
            pollOptionsSheetRef.current.open();
          }, 300);
        }}
      />

      <GroupCalendar
      sheetRef={GroupCalendarSheetRef}
      />
       <GroupInfo
      sheetRef={groupInfoSheetRef}
      createGroupSheetRef={createGroupSheetRef}
      />

<CreateGroup
      sheetRef={createGroupSheetRef}
      />
      <MessageReaction
      modalVisible={isReaction}
      chatList={chatList}
      setReply={setReplyMessage}
      setChatList={setChatList}
      setSelectedMessage={setSelectedMessage}
      selectedMessage={selectedMessage}
      setModalVisible={setIsReaction}
      selectedMessageIndex={selectedMessageIndex}
      />


<AddLinkBottomSheet
      sheetRef={AddLinkSheetRef}
      />
    </>
  );
};

export default MessageScreen;
