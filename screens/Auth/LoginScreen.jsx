import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import MainLayout from '../_layout/MainLayout';
import { globalStyles, colors } from '../../styles/global';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <MainLayout>
      <Text style={globalStyles.title}>Welcome Back</Text>
      <Text style={globalStyles.subtitle}>Some random text here</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" color={colors.primary} onPress={() => { /* Handle sign in */ }} />
      <Text style={globalStyles.link} onPress={() => navigation.navigate('ForgotPassword')}>Forgot password?</Text>
      <View style={globalStyles.divider} />
      <Button title="Continue with Google" color={colors.primary} onPress={() => { /* Handle Google sign in */ }} />
      <Text style={globalStyles.link} onPress={() => navigation.navigate('Signup')}>Don't have an account? Sign Up</Text>
    </MainLayout>
  );
};

export default LoginScreen;
