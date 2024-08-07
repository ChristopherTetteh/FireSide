import React from 'react'
import {GestureHandlerRootView}  from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import OnboardingLayout from '../../components/OnboardingLayout'

const OnboardingScreen3 = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <SafeAreaView style={{ flex:1, width:'100%'}}>
    <OnboardingLayout
       imageSource={images.onboardingImage3}
       title="Enjoy Audio Narrations"
       subtitle="Enjoy the best of African folklore stories"
       activeDotIndex={2}
       nextScreen="/sign-up"
       skipScreen="/sign-up"
   />
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}
export default OnboardingScreen3