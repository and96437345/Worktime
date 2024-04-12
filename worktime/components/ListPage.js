import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import {styles} from '../styles/style';

const ListPage = ({ navigation }) => {
  const loadPage = () => {
    navigation.navigate('Registration');
  }
//   const loadStart = () => {
//     navigation.navigate('Start');
//   }

  const Workers = props => {
    return (
      <TouchableOpacity style={styles.listButton}>
          <Text style={styles.listButtonText}>{props.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logo}>Logo</Text>
          <View style={styles.buttonsContainer}>

            {/* <TouchableOpacity style={styles.button}>
              <Image style={styles.image} source={require("../find.png")} />
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={styles.button}>
              <Image style={styles.image} source={require("../people.png")} />
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={styles.button}>
              <Image style={styles.image} source={require("../cog.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.burger}>
              <Text style={styles.burgerText}>☰</Text>
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={styles.enter}>
            <Text style={styles.title}>СПИСОК СОТРУДНИКОВ</Text>
            <View style={styles.inputContainer}>

                <Workers name="Иванов Сергей" />
                <Workers name="Дмитриев Александр" />
                <Workers name="Сергеев Алексей" />
                      
            </View>
        </View>
      </View>
    </ScrollView> 
  );
};

export default ListPage;
