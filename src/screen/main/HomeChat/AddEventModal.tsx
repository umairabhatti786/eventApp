import { BlurView, VibrancyView } from "@react-native-community/blur";
import React from "react";
import {
  ScrollView,
  Text,
  useWindowDimensions,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { Spacer } from "../../../components/Spacer";

interface Props {
  isModalVisible?: boolean;
  setModalVisible?: any;
  children?: React.ReactNode;
  backdropStyle?: any;
  onNewChat?:any,
  onNewEvent?:any
}

const AddEventModal: React.FC<Props> = ({
  isModalVisible,
  setModalVisible,
  children,
  backdropStyle,
  onNewEvent,
  onNewChat
}) => {
  const windowWidth = useWindowDimensions().width;

  return (
    <Modal
      style={styles.modalContainer}
      animationIn="fadeIn"
      animationOut="fadeOut"
      deviceWidth={windowWidth}
      isVisible={isModalVisible}
      onBackButtonPress={() => setModalVisible?.(false)}
      onBackdropPress={() => setModalVisible?.(false)}
      backdropColor="transparent"
      customBackdrop={
        <BlurView
          // blurAmount={100}
          blurRadius={100}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="transparent"
          // blurType="light"
          style={{
            flex: 1,
            opacity: 1,
            backgroundColor: "transparent",
            alignItems: "flex-end",
            justifyContent: "flex-end",

            ...backdropStyle,
          }}
        ></BlurView>
      }
    >
      <View style={{ flex: 1, justifyContent: "flex-end", bottom: "12%" }}>
        <View style={{ ...appStyles.rowjustify, marginHorizontal: 30 }}>
          <TouchableOpacity
             onPress={onNewChat}
             activeOpacity={0.6}
            style={{
              width: windowWidth / 2.6,
              height: 190,
              backgroundColor: "#282727",
              borderRadius: 20,
              paddingVertical: 15,
              alignItems: "center",
            }}
          >
            <CustomText
              text={"New Chat"}
              color={colors.white}
              size={22}
              style={{ marginTop: 5, textAlign: "center" }}
              fontWeight="700"
              fontFam="SF-Pro-Display-Bold"
            />
            <Spacer height={10} />

            <Image
              source={images.newchat}
              style={{
                height: 120,
                width: 120,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={onNewEvent}
          activeOpacity={0.6}
            style={{
              width: windowWidth / 2.6,
              height: 190,
              backgroundColor: "#282727",
              borderRadius: 20,
              paddingVertical: 15,
              alignItems: "center",
            }}
          >
            <CustomText
              text={"New Event"}
              color={colors.white}
              size={22}
              style={{ marginTop: 5, textAlign: "center" }}
              fontWeight="700"
              fontFam="SF-Pro-Display-Bold"
            />
            <Spacer height={15} />

            <Image
              source={images.newevent}
              style={{
                height: 120,
                width: 120,
                //   tintColor: focused == 2 ? colors.white : colors.gray1,
              }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setModalVisible(false)}
          style={{
            width: 65,
            height: 65,
            backgroundColor: colors.white,
            alignSelf: "center",
            top: 33,
            left: 5,
            borderRadius: 9999,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={images.cross}
            style={{
              height: 35,
              width: 35,
              //   tintColor: focused == 2 ? colors.white : colors.gray1,
            }}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: "flex-start",
    paddingTop: "40%",
  },
});

export default AddEventModal;
