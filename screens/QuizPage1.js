import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet, TextInput, ToastAndroid} from 'react-native';
import {Button} from '../components/Button';
export default function QuizPage({navigation}) {
  const [value, onChangeVal] = useState(null);
  async function validateThenNavigate() {
    if (!value) {
      ToastAndroid.showWithGravity(
        'Please Fill The Field',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      return;
    }
    navigation.navigate('QuizPage2', {question1: value});
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.welcomeTextStyle}>
        Largest Country in the World by Area :
      </Text>
      <TextInput
        onChangeText={onChangeVal}
        placeholder="Answer Here"
        keyboardType="numeric"
        value={value}
      />
      <Button
        buttonStyle={styles.buttonStyle}
        textStyle={styles.textStyle}
        text={'Next Question'}
        action={() => validateThenNavigate()}
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
