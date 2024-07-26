import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MainLayout from '../_layout/MainLayout';
import { globalStyles } from '../../styles/global';
import { wp, hp } from '../../utils/responsive';

const HomeScreen = ({ navigation }) => {
  const renderStoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Story', { storyId: item.id })} style={styles.storyItem}>
      <Image source={{ uri: item.image }} style={styles.storyImage} />
      <Text style={styles.storyTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const stories = [
    { id: '1', title: 'Kweku Ananse and the Pot', image: '/assets/images/thinkingMan.png' },
    { id: '2', title: 'Kweku Ananse and the Sun', image: '/assets/images/familyGather.jpg' },
  ];

  return (
    <MainLayout>
      <Text style={styles.greeting}>Hi, Chris</Text>
      <Text style={styles.welcome}>Welcome back</Text>

      <Text style={globalStyles.sectionTitle}>From Your Library</Text>
      <FlatList
        horizontal
        data={stories}
        renderItem={renderStoryItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatList}
      />

      <Text style={globalStyles.sectionTitle}>Popular Stories</Text>
      <FlatList
        horizontal
        data={stories}
        renderItem={renderStoryItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatList}
      />

      <Text style={globalStyles.sectionTitle}>Recommended Stories</Text>
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
  greeting: {
    fontSize: hp(3),
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: hp(2.5),
    color: 'gray',
    marginBottom: hp(2),
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

export default HomeScreen;
