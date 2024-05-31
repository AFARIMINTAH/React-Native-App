import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const FormField = ({ title, value, placeholder, handleChangeText, secureTextEntry = false, ...props }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldTitle}>{title}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#888"
        onChangeText={handleChangeText}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 16, // Space between fields
  },
  fieldTitle: {
    color: 'white', // Text color for the field title
    marginBottom: 8, // Space between the title and the input
  },
  textInput: {
    width: 320, // Full width input
    height: 50, // Fixed height for the input
    backgroundColor: 'grey', // White background for the input
    borderRadius: 5, // Rounded corners for the input
    paddingHorizontal: 10, // Padding inside the input
    color: '#000', // Text color inside the input
  },
});
