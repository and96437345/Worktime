import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {CheckBox, View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import BannerPage from "./components/Banner";
import RegistrationPage from "./components/RegistrationPage";
import EnterPage from "./components/EnterPage";
import StartDayPage from './components/StartDayPage';
import ListPage from './components/ListPage';
import { styles } from "./styles/style";
// import CheckBox from '@react-native-community/checkbox';

export default function App() {


  // const handleLogin = () => {
  //   const checkPassword = checkPasswordValidity(password);
  //   if (!checkPassword) {
  //     user_login({
  //       email: email.toLocaleLowerCase(),
  //       password: password,
  //     })
  //       .then(result => {
  //         console.log(result);
  //         if (result.status == 200) {
  //           AsyncStorage.setItem('AccessToken', result.data.token);
  //           NavigationContainer.replace('BannerPage');
  //         }
  //       })
  //       .catch(err => {
  //         console.error(err);
  //       });
  //   } else {
  //     alert(checkPassword);
  //   }
  // }


  const Stack = createNativeStackNavigator();
  const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Registration" component={RegistrationPage}  options={{headerShown:false}}/>
          <Stack.Screen name="Banner" component={BannerPage} options={{headerShown:false}}/>
          <Stack.Screen name="Enter" component={EnterPage} options={{headerShown:false}}/>
          <Stack.Screen name="Start" component={StartDayPage} options={{headerShown:false}}/>
          <Stack.Screen name="List" component={ListPage} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    
      <MyStack />
    
  );
}
