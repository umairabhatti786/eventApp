import { Text,TouchableOpacity,View,Image } from 'react-native'
import { colors } from '../../utils/colors'
import { appStyles } from '../../utils/AppStyles'
import CustomText from '../CustomText'
import { images } from '../../assets'
import { Spacer } from '../Spacer'

type Props = {
    title?:string
    firstImage?:any
    secondImage?:any
    thirdImage?:any
    thirdHeight?:number,
    thirdWidth?:number
    onProfile?:any
    onNotification?:any
    onInbox?:any
    
}

const CustomHeader = ({ title,firstImage,secondImage,thirdImage,thirdHeight,thirdWidth,onProfile ,onNotification,onInbox}: Props) => {
    return (
        <View style={appStyles.rowjustify}>

            <CustomText
            text={title|| "Chats"}
            color={colors.white}
            size={29}
            fontWeight='700'
            fontFam='SF-Pro-Display-Bold'
            />

            <View style={appStyles.row}>

                <TouchableOpacity
                activeOpacity={0.6}
                onPress={onProfile}
                >
                    <Image
                    style={{width:25,height:25}}
                    source={firstImage||  images.profile}
                    resizeMode="contain"

                    />

                </TouchableOpacity>
                <Spacer width={15}/>

                <TouchableOpacity
                 activeOpacity={0.6}
                 onPress={onNotification}
                >
                    <Image
                    style={{width:23,height:23}}
                    source={secondImage ||  images.bell}
                    resizeMode="contain"
                    />

                </TouchableOpacity>
                <Spacer width={20}/>


                <TouchableOpacity
                 activeOpacity={0.6}
                 onPress={onInbox}
                >
                    <Image
                    style={{width: thirdWidth ||26,height: thirdHeight ||26}}
                    source={ thirdImage|| images.edit}
                    resizeMode="contain"

                    />

                </TouchableOpacity>

                

            </View>

        </View>
       
    )
}
export default CustomHeader
