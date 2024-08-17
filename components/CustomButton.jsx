import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colors, borderRadii, fontSizes } from '../styles/globalStyles';

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  icon,
  iconStyles,
  iconPosition = 'left',
  backgroundColor = colors.primary
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: borderRadii.large,
        minHeight: 62,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: icon ? 'row' : 'column',
        ...containerStyles,
        opacity: isLoading ? 0.5 : 1
      }}
      disabled={isLoading}
    >
      {icon && iconPosition === 'left' && (
        <Image
          source={icon}
          style={[styles.icon, iconStyles]}
        />
      )}
      <Text style={{
        color: 'black',
        fontFamily:'Poppins-Regular',
        fontSize: fontSizes.large,
        ...textStyles
      }}>
        {title}
      </Text>
      {icon && iconPosition === 'right' && (
        <Image
          source={icon}
          style={[styles.icon, iconStyles]}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 12,
  },
});

export default CustomButton;
