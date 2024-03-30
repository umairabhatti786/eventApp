import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    FlatList
  } from "react-native";
  import React from "react";
  import RBSheet from "react-native-raw-bottom-sheet";
  import CustomText from "../../../components/CustomText";
  import { colors } from "../../../utils/colors";
  import { windowWidth } from "../HomeChat/ChatList";
  import { Spacer } from "../../../components/Spacer";
  import { windowHeight } from "../../../utils/CommonFun";
  import { images } from "../../../assets";
  import { appStyles } from "../../../utils/AppStyles";
  import { useNavigation } from "@react-navigation/native";
import CalendarContainer from "../MessageScreen/CalendarContainer";
  
  const AllPhotos = ({ sheetRef,navigation }) => {

    const renderPhotos = ({ item, index }) => {
        return (
          <View
            style={{
              width: windowWidth / 3,
              height: 120,
              borderRadius: 5,
              backgroundColor: "#191919",
              margin: 1.5,
            }}></View>
        );
      };

 
    return (
      
        <SafeAreaView style={{ flex: 1,paddingHorizontal:15 ,
                    backgroundColor: colors.black,

        }}>
        <View
          style={{
            // width: windowWidth,
            height: 40,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <View style={{ width: "20%" }}>
              
            <TouchableOpacity
              activeOpacity={0.6}
              //  disabled={!onLeft}
              style={appStyles.row}
              onPress={() => navigation.goBack()}>
                  <Image
                  style={{width:15,height:15}}
                  source={images.back}
                  resizeMode="contain"
                  />
              <CustomText
                text={"Back"}
                color={colors.white}
                size={19}
                fontWeight="500"
                style={{marginLeft:5}}
                numberOfLines={1}
                // fontFam="SF-Pro-Display-Bold"
              />
            </TouchableOpacity>
          </View>
          <CustomText
            text={"Photos"}
            color={colors.white}
            size={19}
            fontWeight="700"
            numberOfLines={1}
            fontFam="SF-Pro-Display-Bold"
          />

          <TouchableOpacity
            activeOpacity={0.6}
            //   disabled={!onRight}
            //   onPress={onPressVote}
            style={{ width: "20%", alignItems: "flex-end" }}>
            <Image
                  style={{width:25,height:25}}
                  source={images.addcircle}
                  resizeMode="contain"
                  />
          </TouchableOpacity>
        </View>
        <Spacer height={30}/>
          <FlatList
            data={[1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16]}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            renderItem={renderPhotos}
          />
         
          
  
          
        </SafeAreaView>
        
    );
  };
  
  export default AllPhotos;
  
  const styles = StyleSheet.create({
    optionsBox:{
      width: windowWidth / 3.5,
      height: 60,
      backgroundColor: "#4B4B4B",
      borderRadius:10,
      alignItems:"center",
      justifyContent:"center"
    }
  
  });
  