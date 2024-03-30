import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Spacer } from "../../../components/Spacer";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets";
import { windowWidth } from "../HomeChat/ChatList";
import PollProgress from "../../../components/PollProgress";
import CustomButton from "../../../components/CustomButton";

const PollCard = ({ onPress,pollData }:any) => {
  return (
    <View
      style={{
        alignItems: "flex-end",
        width:windowWidth/1.7,
        alignSelf: "flex-end",
        
      }}>
      <CustomText
        text={"Rishi Created a Poll"}
        color={"#716F6F"}
        size={15}
        fontWeight="400"
        style={{ marginRight: 10, marginVertical: 10 }}
        numberOfLines={1}
        fontFam="SF-Pro-Display-Bold"
      />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={{
          backgroundColor: "#191919",
          borderRadius: 15,
          paddingHorizontal: 15,
          paddingVertical: 15,

          

        }}>
            <View style={{marginHorizontal:40}}>
            <CustomText
          text={"Where should we get lunch?"}
          color={colors.white}
          size={17}
          fontWeight="600"
          style={{textAlign:"center"}}
          fontFam="SF-Pro-Display-Bold"
        />

            </View>
       
        <Spacer height={5} />
        {
            pollData.map(item=>{
                return(
                    <View style={{marginVertical:10}}>
                        <View style={{...appStyles.rowjustify,marginVertical:5}}>
                        <CustomText
          text={item.name}
          color={colors.white}
          size={14}
          fontWeight="500"
        />
                       <CustomText
          text={item.vote}
          color={"#868686"}
          size={14}
          fontWeight="500"
          />

                        </View>

                        <PollProgress
        steps={item.member}
        step={item.vote}
        />

                    </View>

                )
            })
        }
                    <CustomText
          text={"4 more options"}
          color={"#868686"}
          size={14}
          fontWeight="500"
          />


        <Spacer height={15}/>
        <CustomButton
        text="Vote"
        width={windowWidth/1.7}
        height={43}
        textColor={colors.black}
        bgColor={colors.white}
        borderColor="transparent"
        borderRadius={30}
    
        />
                <Spacer height={5}/>

      

     

        {/* <TouchableOpacity>
          <Image
            style={{ width: 30, height: 30 }}
            source={img}
            resizeMode="contain"
          />
        </TouchableOpacity> */}
      </TouchableOpacity>

    
    </View>
  );
};

export default PollCard;

const styles = StyleSheet.create({
    box:{
        paddingHorizontal: 19,
        backgroundColor: "#212121",
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"row",
        borderRadius:12
      }

});
