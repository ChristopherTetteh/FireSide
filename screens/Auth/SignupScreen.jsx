import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import MainLayout from '../_layout/MainLayout';
import { globalStyles, colors } from '../../styles/global';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <MainLayout>
      <Text style={globalStyles.title}>Create Account</Text>
      <Text style={globalStyles.subtitle}>Please fill in the fields below to continue</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
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
      <TextInput
        style={globalStyles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Sign Up" color={colors.primary} onPress={() => { /* Handle sign up */ }} />
      <View style={globalStyles.divider} />
      <Button title="Continue with Google" color={colors.primary} onPress={() => { /* Handle Google sign up */ }} />
      <Text style={globalStyles.link} onPress={() => navigation.navigate('Login')}>Already have an account? Sign In</Text>
    </MainLayout>
  );
};

export default SignupScreen;
