import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useGlobalContext } from '../../context/GlobalProvider'; // Import the global context
import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globalStyles';
import { wp, hp } from '../../utils/responsive';
import { icons, images } from '../../constants'; // Import the required icons and images
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

// Sample data for stories (This can be replaced with dynamic data from an API)
const libraryData = [
  { id: '1', title: 'Kweku Ananse and the ...', image: images.onboardingImage1, rating: 4.0, progress: 70, views: 49 },
  { id: '2', title: 'Kweku Ananse and the ...', image: images.onboardingImage2, rating: 4.0, progress: 82, views: 53 },
  { id: '3', title: 'Kweku Ananse and the ...', image: images.storyImage, rating: 4.0, progress: 92, views: 43 },
];

const popularStoriesData = [
  { id: '1', title: 'Kweku Ananse in the land of Idiot', image: images.onboardingImage2, rating: 4.0, author: 'Yaw Asare', views: 89 },
  { id: '2', title: 'Kweku Ananse in the land of Idiot', image: images.onboardingImage1, rating: 4.0, author: 'Yaw Asare', views: 90 },
  { id: '3', title: 'Kweku Ananse in the land of Idiot', image: images.onboardingImage1, rating: 4.0, author: 'Yaw Asare', views: 89 },
];

// Combining all sections into one FlatList
const sectionsData = [
  { title: 'From Your Library', data: libraryData, horizontal: true },
  { title: 'Popular Stories', data: popularStoriesData, horizontal: false },
  { title: 'Recommended Stories', data: popularStoriesData, horizontal: false },
];

const StoryCard = ({ item }) => {
  const navigation = useNavigation();

  const openStoryDetails = () => {
    navigation.navigate('StoryDetails', { story: item });
  };

  return (
    <TouchableOpacity onPress={openStoryDetails} style={styles.storyCard}>
      <Image source={item.image} style={styles.storyImage} />
      <View style={styles.viewsContainer}>
        <Image source={icons.eyeIcon} style={styles.eyeIcon} />
        <Text style={styles.viewsText}>{item.views}</Text>
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
};

const CardInfo = ({ item }) => {
  const navigation = useNavigation();

  const openStoryDetails = () => {
    navigation.navigate('StoryDetails', { story: item });
  };

  return (
    <TouchableOpacity onPress={openStoryDetails} style={styles.cardInfo}>
      <Image source={item.image} style={styles.storyImage} />
      <View style={styles.viewsContainer}>
        <Image source={icons.eyeIcon} style={styles.eyeIcon} />
        <Text style={styles.viewsText}>{item.views}</Text>
      </View>
      <View style={styles.cardInfoContent}>
        <Text style={styles.storyTitle}>{item.title}</Text>
        <View style={styles.ratingContainer}>
          <Image source={icons.starIcon} style={styles.starIcon} />
          <Text style={styles.storyRating}>{item.rating}</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${item.progress}%` }]} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Home = () => {
  const { user, isLoggedIn } = useGlobalContext(); // Destructure user and isLoggedIn from global context

  const renderStoryCard = ({ item }) => <StoryCard item={item} />;
  const renderCardInfo = ({ item }) => <CardInfo item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Part */}
      <View style={styles.headerContainer}>
        <View>
          {isLoggedIn && user && ( // Check if user is logged in and user data exists
            <Text style={styles.userText}>Hi, {user.username}</Text> // Display the username
          )}
          <Text style={styles.welcomeText}>Welcome to Fire Side</Text>
        </View>
        <Image source={icons.profileIcon} style={{ width: 40, height: 40 }} />
      </View>

      <FlatList
        data={sectionsData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.sectionContainer}>
            {/* Render the section title */}
            <Text style={styles.sectionTitle}>{sectionsData[index].title}</Text>
            {/* Render the horizontal or vertical list */}
            <FlatList
              data={item.data}
              renderItem={sectionsData[index].horizontal ? renderCardInfo : renderStoryCard}
              keyExtractor={(item) => item.id}
              horizontal={sectionsData[index].horizontal}
              showsHorizontalScrollIndicator={sectionsData[index].horizontal}
              showsVerticalScrollIndicator={!sectionsData[index].horizontal}
              contentContainerStyle={styles.flatListContainer}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingHorizontal: wp(5),
    paddingVertical: hp(4),
    backgroundColor: colors.secondary,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userText: {
    fontSize: wp(4.5),
    fontFamily: 'Poppins-Medium',
    color: colors.textBalck,
    textAlign: 'left',
    marginBottom: hp(1),
  },
  welcomeText: {
    fontFamily: 'Poppins-Light',
    color: colors.textSecondary,
  },
  sectionContainer: {
    marginVertical: hp(2),
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: wp(5),
    color: colors.textBalck,
    marginBottom: hp(1),
  },
  flatListContainer: {
    paddingVertical: hp(1),
  },
  storyCard: {
    width: wp(90),
    marginBottom: hp(2),
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  cardInfo: {
    width: wp(40),
    marginRight: wp(2),
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  storyImage: {
    width: '100%',
    height: hp(20),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    fontFamily: 'Poppins-Regular',
    fontSize: wp(3.5),
    color: 'white',
  },
  storyInfo: {
    padding: wp(4),
  },
  cardInfoContent: {
    padding: wp(4),
  },
  storyTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: wp(4),
    color: colors.textBalck,
    marginTop: hp(1),
  },
  storyAuthor: {
    fontFamily: 'Poppins-Regular',
    fontSize: wp(3.5),
    color: colors.textSecondary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(0.5),
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
  progressBar: {
    height: hp(1),
    backgroundColor: 'gray',
    borderRadius: 5,
    marginTop: hp(0.5),
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
});

export default Home;
