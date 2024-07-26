import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { colors } from '../../styles/global';

const MainLayout = ({ children }) => {
  return (
    
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default MainLayout;
