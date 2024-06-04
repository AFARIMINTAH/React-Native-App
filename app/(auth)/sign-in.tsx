import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);
    // Add your form submission logic here
    // After submission, reset isSubmitting to false
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image 
            source={require('../assets/[removal.ai]_f5a78b18-0ec0-4e40-855b-600a98d67f60-img-20240530-wa0053_EXIHJ6.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Login</Text>
          <FormField
            title="Email"
            value={email}
            placeholder="Enter your email"
            handleChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <FormField
            title="Password"
            value={password}
            placeholder="Enter your password"
            handleChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
          <CustomButton 
            title="Sign In"
            handlePress={submit}
            isLoading={isSubmitting} // Use isLoading here instead of isloading
          />
          <View style={styles.signupContainer}>
            <Text style={styles.dontHaveAccountText}>Don't have an account?</Text>
            <Link href="/sign-up" style={styles.signupLink}>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#11212D',
  },
  scrollViewContent: {
    flexGrow: 1,
    
  },
  container: {
    flex: 1,
    alignItems: 'center', // Center align content
    justifyContent: 'center', // Center content vertically
    backgroundColor: '#11212D',
    padding: 16,
    marginTop: -40, // Adjusted negative margin to move everything up
  },
  image: {
    width: 100,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16, // Add some space below the image
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  dontHaveAccountText: {
    color: 'white',
  },
  signupLink: {
    color: '#007BFF', // Adjusted link color
    marginLeft: 4, // Adjusted margin between text and link
  },
});
