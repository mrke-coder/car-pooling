import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text,Platform } from 'react-native';
import {Avatar} from "react-native-paper";
import {Ionicons} from "@expo/vector-icons";
import moment from "moment";

const SearchListItem = ({item, navigation}) => {
  const heures = (date) =>{
    const h = moment(date).hour() <10 ?  '0'+moment(date).hour() : moment(date).hour();
    const m = moment(date).minute() <10 ? '0'+moment(date).minute(): moment(date).minute();
    return h+':'+m;
  }
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('SearchDetails',{id:item.id})}
    style={styles.item}>
    <View style={styles.line_1}>
      <View style={{flexDirection:'row'}}>
        <View style={{marginRight: 10}}>
            <Text style={[styles.text,{marginBottom:15}]}>{heures(item.date_from)}</Text>
            <Text style={styles.text}>{heures(item.date_to)}</Text>
        </View>
        <View style={styles.separator}>
        </View>

        <View style={{marginLeft: 10}}>
          <Text style={[styles.text,{marginBottom:15}]}>{item.from}</Text>
          <Text style={styles.text}>{item.to}</Text>
        </View>
      </View>
      <View>
        <Text>750 F CFA</Text>
      </View>
    </View>
    <View style={[styles.line_2, {marginTop:20}]}>
        <View>
          <Avatar.Image size={30} source={require('../../../assets/user.png')}/>
        </View>
        <View style={{marginLeft:10}}>
          <Text>Mr KE</Text>
          <View style={styles.line_2}>
            <Ionicons name="md-star" size={24} color="black"/>
            <Text>4,7</Text>
          </View>
        </View>
    </View>
    <View>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item:{
      flex:1,
      backgroundColor:'#fff',
      marginTop:16,
      marginBottom:16,
      borderRadius:10,
      paddingTop:10,
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:10,
      shadowColor:'#000',
      shadowOffset:{width:0, height:6},
      shadowOpacity: .4,
      shadowRadius: 6.5,
      elevation: Platform.OS === 'android' ? 10 : 0
  },
  line_1:{
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  line_2:{
    flexDirection: 'row',
  },
  text: {
    fontSize:18,
    color: 'rgb(5, 71, 82)',
    fontWeight: '500'
  },
  separator:{
    backgroundColor: 'rgb(5, 71, 82)',
    width: 4
  }
});

export default SearchListItem;
