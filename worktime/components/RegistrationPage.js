import React from "react";
import {
  Image,
  View,
  Text,
  CheckBox,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { styles } from "../styles/style";

const RegistrationPage = ({ navigation }) => {

  const loadPage = () => {
    navigation.navigate('Enter');
  }

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
      
      <View style={styles.createAccount}>
        <Text style={styles.title}>СОЗДАНИЕ УЧЕТНОЙ ЗАПИСИ</Text>
        <Text style={styles.account}>У Вас уже есть аккаунт?</Text>
        <TouchableOpacity style={styles.accountButton} onPress={loadPage} >
          <Text style={styles.accountButtonText}>ВОЙТИ</Text>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Имя" />
          <TextInput style={styles.input} placeholder="Фамилия" />
          <TextInput style={styles.input} placeholder="Электронная почта" />
          <TextInput style={styles.input} placeholder="Логин" />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry={true}
          />
          {/* <View style={styles.checkboxRow}> */}
          {/* <View style={styles.checkboxContainer}> */}
          {/* <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              /> */}
          {/* <Text style={styles.label}>Сотрудник</Text> */}
          {/* </View> */}
          {/* <View style={styles.checkboxContainer}> */}
          {/* <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              /> */}
          {/* <Text style={styles.label}>Руководитель</Text> */}
          {/* </View> */}
          {/* </View> */}
          <TouchableOpacity style={styles.accountCreateButton}>
            <Text style={styles.accountCreateButtonText}>Создать аккаунт</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountButton}>
            <Text style={styles.accountSMS}>Создать аккаунт по СМС</Text>
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
                <Text style={styles.footerSupportItem}>+7 (777) 777-77-77</Text>
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

export default RegistrationPage;
