import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegistrationPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Лого */}
        <Text style={styles.logo}>Your Logo</Text>
        {/* Кнопки */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text>Поиск</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Сотрудники</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Настройки</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.burger}>
            <Text>☰</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Заголовок */}
      <Text style={styles.title}>Create Account</Text>
      {/* Инпуты */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        {/* Другие поля регистрации */}
      </View>
      {/* Подвал */}
      <View style={styles.footer}>
        {/* Меню */}
        <Text>Footer Menu</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
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
    marginLeft: 10,
  },
  burger: {
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
    marginTop: 'auto',
    alignItems: 'center',
  },
});

export default RegistrationPage;