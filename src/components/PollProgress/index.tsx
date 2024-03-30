import {
    View,
    StyleSheet,
    Animated,
    Platform,
    Image,
    Text,
    Dimensions,
    ImageBackground,
  } from "react-native";
  import React, { useEffect, useState, useRef } from "react";
import { windowWidth } from "../../utils/CommonFun";
  
  function PollProgress({  steps, step,width }:any) {
    const [progress, setProgress] = useState(new Animated.Value(0));
  
  
    useEffect(() => {
      Animated.timing(progress, {
        toValue: (290 * step) / steps,
        duration: 500,
      }).start();
    }, [step]);
  
    return (
      <>
        <View
          style={{
            height: 8,
            backgroundColor: "#555555",
            borderRadius:30,
            alignSelf:"center",
           
            overflow: "hidden",
            width: width|| windowWidth/1.7,
          
          }}>
          <Animated.View style={[styles.barStyle, { width: progress}]}>
         
          </Animated.View>
        </View>
  
       
      </>
    );
  }
  
  export default PollProgress;
  
  const styles = StyleSheet.create({
    barStyle: {
      backgroundColor: "#34C978",
      height: "100%",
      borderRadius:30,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  