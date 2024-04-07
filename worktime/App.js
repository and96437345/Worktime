import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {CheckBox, View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import BannerPage from './components/Banner';
import RegistrationPage from './components/RegistrationPage';
import EnterPage from './components/EnterPage';
import {styles} from './styles/style';
// import CheckBox from '@react-native-community/checkbox';

export default function App() {
  const [isSelected, setSelection] = useState(false);
  
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

  
  return (
    <ScrollView>
      <View style={styles.container}> 
        <View style={styles.header}>
          {/* Лого */}
          <Text style={styles.logo}>Logo</Text>
          {/* Кнопки */}
          <View style={styles.buttonsContainer}>
          
            <TouchableOpacity style={styles.button}>
            <Image style={styles.image} source={require('./find.png')}
              />
              {/* <Text>Поиск</Text> */}           
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Image style={styles.image} source={require('./people.png')}
              />
              {/* <Text>Сотрудники</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Image style={styles.image} source={require('./cog.png')}
              />
              {/* <Text>Настройки</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.burger}>
              <Text style={styles.burgerText}>☰</Text>
            </TouchableOpacity>
          </View>
        </View>
        
          <MyStack />
        
        <View style={styles.footer}>
          <View style={styles.footerMenu}>
              {/* Меню */}
          <Text style={styles.logo}>Logo</Text>
          {/* Кнопки */}
          <View style={styles.buttonsContainer}>
          
            <TouchableOpacity style={styles.button}>
            <Image style={styles.image} source={require('./find.png')}
              />
              {/* <Text>Поиск</Text> */}           
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Image style={styles.image} source={require('./people.png')}
              />
              {/* <Text>Сотрудники</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Image style={styles.image} source={require('./cog.png')}
              />
              {/* <Text>Настройки</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.burger}>
              <Text style={styles.burgerText}>☰</Text>
            </TouchableOpacity>
          </View>
          </View>    
            <View style={styles.footerSupport}>
              <Text style={styles.footerSupportTitle}>Поддержка:</Text>
              <View>
                <View style={styles.footerSupportList}>
                  <Text style={styles.footerSupportItem}>Помощь по программе</Text>           
                  <TouchableOpacity style={styles.burger}>
                    <Text style={styles.footerSupportItem}>+7(777)777-77-77</Text>
                  </TouchableOpacity>               
                </View>
                <View  style={styles.footerSupportList}>
                  <Text style={styles.footerSupportItem}>FAQ</Text>
                  <TouchableOpacity style={styles.burger}>
                    <Text style={styles.footerSupportItem}>xakaton.2024@gmail.ru</Text>
                  </TouchableOpacity>               
                </View>
              </View>
            </View>
        </View>
      
      </View>
    </ScrollView>
    
  );
}
