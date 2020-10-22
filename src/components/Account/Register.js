import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {TextInput, Button, Avatar} from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView style={styles.container}>

      {/*<View style={styles.head}>
      <Text style={styles.title}>Commencez gratuitement</Text>
        <Text >Libre pour toujours. Aucune carte de crédit.</Text>
      </View>*/}

      <View style={styles.type_compte}>
          <TouchableOpacity style={[styles.single_type, {marginLeft:10}]}>
            <Avatar.Icon size={40} icon="account-tie" style={{backgroundColor:'#e0e7ff'}}/>
            <Text style={styles.single_type_title}>Conducteur</Text>
            <Text style={styles.single_type_subtitle}>
                Accès complet.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.single_type, {marginRight:15}]}>
            <Avatar.Icon size={40} icon="account-circle" style={{backgroundColor:'#e0e7ff'}}/>
            <Text style={styles.single_type_title}>Client</Text>
            <Text style={styles.single_type_subtitle}>Accès limité</Text>
          </TouchableOpacity>
      </View>
        <Text style={styles.label}>NOM & PRENOMS</Text>
        <TextInput
         style={styles.input}
          placeholder="FullName"
          value={fullName}
          onChangeText={fullName => setFullName(fullName)}
          >
          </TextInput>
        <Text style={styles.label}>ADRESSE EMAIL</Text>
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={email => setEmail(email)} />
        <Text style={styles.label}>MOT DE PASSE</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" value={password} onChangeText={password => setPassword(password)} />
      <View>
      </View>

      <View>
          <Button style={styles.btn_submit} uppercase={false} mode="contained" onPress={() => {}}>
              Créer un compte
          </Button>
          <Text>Vous avez déjà un compte ?</Text>
          <Button uppercase={false} mode="text" onPress={() => {}}>
            se connecter
          </Button>
      </View>
    </ScrollView>
  )
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingLeft:20,
    paddingRight: 20,
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
  },
  label:{
    marginBottom:5,
    color: 'grey',
    fontSize: 16
  },
  input:{
    marginBottom:10,
    borderRadius: 20,
    borderWidth:0
  },
  btn_submit:{
    paddingTop:10,
    paddingBottom:10
  }
})

export default Register;
