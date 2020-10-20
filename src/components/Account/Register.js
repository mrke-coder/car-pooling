import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {TextInput, Button, Avatar} from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>

      <View style={styles.head}>
        <Text style={styles.title}>Commencez gratuitement</Text>
        <Text >Libre pour toujours. Aucune carte de crédit.</Text>
      </View>

      <View style={styles.type_compte}>
          <TouchableOpacity style={[styles.single_type, {marginLeft:10}]}>
            <Avatar.Icon size={40} icon="account-tie" style={{backgroundColor:'#e0e7ff'}}/>
            <Text style={styles.single_type_title}>Conducteur</Text>
            <Text style={styles.single_type_subtitle}>
                Accès complet à tous les paramètres
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.single_type, {marginRight:15}]}>
            <Avatar.Icon size={40} icon="account-circle" style={{backgroundColor:'#e0e7ff'}}/>
            <Text style={styles.single_type_title}>Client</Text>
            <Text style={styles.single_type_subtitle}>Accès limité</Text>
          </TouchableOpacity>
      </View>
        <Text>NOM & PRENOMS</Text>
        <TextInput placeholder="FullName" value={fullName} onChangeText={fullName => setFullName(fullName)} />
        <Text>ADRESSE EMAIL</Text>
        <TextInput placeholder="Email" value={email} onChangeText={email => setEmail(email)} />
        <Text>MOT DE PASSE</Text>
        <TextInput secureTextEntry={true} placeholder="Password" value={password} onChangeText={password => setPassword(password)} />
      <View>
      </View>

      <View>
          <Button uppercase={false} mode="contained" onPress={() => {}}>
              Créer un compte
          </Button>
          <Text>Vous avez déjà un compte ?</Text>
          <Button uppercase={false} mode="text" onPress={() => {}}>
            se connecter
          </Button>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  container:{
    width: '100%',
    marginLeft:10,
    marginRight: 10,
    backgroundColor: '#FFF'
  },
  head:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 18,
  },
  type_compte:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15
  },
  single_type:{
    marginBottom: 10,
    borderWidth:1,
    borderColor: '#c7d8e2',
    width: '45%',
    height:150,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  single_type_title:{
    fontSize: 16,
    fontWeight:'bold',
    color:'black',
    paddingTop:5,
    paddingBottom:5
  },
  single_type_subtitle:{
    fontSize: 14,
    color:'grey',
    fontWeight: '300'
  }
})

export default Register;
