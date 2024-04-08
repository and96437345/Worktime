import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {styles} from '../styles/style';

const EnterPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Лого */}
        <Text style={styles.logo}>Logo</Text>
        {/* Кнопки */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.image} source={require("../find.png")} />
            {/* <Text>Поиск</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.image} source={require("../people.png")} />
            {/* <Text>Сотрудники</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.image} source={require("../cog.png")} />
            {/* <Text>Настройки</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.burger}>
            <Text style={styles.burgerText}>☰</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.enter}>
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
      </View>

      <View style={styles.footer}>
        <View style={styles.footerMenu}>
          {/* Меню */}
          <Text style={styles.logo}>Logo</Text>
          {/* Кнопки */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.image} source={require("../find.png")} />
              {/* <Text>Поиск</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.image} source={require("../people.png")} />
              {/* <Text>Сотрудники</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.image} source={require("../cog.png")} />
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
            <View style={styles.footerSupportList}>
              <Text style={styles.footerSupportItem}>FAQ</Text>
              <TouchableOpacity style={styles.burger}>
                <Text style={styles.footerSupportItem}>
                  xakaton.2024@gmail.ru
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};


export default EnterPage;