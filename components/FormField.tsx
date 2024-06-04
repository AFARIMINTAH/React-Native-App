import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface FormFieldProps extends TextInputProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  secureTextEntry = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldTitle}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#888"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          {...props}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
            <MaterialCommunityIcons name={showPassword ? 'eye-off' : 'eye'} size={24} color="#888" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 16, // Space between fields
    width: '100%', // Ensure the container takes the full width
  },
  fieldTitle: {
    color: 'white', // Text color for the field title
    marginBottom: 8, // Space between the title and the input
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#11212D', // Background color for the input container
    borderRadius: 10, // Rounded corners for the input container
    borderWidth: 1, // Border width for the input container
    borderColor: 'grey', // Border color for the input container
    width: '100%', // Full width input container
  },
  textInput: {
    flex: 1, // Take up remaining space
    height: 50, // Fixed height for the input
    paddingHorizontal: 10, // Padding inside the input
    color: '#fff', // Text color inside the input
  },
  iconContainer: {
    padding: 10, // Padding around the icon
  },
});
