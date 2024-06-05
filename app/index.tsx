import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Image, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from 'components/CustomButton';
import { Redirect, router } from 'expo-router';

// Define the main App function component
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/[removal.ai]_f5a78b18-0ec0-4e40-855b-600a98d67f60-img-20240530-wa0053_EXIHJ6.png')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Discover Endless Possibilities with </Text>
          <Text style={styles.campusLinkText}>CAMPUSLINK</Text>
          <Text style={styles.campusLinkDescription}>
            "Welcome to CampusLink, your all-in-one solution for campus life—connect, discover, explore!"
          </Text>
          <CustomButton 
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
          />
        </View>
      </ScrollView>
      <StatusBar 
        backgroundColor='#161622'
        style='light'
      />
    </SafeAreaView>
  );
}

// Define styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11212D',
  },
  logoContainer: {
    alignItems: 'center', // Center content horizontally
    paddingTop: 40, // Adjust the padding to move the image slightly below the status bar
  },
  image: {
    marginTop: -190,
    width: 500, // Set your desired width
    height: 500, // Set your desired height
    resizeMode: 'contain', // Adjust the resize mode as needed
  },
  imageText: {
    color:'white',
    marginTop: 10, // Add margin to separate text from image
    fontSize: 20, // Set your desired font size
    fontWeight: 'bold', // Optionally set the font weight
  },
  campusLinkText: {
    color: '#89CFF0', // Set text color to blue
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  campusLinkDescription: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
  scrollViewContent: {
    flexGrow: 1, // Ensure content can be scrolled if needed
    justifyContent: 'center', // Center content vertically
  },
});
