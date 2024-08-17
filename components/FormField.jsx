import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants';
import { borderRadii, colors, fontSizes } from '../styles/globalStyles';

const FormField = ({
  title, value, placeholder,
  handleChangeText, error, otherStyles,
  secureTextEntry, ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{ gap: 8, ...otherStyles }}>
      <Text
        style={{
          color: colors.secondary,
          fontWeight: '500',
          fontSize: fontSizes.medium,
        }}
      >
        {title}
      </Text>
      <View style={{
        width: "100%",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: borderRadii.small,
        backgroundColor: colors.tertairy,
        borderWidth: 1,
        borderColor: isFocused ? colors.primary : colors.secondary,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <TextInput
          style={{
            flex: 1,
            color: colors.secondary,
            fontFamily:'Poppins-Light',
            fontSize: fontSizes.large,
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#555'
          onChangeText={handleChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={secureTextEntry && !showPassword}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              style={{ width: 24, height: 24 }}
              resizeMode='contain'
              source={!showPassword ? icons.eyeIcon : icons.eyeHide}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text style={{ color: 'red', fontSize: fontSizes.small ,fontFamily:'Poppins-Light' }}>{error}</Text>
      )}
    </View>
  );
};

export default FormField;
