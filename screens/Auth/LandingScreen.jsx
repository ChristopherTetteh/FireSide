import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import MainLayout from '../_layout/MainLayout';
import { globalStyles, colors } from '../../styles/global';
import { wp, hp } from '@/utils/responsive';

const LandingScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <StatusBar style='dark' backgroundColor='black'/>

      <ImageBackground
        source={require('../../assets/images/fireSide.jpeg')}
        style={styles.background}
        resizeMode="cover"
        >
        <View style={styles.overlay}>
          <View style={styles.bottomContainer}>

          <Text style={styles.title}>Welcome To FireSide</Text>
          <Text style={styles.subtitle}>Explore the best of African folklore stories</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Onboarding1')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: wp(100),
    height: hp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
    fontSize: wp(8),
    color: colors.background, // gold color
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: hp(2),
  },
  subtitle: {
    fontSize: wp(3.5),
    color: colors.background,
    textAlign: 'center',
    marginBottom: hp(6),
  },
  button: {
    backgroundColor: colors.primary, // orange red color
    paddingVertical: hp(2),
    paddingHorizontal: wp(35),
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: wp(4),
    fontWeight: 'bold',
  },
});

export default LandingScreen;
