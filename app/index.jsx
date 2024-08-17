import { View, Text, SafeAreaView, ImageBackground, StyleSheet,StatusBar } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {wp,hp} from '../utils/responsive'
import { images } from '../constants'
import CustomButton from '../components/CustomButton'
import { colors, } from '../styles/globalStyles'

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollContainer}>  
          {/* Back Ground Image  */}

          <ImageBackground
          source={images.welcomeImage}
          resizeMode='cover'
          style={styles.background}
          >
            <View
            style={styles.overlay}
            >
              {/* Overlay Background */}
              <View style={styles.bottomContainer}>
              <Text style={styles.title}>Welcome To FireSide</Text>
             <Text style={styles.subtitle}>Explore the best of African folklore stories</Text>
                <CustomButton
                title="Start Reading "
                handlePress={() => router.push('/sign-in')}
                containerStyles={{ width: "100%", marginTop: 22 }}
                />
              </View>

            </View>
          </ImageBackground>     
       {/* Welcome Text */}
    </View>
    {/* Status Bar */}
    <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
  
  },
  scrollContainer:{
    flex: 1,
  },
  background: {
     flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },  
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  bottomContainer:{
    position: 'absolute',
    bottom:hp(8),
    alignItems: 'center',
  },
  title: {
    fontSize: wp(7.2),
    color: colors.secondary, 
    textAlign: 'center',
    marginBottom: hp(1.5),
    fontFamily:'Poppins-ExtraBold'
  },
  subtitle: {
    fontSize: wp(3.7),
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: hp(3),
    fontFamily:'Poppins-Light'
  },
})

export default App

