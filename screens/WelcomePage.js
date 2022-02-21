import * as React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {Button} from '../components/Button';
export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.welcomeTextStyle}>Welcome To The Quiz App</Text>
      <Button
        buttonStyle={styles.buttonStyle}
        textStyle={styles.textStyle}
        text={'Lets Get Started'}
        action={() => navigation.navigate('QuizPage1')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'blue',
    width: 150,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
  },
  welcomeTextStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
