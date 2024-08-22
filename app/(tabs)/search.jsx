import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity,ActivityIndicator } from 'react-native';
import { useGlobalContext } from '../../context/GlobalProvider';
import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globalStyles';
import { wp, hp } from '../../utils/responsive';
import { icons, images } from '../../constants';

const searchResults = [
  { id: '1', title: 'Kweku Ananse in the land of Idiot', image: images.onboardingImage1, rating: 4.0, author: 'Yaw Asare', views: 89 },
  { id: '2', title: 'Kweku Ananse in the land of Idiot', image: images.onboardingImage2, rating: 4.0, author: 'Yaw Asare', views: 89 },
  { id: '3', title: 'Kweku Ananse in the land of Idiot', image: images.storyImage, rating: 4.0, author: 'Yaw Asare', views: 89 },
  { id: '4', title: 'Kweku Ananse in the land of Idiot', image: images.storyImage, rating: 4.0, author: 'Yaw Asare', views: 89 },
  { id: '5', title: 'Kweku Ananse in the land of Idiot', image: images.onboardingImage1, rating: 4.0, author: 'Yaw Asare', views: 89 },
  { id: '6', title: 'Kweku Ananse in the land of Idiot', image: images.onboardingImage2, rating: 4.0, author: 'Yaw Asare', views: 89 },
  { id: '7', title: 'Kweku Ananse in the land of Idiot', image: images.storyImage, rating: 4.0, author: 'Yaw Asare', views: 89 },
  { id: '8', title: 'Kweku Ananse in the land of Idiot', image: images.storyImage, rating: 4.0, author: 'Yaw Asare', views: 89 },
 
  // Add more items as needed
];

const Search = () => {
  const { user, isLoggedIn } = useGlobalContext();
  const [activeTab, setActiveTab] = useState('Popular'); // Active Tab state
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [hasMoreContent, setHasMoreContent] = useState(true); // State to check if more content is available

  const loadMoreContent = () => {
    if (hasMoreContent) {
      setIsLoading(true);

      // Simulate a network request to fetch more stories
      setTimeout(() => {
        // Update content or set `hasMoreContent` to false if there is no more data to load
        setIsLoading(false);

        // Example: Assume we've reached the end of the content
        setHasMoreContent(false);
      }, 2000); // Mock delay
    }
  };
  const renderStoryCard = ({ item }) => (
    <TouchableOpacity style={styles.storyCard}>
      <View>
        <Image source={item.image} style={styles.storyImage} />
        <View style={styles.playIconContainer}>
          <Image source={icons.playIcon} style={styles.playIcon} />
        </View>
        <View style={styles.viewsContainer}>
          <Image source={icons.eyeIcon} style={styles.eyeIcon} />
          <Text style={styles.viewsText}>{item.views}</Text>
        </View>
      </View>
      <View style={styles.storyInfo}>
        <Text style={styles.storyTitle}>{item.title}</Text>
        <Text style={styles.storyAuthor}>Author: {item.author}</Text>
        <View style={styles.ratingContainer}>
          <Image source={icons.starIcon} style={styles.starIcon} />
          <Text style={styles.storyRating}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
     
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.searchContainer}>
          <Image source={icons.searchIcon} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search stories......"
            placeholderTextColor={colors.textSecondary}
          />
        </View>
        <Image source={icons.profileIcon} style={styles.profileIcon} />
      </View>
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {['Popular', 'Recommended', 'Favorite'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Story Grid */}
      {searchResults.length > 0 ? (
  <FlatList
    data={searchResults}
    renderItem={renderStoryCard}
    keyExtractor={(item) => item.id}
    numColumns={2}
    columnWrapperStyle={styles.columnWrapper}
    showsVerticalScrollIndicator={true}
    onEndReached={loadMoreContent}
    onEndReachedThreshold={0.5}
    ListFooterComponent={isLoading ? <ActivityIndicator size="large" color={colors.primary} /> : !hasMoreContent && (
      <View style={styles.noMoreContent}>
        <Text style={styles.noMoreContentText}>No more videos available</Text>
      </View>
    )}
  />
) : (
  <View style={styles.noMoreContent}>
    <Text style={styles.noMoreContentText}>No videos available</Text>
  </View>
)}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(1),
    backgroundColor: colors.secondary,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(4),
    marginTop:hp(6)
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: wp(5),
    flex: 1,
    paddingHorizontal: wp(6),
    paddingVertical: hp(1),
    marginRight: wp(2),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: wp(4),
    color: colors.textBalck,
    paddingLeft: wp(2),
  },
  searchIcon: {
    width: wp(5),
    height: hp(3),
    tintColor: colors.textSecondary,
  },
  profileIcon: {
    width: wp(8),
    height: wp(8),
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(5),
  },
  tabButton: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderRadius: wp(5),
    backgroundColor: '#f5f5f5',
  },
  activeTabButton: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontFamily: 'Poppins-Medium',
    fontSize: wp(3),
    color: colors.textBalck,
  },
  activeTabText: {
    color: colors.textWhite,
  },
  storyCard: {
    backgroundColor: colors.secondary,
    borderRadius: wp(4),
    margin: wp(2),
    flex: 1,
    shadowColor: '#7A7A7a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 6,
    
  },
  storyImage: {
    width: '100%',
    height: hp(20),
    borderTopLeftRadius: wp(2),
    borderTopRightRadius: wp(2),
  },
  playIconContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -wp(4) }, { translateY: -wp(4) }],
  },
  playIcon: {
    width: wp(8),
    height: wp(8),
  },
  viewsContainer: {
    position: 'absolute',
    top: hp(1),
    left: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
    borderRadius: 5,
  },
  eyeIcon: {
    width: wp(4),
    height: wp(4),
    tintColor: 'white',
    marginRight: wp(1),
  },
  viewsText: {
    fontFamily: 'Poppins-Bold',
    fontSize: wp(3.5),
    color: 'white',
  },
  storyInfo: {
    padding: wp(3),
  },
  storyTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: wp(4),
    color: colors.textBalck,
    marginTop: hp(1),
  },
  storyAuthor: {
    fontFamily: 'Poppins-Regular',
    fontSize: wp(3.1),
    color: colors.textSecondary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(0.7),
  },
  starIcon: {
    width: wp(4),
    height: wp(4),
    marginRight: wp(1),
  },
  storyRating: {
    fontFamily: 'Poppins-Regular',
    fontSize: wp(3.5),
    color: colors.textSecondary,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  loadMoreButton: {
    alignItems: 'center',
    paddingVertical: hp(2),
  },
  noMoreContent: {
    alignItems: 'center',
    paddingVertical: hp(2),
  },
  noMoreContentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: wp(4),
    color: colors.textSecondary,
  },
});

export default Search;
