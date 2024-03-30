import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Spacer } from "../../../components/Spacer";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets";

const PlainCard = ({ onPress }) => {
  return (
    <View
      style={{
        alignItems: "flex-end",
        maxWidth: "90%",
        alignSelf: "flex-end",
      }}>
      <CustomText
        text={"Rishi Created a Plan"}
        color={"#716F6F"}
        size={15}
        fontWeight="400"
        style={{ marginRight: 20, marginVertical: 10 }}
        numberOfLines={1}
        fontFam="SF-Pro-Display-Bold"
      />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={{
          backgroundColor: "#191919",
          borderRadius: 20,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        <CustomText
          text={"Sushi Date Night!"}
          color={colors.white}
          size={17}
          fontWeight="600"
          // style={{ marginBottom: 2 }}
          numberOfLines={1}
          fontFam="SF-Pro-Display-Bold"
        />
        <Spacer height={5} />

        <View style={appStyles.row}>
          <View style={appStyles.row}>
            <Image
              style={{ width: 80, height: 60 }}
              source={images.eventimage1}
              resizeMode="contain"
            />
          </View>
          <Spacer width={15} />

          <View>
            <View style={appStyles.row}>
              <Image
                style={{ width: 15, height: 15 }}
                source={images.location}
                resizeMode="contain"
              />
              <Spacer width={5} />
              <CustomText
                text={"Kazu Nori Handrolls"}
                color={colors.white}
                size={13}
                fontWeight="500"
                numberOfLines={1}
                fontFam="SF-Pro-Display-Bold"
              />
            </View>

            <Spacer height={5} />
            <View style={appStyles.row}>
              <Image
                style={{ width: 20, height: 20 }}
                source={images.datetime}
                resizeMode="contain"
              />
              <Spacer width={5} />
              <CustomText
                text={"Wed, September 25 @ 12:15 PM"}
                color={colors.white}
                size={13}
                textDecorationLine={"underline"}
                fontWeight="500"
                numberOfLines={1}
                fontFam="SF-Pro-Display-Bold"
              />
            </View>
          </View>
        </View>

        {/* <TouchableOpacity>
          <Image
            style={{ width: 30, height: 30 }}
            source={img}
            resizeMode="contain"
          />
        </TouchableOpacity> */}
      </TouchableOpacity>

      <View style={{...appStyles.row,marginVertical:10}}>
        <TouchableOpacity
          style={styles.box}>
            
            <Image
            style={{width:15,height:15}}
            source={images.tick}
            />
              <CustomText
        text={"going"}
        color={colors.white}
        size={15}
        fontWeight="400"
        style={{ marginLeft: 7, }}
        numberOfLines={1}
      />


          </TouchableOpacity>
          <Spacer width={7}/>
          <TouchableOpacity
          style={styles.box}>
            
            <Image
            style={{width:15,height:15}}
            source={images.question}
            resizeMode="contain"
            />
              <CustomText
        text={"maybe"}
        color={colors.white}
        size={15}
        fontWeight="400"
        style={{ marginLeft: 7, }}
        numberOfLines={1}
      />


          </TouchableOpacity>
          <Spacer width={7}/>

          <TouchableOpacity
          style={styles.box}>
            
            <Image
            style={{width:15,height:15}}
            source={images.cancel}
            />
              <CustomText
        text={"can’t go"}
        color={colors.white}
        size={15}
        fontWeight="400"
        style={{ marginLeft: 7, }}
        numberOfLines={1}
      />


          </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlainCard;

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
