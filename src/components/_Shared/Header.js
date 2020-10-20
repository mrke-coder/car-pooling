import React from 'react'
import {StyleSheet, View, Image} from 'react-native';
import {Text, Avatar} from "react-native-paper";

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    logo:{
        width: 150,
        height: 60
    }
})

export default Header