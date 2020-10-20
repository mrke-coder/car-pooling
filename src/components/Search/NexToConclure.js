import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AuthVerify from '../_Shared/AuthVerify';

const NextToConclure = ({navigation}) =>{
  return (
    <View style={styles.container}>
      <AuthVerify navigation={navigation}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10
  }
});

export default NextToConclure;
