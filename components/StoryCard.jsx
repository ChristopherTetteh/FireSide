import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';

const StoryCard = ({ story }) => {
  const videoRef = useRef(null);

  return (
    <View style={styles.container}>
      {/* Video Section */}
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          style={styles.video}
          source={{ uri: story.video_url }}
          useNativeControls
          resizeMode="cover"
          isLooping
          shouldPlay
        />
        <TouchableOpacity style={styles.playButton}>
          <MaterialIcons name="play-circle-outline" size={50} color="white" />
        </TouchableOpacity>
      </View>

      {/* Story Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Title:</Text>
          <Text style={styles.value}>{story.title}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Author:</Text>
          <Text style={styles.value}>{story.author}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}>{story.description}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Rating:</Text>
          <View style={styles.ratingContainer}>
            {Array.from({ length: 5 }).map((_, index) => (
              <MaterialIcons
                key={index}
                name={index < story.rating ? 'star' : 'star-border'}
                size={24}
                color="#FFD700"
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  playButton: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    padding: 15,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
});

export default StoryCard;
