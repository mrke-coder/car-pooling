import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';



const AuthVerify = ({navigation}) => {
  const login = () => {
    navigation.navigate('Sidentifier',{navigation: navigation});
  };

  return (
    <View>
    <Text style={styles.title}>Déjà un compte ?</Text>
    <TouchableOpacity style={styles.line} onPress={() => login()}>
        <Text style={styles.subTitle}>Oui, s'identifier</Text>
        <Ionicons name="ios-arrow-forward" size={24} color="#054752"/>
    </TouchableOpacity>
    <Divider/>
    <TouchableOpacity style={styles.line}>
        <Text style={styles.subTitle}>Non, créer un compte</Text>
        <Ionicons name="ios-arrow-forward" size={24} color="#054752"/>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    color: 'rgb(5, 71, 82)',
    fontSize:30,
    fontWeight: '500',
    textAlign: 'center'
  },
  line:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:20,
    paddingBottom:20
  },
  subTitle: {
    color:'#054752',
    fontSize: 16,
    fontWeight: '400'
    }
});

export default AuthVerify;
