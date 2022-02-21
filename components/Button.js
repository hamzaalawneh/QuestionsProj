import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const Button = props => {
  return (
    <TouchableOpacity onPress={() => props.action()} style={props.buttonStyle}>
      <Text style={[{fontWeight: 'bold'}, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
};
