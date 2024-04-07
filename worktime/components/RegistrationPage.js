import React from 'react';
import { View, Text, CheckBox, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {styles} from './../styles/style.js';

const RegistrationPage = () => {
  return (
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
  );
};

export default RegistrationPage;