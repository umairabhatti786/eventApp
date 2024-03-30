import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { windowWidth } from "../HomeChat/ChatList";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets";
import { appStyles } from "../../../utils/AppStyles";
import CustomView from "../../../components/CustomView";

const CreateGroup = ({ sheetRef, navigation }) => {
  const groupMember = [
    { name: "Nico Kerner", img: images.user1 },
    { name: "Chris Clark", img: images.user1 },
    { name: "Ryan Dale", img: images.user1 },
  ];

  return (
    <RBSheet
      ref={sheetRef}
      height={300}
      openDuration={250}
      customStyles={{
        container: {
          justifyContent: "center",
          height: "93%",
          backgroundColor: colors.black100,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          width: "100%",
        },
      }}>
      <View style={{ flex: 1, padding: 15 }}>
        <View style={appStyles.rowjustify}>
          <TouchableOpacity
            activeOpacity={0.6}
            //  disabled={!onLeft}
            onPress={() => sheetRef.current.close()}>
            <CustomText
              text={"Cancel"}
              color={colors.grey300}
              size={19}
              fontWeight="500"
              numberOfLines={1}
              // fontFam="SF-Pro-Display-Bold"
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            //  disabled={!onLeft}
            onPress={() => sheetRef.current.close()}>
            <CustomText
              text={"Done"}
              color={colors.grey300}
              size={19}
              fontWeight="500"
              numberOfLines={1}
              // fontFam="SF-Pro-Display-Bold"
            />
          </TouchableOpacity>
        </View>

        <Spacer height={20} />

        <Image
          style={{ width: 200, height: 150, alignSelf: "center" }}
          source={images.groupimage}
          resizeMode="contain"
        />
          <TextInput
            style={{
              height: 60,
              color: colors.white,
              fontFamily: "SF-Pro-Text-Regular",
              fontSize: 32,
              alignItems:"center",
              justifyContent:"center",
              alignSelf:"center",
              fontWeight:"600"
            }}
            placeholder="Enter Group Name"
            placeholderTextColor={"#595959"}
          />
        
        <Spacer height={10} />
        <View style={{ ...appStyles.row, alignSelf: "center" }}>
          <CustomView
            paddingVertical={8}
            // onPress={() => setIsActive(index)}
            borderWidth={0}>
            <View style={appStyles.row}>
              <Image
                style={{ width: 20, height: 20, borderRadius: 5 }}
                source={images.library}
              />
              <Spacer width={10} />

              <CustomText
                text={"Upload Photo"}
                color={colors.white}
                size={15}
                // fontWeight='700'
                fontFam="SF-Pro-Text-Regular"
              />
            </View>
          </CustomView>

          <Spacer width={10} />

          <CustomView
            paddingVertical={8}
            // onPress={() => setIsActive(index)}
            borderWidth={0}>
            <View style={appStyles.row}>
              <Image
                style={{ width: 20, height: 20, borderRadius: 5 }}
                source={images.smile}
              />
              <Spacer width={10} />

              <CustomText
                text={"Upload Photo"}
                color={colors.white}
                size={15}
                // fontWeight='700'
                fontFam="SF-Pro-Text-Regular"
              />
            </View>
          </CustomView>
        </View>

        <Spacer height={20} />

        <FlatList
        data={[1,2,3,4,5,6,7,8,9,10,11,12]}
        numColumns={3}
    
        contentContainerStyle={{gap:20,alignSelf:"center"}}
        renderItem={({item,index})=>{

            return(
                <View style={{width:90,height:90,borderRadius:999,backgroundColor:"#D9D9D9",marginHorizontal:15}}></View>
            )
        }}
        />
      </View>
    </RBSheet>
  );
};

export default CreateGroup;

const styles = StyleSheet.create({
  optionsBox: {
    width: windowWidth / 3.5,
    height: 60,
    backgroundColor: "#4B4B4B",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
