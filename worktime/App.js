import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  CheckBox,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import BannerPage from "./components/Banner";
import RegistrationPage from "./components/RegistrationPage";
import EnterPage from "./components/EnterPage";
import { styles } from "./styles/style";
// import CheckBox from '@react-native-community/checkbox';

export default function App() {
  const [isSelected, setSelection] = useState(false);

  const Stack = createNativeStackNavigator();
  const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Registration" component={RegistrationPage} />
          <Stack.Screen
            name="Banner"
            component={BannerPage}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Enter" component={EnterPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <ScrollView>
      <MyStack />
    </ScrollView>
  );
}
