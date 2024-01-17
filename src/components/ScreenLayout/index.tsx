import React from 'react'
import { ScrollView, StatusBar, View, SafeAreaView, Dimensions, KeyboardAvoidingView, Platform, Image, ImageBackground } from 'react-native'
import { images } from '../../assets';
import Background from "../../assets/icons/background.svg"
type Props = {
    navigation?: any,
    children?: any,
    title?: string,
    style?: any,
    height?: any,
    isProfileVisible?: boolean
    isLineVisible?: boolean
    linePosition?: any
    bgColor?: any
    ScrollRef?: any
}
const windowHeight = Dimensions.get('window').height;
const ScreenLayout = ({ navigation, children, title, style, height, isProfileVisible, isLineVisible, linePosition, bgColor, ScrollRef }: Props) => {
    return (
        <>
        <View style={[{width:"100%",height:"100%",paddingTop:Platform.OS=="ios"?0:-10},style]}>
<View style={{width:"100%",height:"100%",position:"absolute"}}>
    <Image
   style={{width:"100%",height:"100%"}}
   source={images.background}
 />

</View>

            {/* <ImageBackground
            style={{width:"100%",height:"100%"}}
            source={images.background}
            > */}

                {children}

            {/* </ImageBackground> */}



        </View>
         
        </>
    )
}
export default ScreenLayout