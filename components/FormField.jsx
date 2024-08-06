import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants';
import { borderRadii, colors, fontSizes } from '../styles/globalStyles';

const FormField = ({
  title, value, placeholder,
  handleChangeText, otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const[isFocused,setIsFocused]=useState(false)

  return (
    <View style={{ gap: 8, ...otherStyles }}>
      <Text
        style={{
          color: colors.secondary,
          fontWeight: '400',
          fontSize: fontSizes.large,
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
        borderColor: isFocused ? colors.primary : colors.secondary,        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <TextInput
          style={{
            flex: 1,
            color: colors.secondary,
            fontWeight: 'normal',
            fontSize: fontSizes.large,
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#FF9900"
          onChangeText={handleChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={title === 'Password' && !showPassword}
          {...props}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              style={{ width: 24, height: 24 }}
              resizeMode='contain'
              source={!showPassword ? icons.eyeIcon : icons.eyeHide}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField