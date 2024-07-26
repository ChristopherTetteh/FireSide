import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainLayout from '../_layout/MainLayout';
import { globalStyles, colors } from '../../styles/global';
import { hp } from '@/utils/responsive';

const ProfileScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <Text style={globalStyles.title}>Your Profile</Text>
      <View style={styles.profileContainer}>
        <Text style={styles.profileText}>Name: Chris</Text>
        <Text style={styles.profileText}>Email: chris@example.com</Text>
      </View>
      <Button title="Edit Profile" color={colors.primary} onPress={() => { /* Handle edit profile */ }} />
      <View style={globalStyles.divider} />
      <Button title="Logout" color={colors.primary} onPress={() => { /* Handle logout */ }} />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    marginVertical: hp(2),
  },
  profileText: {
    fontSize: hp(2.2),
    marginBottom: hp(1),
  },
});

export default ProfileScreen;
