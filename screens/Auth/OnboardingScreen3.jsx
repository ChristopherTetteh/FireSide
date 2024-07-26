import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import MainLayout from '../_layout/MainLayout';
import { globalStyles, colors } from '../../styles/global';
import { wp, hp } from '@/utils/responsive';

const OnboardingScreen3 = ({ navigation }) => {
  return (
    <MainLayout>
      <StatusBar style="dark" backgroundColor="black" />

      <ImageBackground
        source={require('../../assets/images/screeen3.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>Enjoy Audio Narrations</Text>
            <Text style={styles.subtitle}>Enjoy the best of African folklore stories</Text>
            <View style={styles.carouselDots}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={[styles.dot, styles.activeDot]} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.skipButtonText}>Skip</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingBottom: hp(10),
  },
  bottomContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: hp(6),
  },
  title: {
    fontSize: wp(8),
    color: colors.background, // gold color
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: hp(2),
  },
  subtitle: {
    fontSize: wp(4),
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: hp(4),
  },
  carouselDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hp(4),
  },
  dot: {
    width: wp(2.5),
    height: wp(2.5),
    borderRadius: wp(1.25),
    backgroundColor: colors.background,
    marginHorizontal: wp(3),
  },
  activeDot: {
    backgroundColor: colors.primary,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: hp(2),
    paddingHorizontal: wp(40),
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: hp(4),
  },
  buttonText: {
    color: colors.background,
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  skipButton: {
    borderColor: colors.primary,
    borderWidth: 2,
    paddingVertical: hp(2),
    paddingHorizontal: wp(40),
    borderRadius: 30,
    alignItems: 'center',
  },
  skipButtonText: {
    color: colors.primary,
    fontSize: wp(4),
    fontWeight: 'bold',
  },
});

export default OnboardingScreen3;
