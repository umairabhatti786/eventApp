import { Pressable, Text, View, TextInput } from 'react-native'
import { colors } from '../../utils/colors'
import CustomText from '../CustomText'
import { font } from '../../utils/font'

type Props = {
    placeholder?: string
    onChangeText?: any
    height?: any
    bgColor?: any
    textColor?: string
    borderRadius?: number
    style?: any
}

const CustomInput = ({ onChangeText, placeholder, textColor, height, bgColor, borderRadius, style }: Props) => {
    return (
        <TextInput
            style={{ fontSize: 17,fontFamily:"SF-Pro-Text-Regular", flex: 1, color: textColor, height: 47, backgroundColor: bgColor, borderRadius: borderRadius, ...style }}
            placeholder={placeholder}
            placeholderTextColor={colors.gray200}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={onChangeText}
        />
    )
}
export default CustomInput
