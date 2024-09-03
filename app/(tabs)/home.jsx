import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import StoryCard from '../../components/StoryCard'; // Assuming StoryCard component is in the same directory
import { useGlobalContext } from '../../context/GlobalProvider'; // Import the global context
import { hp } from '../../utils/responsive'; // Utility function for responsive design

const HomeScreen = () => {
  const { stories } = useGlobalContext(); // Access stories from global context

  const renderStoryCard = ({ item }) => <StoryCard story={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={stories || []}  // Use stories from global state, fallback to empty array
        renderItem={renderStoryCard}
        keyExtractor={(item) => item.$id.toString()} // Unique key for each story
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: hp(2),
  },
  listContent: {
    paddingBottom: hp(4),
  },
});

export default HomeScreen;
