import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../views/HomeScreen';
import Quiz from '../views/Quiz';
import Result from '../views/Result';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Quiz'
        component={Quiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Result'
        component={Result}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
