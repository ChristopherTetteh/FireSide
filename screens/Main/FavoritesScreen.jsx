import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MainLayout from '../_layout/MainLayout';
import { globalStyles } from '../../styles/global';
import { wp, hp } from '../../utils/responsive'

const FavoritesScreen = ({ navigation }) => {
  const renderStoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Story', { storyId: item.id })} style={styles.storyItem}>
      <Image source={{ uri: item.image }} style={styles.storyImage} />
      <Text style={styles.storyTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const stories = [
    { id: '1', title: 'Kweku Ananse and the Pot', image: '/assets/images/screen2.jpg' },
    { id: '2', title: 'Kweku Ananse and the Sun', image: '/assets/images/familyGather.jpg' },
  ];

  return (
    <MainLayout>
      <Text style={globalStyles.sectionTitle}>Your Favorites</Text>
      <FlatList
        data={stories}
        renderItem={renderStoryItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatList}
      />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  storyItem: {
    marginBottom: hp(2),
  },
  storyImage: {
    width: '100%',
    height: hp(20),
    borderRadius: wp(2),
  },
  storyTitle: {
    marginTop: hp(1),
    fontSize: hp(2),
  },
  flatList: {
    paddingBottom: hp(2),
  },
});

export default FavoritesScreen;
