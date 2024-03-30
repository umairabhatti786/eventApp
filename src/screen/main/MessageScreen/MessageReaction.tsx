import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { colors } from "../../../utils/colors";
import { appStyles } from "../../../utils/AppStyles";
import { image } from "../../../assets/defaultimages";
import { images } from "../../../assets";
import CustomText from "../../../components/CustomText";
import CustomLine from "../../../components/CustomLine";
const MessageReaction = ({
  modalVisible,
  setModalVisible,
  chatList,
  selectedMessage,
  selectedMessageIndex,
  setChatList,
  setReply
}: any) => {
  const reaction = [
    { react: "❤️" },
    { react: "👍" },
    { react: "👎" },
    { react: "😂" },
    { react: "🥲" },
    { react: "❔" },
  ];

  console.log("chatList", chatList);
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      onBackButtonPress={() => setModalVisible(false)}
      style={{ alignItems: "center" }}>
      <Pressable
        onPress={() => setModalVisible(false)}
        style={{
          backgroundColor: "#00000010",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <View
          style={{
            // paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: "#262629",
            borderRadius: 30,
            flexDirection: "row",
            alignItems: "center",
          }}>
          {reaction.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  const list = [...chatList];

                  list[selectedMessageIndex] = {
                    ...list[selectedMessageIndex],
                    reaction: item.react,
                  };

                  setChatList(list);

                  setModalVisible(false);
                }}
                activeOpacity={0.6}
                style={{ marginHorizontal: 10 }}>
                <Text style={{ fontSize: 25 }}>{item.react}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{ ...styles.messageContainer, marginVertical: 10 }}>
          <View>
            <Text style={styles.text}>
              {"Thanks for all those fun photos! It’s been an awesome party! "}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "70%",
            alignSelf: "center",
            borderRadius: 15,
            backgroundColor: "#262629",
          }}>
          <View>
            <TouchableOpacity
            activeOpacity={0.6}
            onPress={()=>{
              setReply(true)
              setModalVisible(false)

            }}
              style={{
                ...appStyles.rowjustify,
                paddingHorizontal: 10,
                paddingVertical: 15,
              }}>
              <CustomText
                text={"Reply"}
                color={colors.white}
                size={17}
                fontWeight="500"
                // style={{ textAlign: "right", marginVertical: 10 }}
                numberOfLines={1}
                // fontFam="SF-Pro-Display-Bold"
              />

              <Image
                style={{ width: 18, height: 18 }}
                source={images.arrowback}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <CustomLine
              // height={1}
              backgroundColor={"#FFFFFF60"}
            />
          </View>

          <View>
            <View
              style={{
                ...appStyles.rowjustify,
                paddingHorizontal: 10,
                paddingVertical: 15,
              }}>
              <CustomText
                text={"Copy"}
                color={colors.white}
                size={17}
                fontWeight="500"
                // style={{ textAlign: "right", marginVertical: 10 }}
                numberOfLines={1}
                // fontFam="SF-Pro-Display-Bold"
              />

              <Image
                style={{ width: 18, height: 18 }}
                source={images.copymess}
                resizeMode="contain"
              />
            </View>

            <CustomLine
              // height={1}
              backgroundColor={"#FFFFFF50"}
            />
          </View>

          <View>
            <View
              style={{
                ...appStyles.rowjustify,
                paddingHorizontal: 10,
                paddingVertical: 15,
              }}>
              <CustomText
                text={"Report"}
                color={colors.white}
                size={17}
                fontWeight="500"
                // style={{ textAlign: "right", marginVertical: 10 }}
                numberOfLines={1}
                // fontFam="SF-Pro-Display-Bold"
              />

              <Image
                style={{ width: 18, height: 18 }}
                source={images.report}
                resizeMode="contain"
              />
            </View>

            <CustomLine
              // height={1}
              backgroundColor={"#FFFFFF50"}
            />
          </View>

          <View>
            <View style={{ ...appStyles.rowjustify, padding: 10 }}>
              <CustomText
                text={"Block"}
                color={"#FF453A"}
                size={17}
                fontWeight="500"
                // style={{ textAlign: "right", marginVertical: 10 }}
                numberOfLines={1}
                // fontFam="SF-Pro-Display-Bold"
              />

              <Image
                style={{ width: 20, height: 20 }}
                source={images.block}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default MessageReaction;

const styles = StyleSheet.create({
  messageContainer: {
    borderRadius: 30,
    backgroundColor: "#262629",

    // flexDirection:"row",
    // alignItems:"center",
    justifyContent: "space-between",
    minHeight: 30,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
    maxWidth: "90%",
  },

  text: {
    color: colors.white,
    // fontFamily:SFCompact.regular,
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 23,
  },
});
