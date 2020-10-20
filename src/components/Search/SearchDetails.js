import React from "react";
import  {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Avatar} from "react-native-paper";
import {Divider} from "react-native-paper";
import {Ionicons} from "@expo/vector-icons";
const SearchDetails = ({navigation, route}) => {
  const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
const date = new Date();
  return (
    <View style={styles.container}>
        <View style={styles.date}>
            <Text style={{fontWeight:'bold',color:'rgb(5, 71, 82)',fontSize:20}}>
            {days[date.getDay()]+', '+date.getDate()+' '+months[date.getMonth()]+' '+date.getFullYear()}
            </Text>
        </View>
        <View style={styles.infos_trajet}>
            <View style={styles.line}>
              <Text style={styles.text}>06:00</Text>
              <Text style={styles.text}>Riviera palmeraie,SODECI</Text>
              <Ionicons style={styles.icon} name="ios-arrow-forward" size={24} color="rgb(112, 140, 145)"/>
            </View>
            <View style={styles.line}>
              <Text style={styles.text}>07:00</Text>
              <Text style={styles.text}>Marcory , Grand marché</Text>
              <Ionicons style={styles.icon} name="ios-arrow-forward" size={24} color="rgb(112, 140, 145)"/>
            </View>
        </View>
        <View style={styles.tarif}>
          <Text>Prix total pour 1 passager</Text>
          <Text>750 F CFA</Text>
        </View>
         <Divider />
         <TouchableOpacity style={[styles.driverInfo, styles.driverInfo_1]}>
            <View>
              <Text style={styles.driverInfoTitle}>Mr KE</Text>
              <Text style={styles.driverInfoSubTitle}><Ionicons name="md-star" size={24} color="rgb(112, 140, 145)"/> 4.7/5 - 87</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Avatar.Image style={{marginRight:10}} size={30} source={require('../../../assets/user.png')}/>
              <Ionicons name="ios-arrow-forward" size={24} color="rgb(112, 140, 145)"/>
            </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.driverInfo}>
              <Ionicons name="ios-chatbubbles" style={{marginRight:10}} size={24} color="#00AFF5"/>
              <Text style={{color:'#00AFF5', fontSize:18, fontWeight:'500'}}>Contacter Mr KE</Text>
         </TouchableOpacity>
         <Divider />
         <View style={styles.driverInfo}>
            <Ionicons style={{marginRight:10}} name="logo-buffer" size={24} color="rgb(112, 140, 145)"/>
            <Text style={{color:'rgb(112, 140, 145)', fontWeight:'400', fontSize:16}}>2 max. à l'arrière</Text>
         </View>
         <View style={styles.driverInfo}>
            <View>
              <Text style={styles.driverInfoTitle}>PEUGEOT 407</Text>
              <Text style={styles.driverInfoSubTitle}>Rouge</Text>
            </View>
            <Ionicons style={styles.car} name="md-car" size={24} color="rgb(112, 140, 145)"/>
         </View>
         <Divider/>
         <TouchableOpacity onPress={() =>navigation.navigate('reservation') } style={styles.next_btn}>
            <Text style={styles.next_btn_text}>Continuer</Text>
         </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1,
    padding:20
  },
  date:{flexDirection:'row',justifyContent:'center'},
  infos_trajet:{

  },
  line:{
    flexDirection:'row',
    paddingTop:10,
    paddingBottom:10
  },
  text:{
    color:'rgb(5, 71, 82)',
    fontSize: 18,
    fontWeight:'500',
    marginRight: 10
  },
  icon:{
    textAlign: 'right'
  },
  tarif:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom:10
  },
  driverInfo:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom:15
  },
  driverInfo_1:{
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  textColor: {
    color: 'rgb(112, 140, 145)'
  },
  driverInfoTitle:{
    color:'rgb(5, 71, 82)', fontSize:18, fontWeight:'500'
  },
  driverInfoSubTitle:{
    color:'rgb(112, 140, 145)', fontSize:16, fontWeight:'500'
  },
  car:{
    marginLeft:100
  },
  next_btn:{
    flexDirection:'row',
    justifyContent:'center',
    alignSelf: 'center',
    backgroundColor: 'rgb(0, 175, 245)',
    marginTop:15,
    marginBottom:15,
    padding: 10,
    borderRadius:10,
    width:160
  },
  next_btn_text:{
    color: 'rgb(255,255,255)',
    fontSize: 16,
    fontWeight: '400'
  }
})

export default SearchDetails;
