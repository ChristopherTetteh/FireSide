import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import OnboardingLayout from '../../components/OnboardingLayout'
const OnboardingScreen1 = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <SafeAreaView style={{ flex:1, width:'100%'}}>
   <OnboardingLayout
       imageSource={images.onboardingImage1}
       title="Best Tales of Kweku Ananse"
       subtitle="Enjoy the best of African folklore stories"
       activeDotIndex={0}
       nextScreen="/onboardingScreen2"
       skipScreen="/sign-up"
   />
    
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default OnboardingScreen1