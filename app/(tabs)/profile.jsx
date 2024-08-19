import React, { useEffect, useState } from 'react';
import { View, Text, Alert, Image, StyleSheet, Pressable, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { account, getCurrentUser, handelogout } from '../../lib/appwriteConfig'; 
import { icons } from '../../constants';
import { router } from 'expo-router';
import { colors } from '../../styles/globalStyles';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchUser() {
      try {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
        } else {
          throw new Error("User not found");
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Could not fetch user details.");
      }
    }

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await handelogout();
    router.replace('/sign-in')
  };

  const showLogoutConfirmation = () => {
    setModalVisible(true);
  };

  const cancelLogout = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Replace with user's actual avatar if available
            style={styles.avatar}
          />
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.email}>{user.email}</Text>

          {/* Logout Button */}
          <Pressable onPress={showLogoutConfirmation} style={styles.logoutButton}>
            <Image
              source={icons.logoutIcon}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.logoutText}>Log out</Text>
          </Pressable>

          {/* Logout Confirmation Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={cancelLogout}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Confirm Logout</Text>
                <Text style={styles.modalMessage}>Are you sure you want to log out?</Text>

                <View style={styles.modalButtons}>
                  <TouchableOpacity onPress={handleLogout} style={styles.modalButton}>
                    <Text style={styles.modalButtonText}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={cancelLogout} style={[styles.modalButton, styles.modalButtonCancel]}>
                    <Text style={styles.modalButtonText}>No</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 10,
    shadowColor: '#ff9900',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily:'Poppins-Medium',
    marginLeft: 15,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FF6347',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  modalButtonCancel: {
    backgroundColor: '#777',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
