import * as React from 'react';

import {
  Image,
  View,
  Text,
  CheckBox,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { styles } from "../styles/style";

const StartDayPage = ({ navigation }) => {

  const loadList = () => {
    navigation.navigate('List');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
         
          <Text style={styles.logo}>Logo</Text>
          
          <View style={styles.buttonsContainer}>
            {/* <TouchableOpacity style={styles.button}>
              <Image style={styles.image} source={require("../find.png")} />
             
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.button} onPress={loadList}>
              <Image style={styles.image} source={require("../people.png")} />         
            </TouchableOpacity>
            
          </View>
        </View>
        
        <View style={styles.createAccount}>
        
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}>'Начать рабочий день'</Text>
            </TouchableOpacity>
            
        </View>

        {/* <View style={styles.footer}>
          <View style={styles.footerMenu}>
            
            <Text style={styles.logo}>Logo</Text>
            
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button}>
                <Image style={styles.image} source={require("../find.png")} />
                
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Image style={styles.image} source={require("../people.png")} />
                
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Image style={styles.image} source={require("../cog.png")} />
                
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
        </View> */}
      </View>
    </ScrollView>  
  );
};

export default StartDayPage;