import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import { useState } from 'react'

const SignIn = () => {
  const [form, setform] = useState({
    email:'',
    password:'',
  })

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image 
            source={require('../assets/IMG-20240530-WA0053.jpg')}
            style={styles.image}
          />
          <Text style={styles.text}>Login</Text>
          <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setform({...form,
            email:e
          })}
          keyboardType="email-address"
          />
            <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setform({...form,
            password:e
          })}
          
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#11212D', // Set the background color of the SafeAreaView
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start', // Align content to the left
    justifyContent: 'flex-start', // Align content at the top
    backgroundColor: '#11212D', // Set the background color of the container
    padding: 16, // Add some padding to the container
  },
  image: {
    width: 150, // Set the image width to a fixed size
    height: 150, // Set the image height to a fixed size
    resizeMode: 'cover', // Adjust the resize mode as needed
    marginBottom: 16, // Add some space between the image and text
  },
  text: {
    color: 'white', // Set the text color to white
    fontSize: 18, // Set the text size
  },
})
