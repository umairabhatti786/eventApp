import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { images } from "../../assets";
import { colors } from "../../utils/colors";
import CustomInput from "../CustomInput";

type Props = {
  placeholder?: string;
  onChangeText?: any;
  navigation?: any;
  textColor?: string;
  filterNotREquired?: boolean;
};

const SearchBar = ({
  placeholder,
  onChangeText,
  textColor,
}: Props) => {
  return (
    <View style={style.main}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
          backgroundColor: colors.lightBlack,
          height: 40,
          paddingHorizontal: 15,
          borderRadius: 10,
        }}
      >
          <View
            style={{
              justifyContent: "center",
              height: "100%",
              marginRight:8,
              // width: "15%",
            }}
          >
            <Image source={images.search} style={{ width: 15, height: 15 }} />
          </View>
          <CustomInput
            placeholder={placeholder}
            textColor={textColor}
        
            onChangeText={onChangeText}
          />
      </View>
    </View>
  );
};
export default SearchBar;

const style = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  img: { width: 23, height: 23 },
});
