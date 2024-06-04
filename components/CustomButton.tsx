import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, TouchableOpacityProps } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  handlePress: () => void;
  isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, handlePress, isLoading = false, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress} disabled={isLoading} {...props}>
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF', // Button background color
    padding: 16, // Button padding
    borderRadius: 10, // Button border radius
    alignItems: 'center', // Center align text
    justifyContent: 'center', // Center justify content
    width: '100%', // Full width button
    marginTop: 16, // Margin above the button
  },
  buttonText: {
    color: '#fff', // Button text color
    fontSize: 16, // Button text size
  },
});
