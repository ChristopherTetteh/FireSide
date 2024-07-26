import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import MainLayout from '../_layout/MainLayout';
import { globalStyles } from '../../styles/global';
import { wp, hp } from '../../utils/responsive';

const SearchScreen = ({ navigation }) => {
  const renderStoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Story', { storyId: item.id })} style={styles.storyItem}>
      <Image source={{ uri: item.image }} style={styles.storyImage} />
      <Text style={styles.storyTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const stories = [
    { id: '1', title: 'Kweku Ananse and the Pot', image: '/assets/images/familyGather.jpg/' },
    { id: '2', title: 'Kweku Ananse and the Sun', image: '/assets/images/thinkingMan.png' },
  ];

  return (
    <MainLayout>
      <TextInput style={styles.searchInput} placeholder="Search stories..." />
      <Text style={globalStyles.sectionTitle}>Popular</Text>
      <FlatList
        horizontal
        data={stories}
        renderItem={renderStoryItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatList}
      />
      <Text style={globalStyles.sectionTitle}>Recommended</Text>
      <FlatList
        horizontal
        data={stories}
        renderItem={renderStoryItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatList}
      />
      <Text style={globalStyles.sectionTitle}>Favorites</Text>
      <FlatList
        horizontal
        data={stories}
        renderItem={renderStoryItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatList}
      />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: hp(6),
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: wp(2),
    marginBottom: hp(2),
    paddingHorizontal: wp(2),
  },
  storyItem: {
    marginRight: wp(2),
  },
  storyImage: {
    width: wp(40),
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

export default SearchScreen;
