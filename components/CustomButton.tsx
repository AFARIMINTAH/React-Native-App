import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress,}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    style={styles.button}>
      <Text style={styles.buttonText}>
      {title}
      </Text>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#89CFF0', // Example background color
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white', // Example text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton
