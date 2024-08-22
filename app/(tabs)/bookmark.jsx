import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../styles/globalStyles';
import { wp, hp } from '../../utils/responsive';
import { icons, images } from '../../constants';

const bookmarkStories = [
  { id: '1', title: 'Kweku Ananse in the land of Idiot', image: images.onboardingImage1, rating: 4.0, author: 'Yaw Asare', progress: 100 },
  { id: '2', title: 'Kweku Ananse in the land of Idiot', image: images.onboardingImage2, rating: 4.0, author: 'Yaw Asare', progress: 100 },
  { id: '3', title: 'Kweku Ananse in the land of Idiot', image: images.storyImage, rating: 4.0, author: 'Yaw Asare', progress: 97 },
  { id: '4', title: 'Kweku Ananse in the land of Idiot', image: images.storyImage, rating: 4.0, author: 'Yaw Asare', progress: 100 },
];

const Bookmark = () => {
  const renderStoryItem = ({ item }) => (
    <TouchableOpacity style={styles.storyCard}>
      <Image source={item.image} style={styles.storyImage} />
      <View style={styles.storyInfo}>
        <Text style={styles.storyTitle}>{item.title}</Text>
        <Text style={styles.storyAuthor}>Author: {item.author}</Text>
        <View style={styles.ratingContainer}>
          <Image source={icons.starIcon} style={styles.starIcon} />
          <Text style={styles.storyRating}>{item.rating}</Text>
        </View>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${item.progress}%` }]} />
          <Text style={styles.progressText}>{item.progress}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Favorite Stories</Text>
        <Image source={icons.profileIcon} style={styles.profileIcon} />
      </View>

      <FlatList
        data={bookmarkStories}
        renderItem={renderStoryItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: wp(5),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  headerTitle: {
    fontSize: wp(6),
    fontFamily: 'Poppins-Bold',
    color: colors.textBalck,
  },
  profileIcon: {
    width: wp(8),
    height: wp(8),
  },
  storyCard: {
    flexDirection: 'row',
    marginBottom: hp(2),
    backgroundColor: colors.white,
    borderRadius: wp(4),
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    overflow: 'hidden',
  },
  storyImage: {
    width: '40%', // Image takes 40% of the card
    height: hp(30)
  },
  storyInfo: {
    width: '60%', // Info takes the remaining 60%
    padding: wp(4),
    justifyContent: 'space-between', // Distribute content evenly
  },
  storyTitle: {
    fontSize: wp(4.5),
    fontFamily: 'Poppins-Bold',
    color: colors.textBlack,
  },
  storyAuthor: {
    fontSize: wp(3.5),
    fontFamily: 'Poppins-Regular',
    color: colors.textSecondary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
  },
  starIcon: {
    width: wp(4),
    height: wp(4),
    marginRight: wp(1),
  },
  storyRating: {
    fontSize: wp(3.5),
    fontFamily: 'Poppins-Regular',
    color: colors.textBlack,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
  },
  progressBar: {
    height: hp(0.8),
    backgroundColor: colors.primary,
    borderRadius: wp(4),
    flex: 1,
    marginRight: wp(2),
  },
  progressText: {
    fontSize: wp(3.5),
    fontFamily: 'Poppins-Regular',
    color: colors.textBlack,
  },
});

export default Bookmark;
