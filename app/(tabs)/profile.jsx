import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { account, getCurrentUser, handelogout } from '../../lib/appwriteConfig'; 
import { config } from '../../lib/appwriteConfig';


export default function Profile() {
  const [user, setUser] = useState(null);
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

  const handleLogout =  () => {
    handelogout()
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

          <Button title="Logout" onPress={handleLogout} />
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
});
