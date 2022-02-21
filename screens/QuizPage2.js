import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, ToastAndroid} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Button} from '../components/Button';
const axios = require('axios');
export default function QuizPage2({route, navigation}) {
  const setAnswersUrl = 'http://10.0.2.2:3005/setAnswers';
  let user_id = 100;
  let FRUITS = {
    GRAPE: 'grape',
    BANANA: 'banana',
    ORANGE: 'orange',
    TOMATO: 'tomato',
  };
  const [selectedVal, setSelectedVal] = useState();
  async function saveData() {
    if (!selectedVal) {
      ToastAndroid.showWithGravity(
        'Please Fill One Of The Fields',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      return;
    }
    let selectedValues = [
      {
        questionId: 1,
        answer: route.params.question1.toLowerCase(),
        userId: user_id,
      },
      {questionId: 2, answer: selectedVal, userId: user_id},
    ];

    axios
      .post(setAnswersUrl, selectedValues)
      .then(() => {
        ToastAndroid.showWithGravity(
          'Quiz Completed',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
        navigation.popToTop();
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.welcomeTextStyle}>Which Fruit is the smallest :</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{width: '30%'}}>Grape</Text>
        <CheckBox
          disabled={false}
          value={selectedVal == FRUITS.GRAPE ? true : false}
          onValueChange={() => setSelectedVal(FRUITS.GRAPE)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{width: '30%'}}>Banana</Text>
        <CheckBox
          disabled={false}
          value={selectedVal == FRUITS.BANANA ? true : false}
          onValueChange={() => setSelectedVal(FRUITS.BANANA)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{width: '30%'}}>Orange</Text>
        <CheckBox
          disabled={false}
          value={selectedVal == FRUITS.ORANGE ? true : false}
          onValueChange={() => setSelectedVal(FRUITS.ORANGE)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{width: '30%'}}>Tomato</Text>
        <CheckBox
          disabled={false}
          value={selectedVal == FRUITS.TOMATO ? true : false}
          onValueChange={() => setSelectedVal(FRUITS.TOMATO)}
        />
      </View>
      <Button
        buttonStyle={styles.buttonStyle}
        textStyle={styles.textStyle}
        text={'Submit The Quiz'}
        action={() => saveData()}
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
