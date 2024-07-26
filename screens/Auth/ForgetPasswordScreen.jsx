import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import MainLayout from '../_layout/MainLayout';
import { globalStyles, colors } from '../../styles/global';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <MainLayout>
      <Text style={globalStyles.title}>Forgot Password</Text>
      <Text style={globalStyles.subtitle}>Enter your email to reset your password</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <Button title="Reset Password" color={colors.primary} onPress={() => { /* Handle password reset */ }} />
      <Text style={globalStyles.link} onPress={() => navigation.navigate('Login')}>Back to Login</Text>
    </MainLayout>
  );
};

export default ForgotPasswordScreen;
