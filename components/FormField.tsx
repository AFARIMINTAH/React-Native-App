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

  const isPassword = title === 'Password';
  const isConfirmPassword = title === 'Confirm Password';

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
          secureTextEntry={(isPassword || isConfirmPassword) && !showPassword}
          {...props}
        />
        {(isPassword || isConfirmPassword) && (
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
    marginBottom: 16,
    width: '100%',
  },
  fieldTitle: {
    color: 'white',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#11212D',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    width: '100%',
  },
  textInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    color: '#fff',
  },
  iconContainer: {
    padding: 10,
  },
});
