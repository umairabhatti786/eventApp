import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import React from "react";
import { Spacer } from "../Spacer";
import { appStyles } from "../../utils/AppStyles";

type Props = {
 
  taskCount?:number,
  date?:string,
  marginLeft?:number
};

const TaskHeading = ({

  date,
  taskCount,
  marginLeft,
}: Props) => {
  return (
 <View style={{...appStyles.row,marginLeft:marginLeft || 0}}>

<CustomText
            numberOfLines={1}
            text={date}
            color={colors.white}
            fontFam="Inter-Bold"
            size={20}
            // style={{marginLeft:isComplete?0: 15}}
            
          />
          <Spacer width={10}/>
          <View style={styles.taskCount}>

          <CustomText
            text={taskCount}
            color={colors.white}
            fontFam="Inter-Bold"
            size={16}
            
          />

          </View>


 </View>
  );
};
export default TaskHeading;

const styles = StyleSheet.create({
    taskCount:{
        width:25,height:25,
        borderRadius:5,
        backgroundColor:colors.lightGray,
        borderColor:colors.superLightGray,
        alignItems:"center",
        borderWidth:1,
        justifyContent:"center"
    }
})
