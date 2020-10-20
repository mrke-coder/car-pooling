import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {TextInput, Button, Avatar} from "react-native-paper";

const Login = ({navigationAuth}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let errors = [];

  const seConnecter = () => {
    console.log('email :',email);
    console.log('Password :',password);
  }

  const register = () =>{
    navigationAuth.navigate('Sinscrire');
  }

  const _onChangeEmail = value => {
    setEmail(value)
  }

  const _onChangePassword = value => {
    setPassword(value)
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bienvenue | Identifiez-vous </Text>
        <View>
            <TextInput style={styles.input} label="Email" mode="flat" value={email} onChangeText={_onChangeEmail}/>
            <TextInput secureTextEntry={true} style={styles.input} label="Password" value={password} onChangeText={_onChangePassword}/>
            <Button uppercase={false} style={styles.btnSubmit} mode="contained" onPress={() => seConnecter()}>
              S'identifier
            </Button>
            <Button uppercase={false} color='rgb(0, 175, 245)' mode="text" style={styles.resetPwd}>Mot de passe oublié ?</Button>
        </View>
        <View style={styles.social}>
          <Button uppercase={false} style={styles.socialBtn} mode="outlined" onPress={() => console.log('connexion avec facebook')}>
            <Avatar.Image size={24} source={require('../../../assets/google.png')}/> Google
          </Button>
          <Button uppercase={false} style={styles.socialBtn} mode="outlined" onPress={() => console.log('connexion avec google')}>
            <Avatar.Image size={24} source={require('../../../assets/facebook.png')}/> Facebook
          </Button>
        </View>

        <View style={styles.sigup}>
          <Text style={styles.sigupText}>Pas de compte ?</Text>
          <Button mode="text" uppercase={false} color='rgb(0, 175, 245)' onPress={() => register()}>S'inscrire</Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingLeft:'5%',
    paddingRight:'5%',
    paddingTop: 30
  },
  title:{
    color:'#9e9ea7',
    fontSize: 18,
    fontWeight:'bold',
    marginBottom:10
  },
  input:{
    marginBottom:10,
    borderRadius:10,
    borderBottomWidth: 0
  },
  btnSubmit:{
    backgroundColor: 'rgb(0, 175, 245)',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10
  },
  resetPwd:{
    textAlign: 'center'
  },
  social:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30
  },
  socialBtn:{
    width:'49%',
    borderRadius:10,
    padding: 5
  },
  sigup:{
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sigupText:{
    fontSize: 16,
    color:'#9e9ea7',
    fontWeight:'bold',
  }
})
export default Login;
