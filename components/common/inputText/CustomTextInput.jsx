import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from '../../styles/global';

const CustomTextInput = ({ placeholder, value, onChangeText, secureTextEntry = false, autoCapitalize = 'none' }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: colors.textPrimary,
  },
});

export default CustomTextInput;
