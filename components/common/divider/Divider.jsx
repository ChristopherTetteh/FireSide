import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../styles/global';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: colors.gray,
    marginVertical: 20,
  },
});

export default Divider;
