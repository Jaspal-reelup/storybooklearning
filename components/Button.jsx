// src/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, style, textStyle }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Button;
