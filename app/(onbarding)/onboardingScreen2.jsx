import {GestureHandlerRootView}  from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react' 
import { images } from '../../constants'
import OnboardingLayout from '../../components/OnboardingLayout'

const OnboardingScreen2 = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <SafeAreaView style={{ flex:1, width:'100%'}}>
   <OnboardingLayout
       imageSource={images.onboardingImage2}
       title="Discover New Stories"
       subtitle="Explore latest and trending stories"
       activeDotIndex={1}
       nextScreen="/onboardingScreen3"
       skipScreen="/sign-up"
   />
    </SafeAreaView>
    </GestureHandlerRootView>
  )
} 
export default OnboardingScreen2