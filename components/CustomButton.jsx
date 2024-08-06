import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import {colors,borderRadii,fontSizes,fontWeights} from '../styles/globalStyles'
const CustomButton = ({title,handlePress,containerStyles,textStyles,isLoading}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    style={{backgroundColor:colors.primary, 
    borderRadius:borderRadii.large,
    minHeight:62,
    justifyContent:'center',
    alignItems:'center',
    ...containerStyles,
    opacity: isLoading ? "0.5" : "1"

    }}
    disabled={isLoading}
    >

      <Text style={{
        color:colors.textBalck,
        fontWeight:600, 
        fontSize:fontSizes.large,
        ...textStyles
        }}>{title}</Text>
    </TouchableOpacity>
   
  )
}

export default CustomButton