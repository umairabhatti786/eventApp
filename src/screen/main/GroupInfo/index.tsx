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
  import { images } from "../../../assets";
  import { appStyles } from "../../../utils/AppStyles";
import CustomView from "../../../components/CustomView";;
  
  const GroupInfo = ({ sheetRef,navigation ,createGroupSheetRef}) => {
    const groupMember = [
      { name: "Nico Kerner",img:images.user1 },
      { name: "Chris Clark",img:images.user1 },
      { name: "Ryan Dale",img:images.user1 },

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
              <Spacer height={20}/>

   
          <Image
          style={{width:200,height:150,alignSelf:"center"}}
          source={images.groupimage}
          resizeMode="contain"
          />
          <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=>{
            sheetRef.current.close()

            setTimeout(() => {
                createGroupSheetRef.current.open()
                
            }, 1000);

          }}

          >
          <CustomText
                  text={"Change Name and Photo"}
                  color={colors.blue}
                  size={19}
                  fontWeight="500"
                  style={{textAlign:"center"}}
                  numberOfLines={1}
                  // fontFam="SF-Pro-Display-Bold"
                />

          </TouchableOpacity>
          <Spacer height={20}/>

          <CustomText
                  text={"Nico Kerner and 2 People"}
                  color={colors.white}
                  size={27}
                  fontWeight="700"
                  style={{textAlign:"center"}}
                  numberOfLines={1}
                  // fontFam="SF-Pro-Display-Bold"
                />




     

       
                <Spacer height={20} />
                <CustomView paddingHorizontal={1}>
                  {groupMember.map((item, index) => {
                    return (
                      <View>
                        <View
                          style={{
                            ...appStyles.rowjustify,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                          }}>
                       
                          <View
                            style={{
                              ...appStyles.row,
                              marginHorizontal: 10,
                              width: "84%",
                            }}>
                                <Image
                                style={{width:35,height:35,borderRadius:999}}
                                source={item.img}
                                />

<CustomText
                                text={item.name}
                                color={colors.white}
                                size={18}
                                fontWeight="600"
                                style={{marginLeft:10}}
                                numberOfLines={1}
                              />
                           
                            <Spacer width={10} />

                          
                          </View>

                          <TouchableOpacity>
                            <Image
                              style={{ width: 18, height: 18 }}
                              source={images.updown}
                              resizeMode="contain"
                            />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            height: 1,
                            backgroundColor: colors.grey400,
                            marginVertical: 10,
                            marginLeft: 60,
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
                      text={"Add New Group Member"}
                      color={colors.blue}
                      size={18}
                      fontWeight="500"
                      numberOfLines={1}
                    />
                  </TouchableOpacity>
                </CustomView>

                <Spacer height={30} />
              
                <CustomView paddingHorizontal={1} paddingVertical={5}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                      ...appStyles.row,
                      marginVertical: 7,
                      marginHorizontal:20,
                    }}>
                    <Image
                      style={{ width: 25, height: 25, }}
                      source={images.logout}
                      resizeMode="contain"
                    />
                    <Spacer width={10} />

                    <CustomText
                      text={"Add New Group Member"}
                      color={"#F63232"}
                      size={18}
                      fontWeight="500"
                      numberOfLines={1}
                    />
                  </TouchableOpacity>
                </CustomView>

              
          
          
        </View>
       
      </RBSheet>
    );
  };
  
  export default GroupInfo;
  
  const styles = StyleSheet.create({
    optionsBox:{
      width: windowWidth / 3.5,
      height: 60,
      backgroundColor: "#4B4B4B",
      borderRadius:10,
      alignItems:"center",
      justifyContent:"center"
    },
    
  
  });
  