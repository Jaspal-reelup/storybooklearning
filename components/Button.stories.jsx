import React from 'react';
import Button from './Button';


export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button title="Click Me" onPress={() => alert('Button Pressed!')} />;
