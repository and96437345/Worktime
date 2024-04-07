import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {styles} from '../styles/style';

const BannerPage = () => {
  return (
    <Text style={styles.textBanner}>Учет рабочего времени</Text>
  );
};


export default BannerPage;


















// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import {RegistrationPage} from './components/RegistrationPage.js';

// export default function App() {
//   return (
//     <View style={styles1.container}>
//       <Text style={styles1.text}>Учет рабочего времени</Text>
//       <StatusBar style="auto" />
//       {/* <RegistrationPage /> */}
//     </View>
//   );
// }

// const styles1 = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 40,
//     fontWeight: '600',
//     textAlign: 'center'
//   },
//   input: {
//     height: 40,
//     width: 120,
//     borderWidth: 1,
//     borderColor: 'red',
//   }
// });
