import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import FormField from 'components/FormField';
import CustomButton from 'components/CustomButton';
import { Link } from 'expo-router';

import {createUser} from '../../lib/appwrite'

type Interests = {
  sports: boolean;
  music: boolean;
  art: boolean;
  technology: boolean;
  science: boolean;
};

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [programme, setProgramme] = useState('');
  
  const [interests, setInterests] = useState<Interests>({
    sports: false,
    music: false,
    art: false,
    technology: false,
    science: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
   createUser();
   
  };

  const handleInterestChange = (interest: keyof Interests) => {
    setInterests({ ...interests, [interest]: !interests[interest] });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image 
            source={require('../assets/[removal.ai]_f5a78b18-0ec0-4e40-855b-600a98d67f60-img-20240530-wa0053_EXIHJ6.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Sign Up</Text>
          <FormField
            title="Username"
            value={username}
            placeholder="Enter your username"
            handleChangeText={setUsername}
            autoCapitalize="none"
          />
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
          <FormField
            title="Confirm Password"
            value={confirmPassword}
            placeholder="Confirm your password"
            handleChangeText={setConfirmPassword}
            secureTextEntry
            autoCapitalize="none"
          />
          <FormField
            title="Date of Birth"
            value={dob}
            placeholder="YYYY-MM-DD"
            handleChangeText={setDob}
            autoCapitalize="none"
          />
          <FormField
            title="Year of Study"
            value={yearOfStudy}
            placeholder="Enter your year of study"
            handleChangeText={setYearOfStudy}
            keyboardType="numeric"
            autoCapitalize="none"
          />
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerTitle}>Programme</Text>
            <Picker
              selectedValue={programme}
              style={styles.picker}
              onValueChange={(itemValue) => setProgramme(itemValue)}
            >
              <Picker.Item label="Select your programme" value="" />
              <Picker.Item label="Computer Science" value="computer-science" />
              <Picker.Item label="Business Administration" value="business-administration" />
              <Picker.Item label="Mechanical Engineering" value="mechanical-engineering" />
              <Picker.Item label="Electrical Engineering" value="electrical-engineering" />
              <Picker.Item label="Civil Engineering" value="civil-engineering" />
              <Picker.Item label="Medicine" value="medicine" />
              <Picker.Item label="Law" value="law" />
              <Picker.Item label="Pharmacy" value="pharmacy" />
              <Picker.Item label="Economics" value="economics" />
              <Picker.Item label="Psychology" value="psychology" />
              <Picker.Item label="Mathematics" value="mathematics" />
              <Picker.Item label="Physics" value="physics" />
              <Picker.Item label="Chemistry" value="chemistry" />
              <Picker.Item label="Biology" value="biology" />
              <Picker.Item label="Architecture" value="architecture" />
              <Picker.Item label="Literature" value="literature" />
              <Picker.Item label="History" value="history" />
              <Picker.Item label="Political Science" value="political-science" />
              <Picker.Item label="Sociology" value="sociology" />
              <Picker.Item label="Anthropology" value="anthropology" />
              <Picker.Item label="Art" value="art" />
              <Picker.Item label="Music" value="music" />
              <Picker.Item label="Education" value="education" />
              <Picker.Item label="Agricultural Engineering" value="agricultural" />
            </Picker>
          </View>
          <View style={styles.interestsContainer}>
            <Text style={styles.interestsTitle}>Select your interests</Text>
            {Object.keys(interests).map((interest) => (
              <View key={interest} style={styles.interestItem}>
                <Text style={styles.interestLabel}>{interest.charAt(0).toUpperCase() + interest.slice(1)}</Text>
                <Switch
                  value={interests[interest as keyof Interests]}
                  onValueChange={() => handleInterestChange(interest as keyof Interests)}
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={interests[interest as keyof Interests] ? '#f5dd4b' : '#f4f3f4'}
                />
              </View>
            ))}
          </View>
          <CustomButton 
            title="Sign Up"
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <View style={styles.signupContainer}>
            <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
            <Link href="/sign-in" style={styles.signinLink}>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#11212D',
    padding: 16,
    marginTop: -40,
  },
  image: {
    width: 100,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 16,
  },
  pickerContainer: {
    width: '100%',
    marginBottom: 16,
  },
  pickerTitle: {
    color: 'white',
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    color: 'white',
    backgroundColor: '#334455',
  },
  interestsContainer: {
    width: '100%',
    marginBottom: 16,
  },
  interestsTitle: {
    color: 'white',
    marginBottom: 8,
  },
  interestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  interestLabel: {
    color: 'white',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  alreadyHaveAccountText: {
    color: 'white',
  },
  signinLink: {
    color: '#007BFF',
    marginLeft: 4,
  },
});
