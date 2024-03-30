import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { appStyles } from '../../utils/AppStyles'
import { Spacer } from '../Spacer'
import CustomText from '../CustomText'
import { colors } from '../../utils/colors'
import { images } from '../../assets'

const HorizontalContainer = ({txt,img}) => {
  return (
    <View style={appStyles.rowjustify}>
        
          
        <CustomText
          text={txt}
          color={colors.white}
          size={22}
          fontWeight="700"
          numberOfLines={1}
          fontFam="SF-Pro-Display-Bold"
        />

        <TouchableOpacity>
          <Image
            style={{ width: 26, height: 26 }}
            source={img}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
  )
}

export default HorizontalContainer

const styles = StyleSheet.create({})