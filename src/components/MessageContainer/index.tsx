import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../utils/colors";
import { appStyles } from "../../utils/appStyles";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "../CustomText";

const MessageContainer = ({ item, isGroup, onLongPress }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: item.from ? "flex-end" : "flex-start",
      }}>
      {!item.from && isGroup ? (
        <View
          style={{
            width: 37,
            height: 37,
            borderRadius: 999,
            backgroundColor: "#D9D9D9",
            marginRight: 10,
            marginTop: 25,
          }}></View>
      ) : (
        <></>
      )}

      <View style={{ maxWidth: "80%" }}>
        {!item.from && isGroup && (
          <CustomText
            text={"Random Person"}
            color={colors.white}
            size={14}
            lineHeight={25}
            style={{ marginLeft: 15 }}
            fontWeight="400"
          />
        )}

        <Pressable onLongPress={onLongPress}>
          <LinearGradient
            start={{ x: 0.3, y: 0.1 }}
            end={{ x: 0.8, y: 1 }}
            colors={[
              item.from ? "#51B9F3" : "#262629",
              item.from ? "#0885CC" : "#262629",
              item.from ? "#0885CC" : "#262629",
            ]}
            style={item.from ? styles.rightContainer : styles.leftContainer}>
            <View>
              <Text style={item.from ? styles.rightText : styles.leftText}>
                {item.message}
              </Text>
            </View>
          </LinearGradient>
        </Pressable>
        {/* {
          item.reaction&&(
            
          )
        } */}

        {
          item?.reaction&&(

            <View
            style={{
              paddingHorizontal:15,
              paddingVertical:7,
             
              borderRadius: 20,
              position: "absolute",
              bottom: -25,
              right: 10,
              alignItems:"center",
              justifyContent:"center",
              borderWidth:2,
              borderColor:colors.black,
              backgroundColor:"#262629"
            }}>
              <Text>{item.reaction}</Text>

            
              
            </View>

          )
        }
      
      </View>
    </View>
  );
};
export default MessageContainer;
const styles = StyleSheet.create({
  rightContainer: {
    backgroundColor: colors.blue,
    borderRadius: 30,

    // flexDirection:"row",
    // alignItems:"center",
    justifyContent: "space-between",
    minHeight: 30,
    alignSelf: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 3,
    maxWidth: "100%",
  },
  leftContainer: {
    backgroundColor: "#262629",
    borderRadius: 30,
    justifyContent: "space-between",
    alignSelf: "flex-start",
    // alignItems:"center",
    minHeight: 30,
    paddingHorizontal: 20,
    paddingVertical: 7,
    maxWidth: "100%",
  },
  rightText: {
    color: colors.white,
    // fontFamily:SFCompact.regular,
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 23,
  },
  rightTime: {
    color: "#E0E0E0",
    // fontFamily:SFCompact.regular,
    fontSize: 13,
    textAlign: "right",
    marginTop: -10,
  },
  leftTime: {
    color: "#9E9E9E",
    // fontFamily:SFCompact.regular,
    fontSize: 12,
    textAlign: "right",
    marginTop: -10,
  },
  leftText: {
    color: colors.white,
    // fontFamily:SFCompact.regular,
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 23,
  },
});
