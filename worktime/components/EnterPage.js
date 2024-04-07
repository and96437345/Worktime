import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {styles} from '../styles/style';

const EnterPage = () => {
  return (
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
  );
};


export default EnterPage;