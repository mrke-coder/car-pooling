import React from "react"
import {StyleSheet, View} from "react-native"
import {Text} from "react-native-paper";
import Login from './Login'
const Account = ({navigation}) => {
    return (
      <Login navigationAuth={navigation}/>
    )
}

const styles = StyleSheet.create({})

export default Account
