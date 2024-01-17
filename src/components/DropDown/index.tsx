import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";

const DropDown = ({ data, value, placeholderColor, placeholder }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        containerStyle={{borderRadius:10,backgroundColor:colors.lightGray,height:150,borderWidth:-1}}
        placeholderStyle={{
          ...styles.placeholderStyle,
          color: placeholderColor || colors.white,
        }}
        itemContainerStyle={{borderRadius:10,borderBottomWidth:1,borderColor:colors.placeholdeColor,marginVertical:5}}
        
        selectedTextStyle={styles.selectedTextStyle}
        
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={styles.inputTextStyle}
        renderItem={(item)=>{
          console.log("Itemdata",item)
          return(
            <View style={{height:30,backgroundColor:colors.lightGray,justifyContent:"center",borderTopRightRadius:5,borderTopLeftRadius:5,paddingHorizontal:10}}>

              <CustomText
              text={item.label}
              color={colors.white}
              />

            </View>
          )
        }}
        data={data}
        // search
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={placeholder || "Select"}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        // backgroundColor	={"red"}
        // renderSelectedItem={()=>{

        //   return(

        //   )
        // }}
        onChange={(item) => {
          if (item.value == value) {
            setOpen(false);
            // setValue();
            return;
          }
          //   setValue(item.value);
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DropDown;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 15,
  },
  dropdown: {
    height: 55,
    borderColor: colors.superLightGray,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: colors.white,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.white,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: colors.white,
  },
  inputTextStyle: {
    fontSize: 16,
    color: colors.white,
    backgroundColor:"red",
   
    
  },
});
