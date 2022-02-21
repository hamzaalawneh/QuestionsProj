import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/WelcomePage';
import QuizPage1 from './screens/QuizPage1';
import QuizPage2 from './screens/QuizPage2';

const Stack = createNativeStackNavigator();

function MainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QuizPage1"
          component={QuizPage1}
          options={{headerTitle: 'Question 1'}}
        />
        <Stack.Screen
          name="QuizPage2"
          component={QuizPage2}
          options={{headerTitle: 'Question 2'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainApp;
