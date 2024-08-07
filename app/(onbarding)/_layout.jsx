import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const OnboardingLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
        name='onboardingScreen1'
        options={{
          headerShown:false,

        }}
       />
       <Stack.Screen
        name='onboardingScreen2'
        options={{
          headerShown:false,

        }}
       />
       <Stack.Screen
        name='onboardingScreen3'
        options={{
          headerShown:false,

        }}
       />         
      </Stack> 
      <StatusBar backgroundColor='#161622'
      style='light'
      />
    </>
  )
}

export default OnboardingLayout