import { Text, View, Image, TouchableOpacity } from "react-native";
import { colors } from "../../utils/colors";
import { appStyles } from "../../utils/AppStyles";
import CustomText from "../CustomText";
import { useState } from "react";
import { images } from "../../assets";
import { Spacer } from "../Spacer";
import { windowWidth } from "../../utils/CommonFun";

type Props = {
  item?: any;

  onAdd?: any;
  isSelected?: any;
  selectedContact?:any
};

const ContactContainer = ({ item, onAdd, isSelected,selectedContact }: Props) => {

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onAdd}
      style={appStyles.rowjustify}>
      <View style={{ ...appStyles.row }}>
        <Image
          style={{ width: 45, height: 45, borderRadius: 999, marginLeft: 10 }}
          source={images.contact}
        />
        <Spacer width={20} />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            borderBottomWidth: 0.5,
            borderBottomColor: colors.grey400,
            justifyContent: "center",
            height: 60,
            marginLeft: 5,
          }}>
          <View style={appStyles.rowjustify}>
            <CustomText
              text={item.value}
              color={colors.white}
              size={19}
              fontWeight="500"
              numberOfLines={1}
              style={{ marginLeft: -10 }}
              fontFam="SF-Pro-Display-Bold"
            />
            {
              isSelected&&(

                <TouchableOpacity
                activeOpacity={0.6}
                style={{height:60,width:40,alignItems:"center",justifyContent:"center"}}
                >
                <TouchableOpacity
                            activeOpacity={0.6}
    
                  style={{
                    width: 22,
                    height: 22,
                    borderWidth: 1,
                    borderColor: "#383734",
                    marginRight: 10,
                    borderRadius: 999,
                    alignItems:"center",
                    justifyContent:"center",
                    backgroundColor: selectedContact
                    ?.map(da=> da.id)
                    .includes(item.id)?  colors.white:"transparent"
                  }}>
                    {
                      selectedContact
                      ?.map(da=> da.id)
                      .includes(item.id)&&(
                        <Image
                        style={{width:10,height:10,}}
                        source={images.check}
                        resizeMode={"contain"}
                        />

                      )
                    }
                  
    
                  </TouchableOpacity>
                  
                </TouchableOpacity>
              )
            }
          

         
          </View>

          {/* <Spacer height={20}/>
              <View style={{height:1,backgroundColor:colors.grey400}}/> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ContactContainer;
