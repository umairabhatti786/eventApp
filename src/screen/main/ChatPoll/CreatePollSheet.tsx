import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
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
import CustomView from "../../../components/CustomView";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
  
  const CreatePollSheet = ({ sheetRef,navigation }) => {
    const dateTimeOptions = [
      { name: "Waffle House", },
      { name: "Chipotle",  },
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
        <View style={{ flex: 1,padding:15}}>

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
            </View>
            <CustomText
              text={"New Poll"}
              color={colors.white}
              size={19}
              fontWeight="700"
              numberOfLines={1}
              fontFam="SF-Pro-Display-Bold"
            />
  
            <TouchableOpacity
              activeOpacity={0.6}
              //   disabled={!onRight}
              //   onPress={onRight}
              style={{ width: "20%", alignItems: "flex-end" }}>
              <CustomText
                text={"Create"}
                color={colors.blue}
                size={19}
                style={{ textAlign: "flex-end" }}
                fontWeight="500"
                numberOfLines={1}
                fontFam="SF-Pro-Display-Bold"
              />
            </TouchableOpacity>
          </View>
          <Spacer height={20} />


          <CustomTextInput
          placeholder="Poll Question"
          />
     

       
                <Spacer height={20} />
                <CustomText
                  text={"Poll Options"}
                  color={colors.grey800}
                  size={15}
                  fontWeight="500"
                  numberOfLines={1}
                  style={{ marginBottom: 10 }}
                />
                <CustomView paddingHorizontal={1}>
                  {dateTimeOptions.map((item, index) => {
                    return (
                      <View>
                        <View
                          style={{
                            ...appStyles.rowjustify,
                            paddingHorizontal: 15,
                            paddingVertical: 5,
                          }}>
                       
                          <View
                            style={{
                              ...appStyles.row,
                              marginHorizontal: 10,
                              width: "84%",
                            }}>

<CustomText
                                text={item.name}
                                color={colors.white}
                                size={18}
                                fontWeight="400"
                                style={{marginLeft:-5}}
                                numberOfLines={1}
                              />
                           
                            <Spacer width={10} />

                          
                          </View>

                          <TouchableOpacity>
                            <Image
                              style={{ width: 23, height: 23 }}
                              source={images.circleCross}
                            />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            height: 1,
                            backgroundColor: colors.grey400,
                            marginVertical: 10,
                            marginLeft: 20,
                          }}
                        />
                      </View>
                    );
                  })}

                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                      ...appStyles.row,
                      marginVertical: 7,
                      marginHorizontal:20,
                    }}>
                    <Image
                      style={{ width: 18, height: 18, tintColor: colors.blue }}
                      source={images.plus}
                    />
                    <Spacer width={10} />

                    <CustomText
                      text={"Add Poll Option"}
                      color={colors.blue}
                      size={18}
                      fontWeight="500"
                      numberOfLines={1}
                    />
                  </TouchableOpacity>
                </CustomView>

                <Spacer height={30} />
                <CustomText
                  text={"Voting Ends"}
                  color={colors.grey800}
                  size={15}
                  fontWeight="500"
                  numberOfLines={1}
                  style={{ marginBottom: 10 }}
                />
                <CustomView paddingHorizontal={1} paddingVertical={5}>
                  <View
                    style={{
                      ...appStyles.rowjustify,
                      marginLeft: 15,
                      marginRight: 5,
                      paddingVertical: 5,
                    }}>
                    <CustomText
                      text={"Ends"}
                      color={colors.white}
                      size={20}
                      fontWeight="400"
                      numberOfLines={1}
                    />
                    <View style={{ ...appStyles.row, marginHorizontal: 10 }}>
                      <View style={styles.dateTimeOption}>
                        <CustomText
                          text={"Jun 14, 2023"}
                          color={colors.white}
                          size={18}
                          fontWeight="400"
                          numberOfLines={1}
                        />
                      </View>
                      <Spacer width={10} />

                      <View style={styles.dateTimeOption}>
                        <CustomText
                          text={"9:41 AM"}
                          color={colors.white}
                          size={18}
                          fontWeight="400"
                          numberOfLines={1}
                        />
                      </View>
                    </View>
                  </View>
                </CustomView>

              
          
          
        </View>
       
      </RBSheet>
    );
  };
  
  export default CreatePollSheet;
  
  const styles = StyleSheet.create({
    optionsBox:{
      width: windowWidth / 3.5,
      height: 60,
      backgroundColor: "#4B4B4B",
      borderRadius:10,
      alignItems:"center",
      justifyContent:"center"
    },
    dateTimeOption: {
      backgroundColor: colors.grey767680,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 15,
      paddingVertical: 7,
    },
  
  });
  