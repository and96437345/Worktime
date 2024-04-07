import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {CheckBox, View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {RegistrationPage} from './components/RegistrationPage.js';
// import CheckBox from '@react-native-community/checkbox';

export default function App() {
  const [isSelected, setSelection] = useState(false);
  
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

      {/* Компонент Регистрация */}
      <View style={styles.createAccount}>
        <Text style={styles.title}>СОЗДАНИЕ УЧЕТНОЙ ЗАПИСИ</Text>
        <Text style={styles.account}>У Вас уже есть аккаунт?</Text>
        <TouchableOpacity style={styles.accountButton}>
              <Text style={styles.accountButtonText}>ВОЙТИ</Text>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Имя" />
          <TextInput style={styles.input} placeholder="Фамилия" />
          <TextInput style={styles.input} placeholder="Электронная почта" />
          <TextInput style={styles.input} placeholder="Логин" />
          <TextInput style={styles.input} placeholder="Пароль" secureTextEntry={true} />         
          <View style={styles.checkboxRow}>
            <View style={styles.checkboxContainer}>
              {/* <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              /> */}
              <Text style={styles.label}>Сотрудник</Text>
            </View>
            <View style={styles.checkboxContainer}>
              {/* <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              /> */}
              <Text style={styles.label}>Руководитель</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.accountCreateButton}>
            <Text style={styles.accountCreateButtonText}>Создать аккаунт</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountButton}>
            <Text style={styles.accountSMS}>Создать аккаунт по СМС</Text>
          </TouchableOpacity>
          
        </View>
      </View>

      {/* Компонент Вход */}
      {/* <View style={styles.enter}>
        <Text style={styles.title}>ВХОД</Text>
        <Text style={styles.account}>У Вас еще нет аккаунта?</Text>
        <TouchableOpacity style={styles.accountButton}>
              <Text style={styles.accountButtonText}>ЗАРЕГИСТРИРОВАТЬСЯ</Text>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Логин" />
          <TextInput style={styles.input} placeholder="Пароль" secureTextEntry={true} />
          <TouchableOpacity style={styles.accountButton}>
            <Text style={styles.accountPassword}>Забыл пароль?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountCreateButton}>
            <Text style={styles.accountCreateButtonText}>ВОЙТИ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountButton}>
            <Text style={styles.accountSMS}>Войти по СМС</Text>
          </TouchableOpacity>
          
        </View>


      </View> */}



      {/* Подвал */}
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

const styles = StyleSheet.create({
  image:{
    
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginRight: 25,
  },
  accountButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  accountCreateButton: {
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  accountCreateButtonText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  accountButtonText: {
    fontSize: 18,
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
  burger: {
    // marginLeft: 10,
  },
  burgerText: {
    fontSize: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  account: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'normal',
    marginBottom: 5,
  },
  
  accountSMS: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'normal',
    marginBottom: 5,
    textDecorationLine: 'underline',
  },
  accountPassword: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'normal',
    marginBottom: 15,
    textDecorationLine: 'underline',
  },

  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  footer: {
    marginTop: 40,
    marginBottom: 40,
  },
  footerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    // alignItems: 'center',
  },
  footerSupportList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerSupportTitle: {
    fontWeight: '700',
    marginBottom: 5,
  },
  footerSupportItem: {
    marginBottom: 5,
  },
  enter: {
    marginTop: 50,
    marginBottom: 150,
  },
});
