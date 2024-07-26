import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import MainLayout from '../_layout/MainLayout';
import { globalStyles, colors } from '../../styles/global';
import { wp, hp } from '@/utils/responsive';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <MainLayout>
      <StatusBar style="dark" backgroundColor="black" />
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Please fill in the fields below to continue</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#A9A9A9"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#A9A9A9"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={() => { /* Handle sign up */ }}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.googleButton} onPress={() => { /* Handle Google sign up */ }}>
          <Image source={require('../../assets/images/google.png')} style={styles.googleLogo} />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUpText}>Already have an account? <Text style={styles.signUpLink}>Sign In</Text></Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(6),
    paddingVertical: hp(5),
    backgroundColor: colors.darkBase,
  },
  title: {
    fontSize: wp(8),
    fontWeight: 'bold',
    color: colors.background,
    textAlign: 'left',
    marginBottom: hp(2),
  },
  subtitle: {
    fontSize: wp(4),
    color: colors.gray,
    textAlign: 'left',
    marginBottom: hp(4),
  },
  input: {
    color: colors.gray,
    paddingVertical: hp(2),
    paddingHorizontal: wp(7),
    borderRadius: 30,
    marginBottom: hp(3),
    fontSize: wp(4),
    borderColor: colors.background,
    borderWidth: 0.7,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: hp(2),
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: hp(3),
  },
  buttonText: {
    color: colors.textPrimary,
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(4),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#A9A9A9',
  },
  orText: {
    marginHorizontal: wp(2),
    color: '#A9A9A9',
    fontSize: wp(4),
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C2C2C',
    paddingVertical: hp(2),
    borderRadius: 30,
    marginBottom: hp(0.2),
  },
  googleLogo: {
    width: wp(6),
    height: wp(6),
    marginRight: wp(5),
  },
  googleButtonText: {
    color: '#FFFFFF',
    fontSize: wp(4),
  },
  signUpText: {
    color: '#A9A9A9',
    fontSize: wp(4),
    textAlign: 'center',
    paddingVertical: hp(4),
  },
  signUpLink: {
    color: colors.primary,
  },
});

export default SignupScreen;
