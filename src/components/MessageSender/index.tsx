import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { images } from "../../assets";
import { appStyles } from "../../utils/AppStyles";
import { colors } from "../../utils/colors";
import { Spacer } from "../Spacer";

const MessageSender = ({isAdd,onAdd,isAdded,onCamera,isCamera}:any) => {
  return (
    <View style={appStyles.rowjustify}>
      {
        isAdd&&(
          <TouchableOpacity
          onPress={onAdd}
      activeOpacity={0.6}
        style={{...styles.circleContainer,borderWidth:isAdded?1:-1,borderColor:isAdded?colors.gray200:"transparent"}}>
        <Image style={{ width: 18, height: 18}}
        resizeMode="contain"
         source={isAdded? images.crossgrey:images.plusgrey} />
      </TouchableOpacity>
        )
      }

<TouchableOpacity
      activeOpacity={0.6}
      onPress={onCamera}
      style={{...styles.circleContainer,borderWidth:isCamera?1:-1,borderColor:isCamera?colors.gray200:"transparent"}}>
      <Image style={{ width: 18, height: 18}}
        resizeMode="contain"
         source={images.camera} />
      </TouchableOpacity>
      
      <View
        style={{
          ...appStyles.row,
          height: 40,
          flex: 1,
          borderWidth:1,
          borderColor:colors.grey600,
          paddingHorizontal:15,
          borderRadius:40,

          
        }}>
         
      <View style={{width:"92%"}}>
          <TextInput
          style={{fontSize:15,fontFamily:"SF-Pro-Text-Regular",
          color:colors.white
        }}
          // placeholder=""
          />

      </View>

      <TouchableOpacity
      activeOpacity={0.6}
        style={{
          width: 30,
          height: 30,
          borderRadius: 9999,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Image style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
         source={images.send} />
      </TouchableOpacity>
     

     

        </View>
    
    </View>
  );
};
export default MessageSender;

const styles=StyleSheet.create({
  circleContainer:{
    width:40,height:40,
    borderRadius:999,
    backgroundColor:colors.grey500,
    alignItems:"center",
    justifyContent:"center",
    marginRight:10
    

}

})
