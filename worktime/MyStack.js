import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BannerPage from './components/Banner';
import RegistrationPage from './components/RegistrationPage';
import EnterPage from './components/EnterPage';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Banner"
          component={BannerPage}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
         name="Registration" 
         component={RegistrationPage}
        />
        <Stack.Screen
         name="Enter" 
         component={EnterPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;