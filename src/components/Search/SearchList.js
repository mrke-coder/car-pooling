import React from 'react';
import {View, Text,FlatList,TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import {Divider, Button} from "react-native-paper";
import SearchListItem from "./SearchListItem";
const SearchList = ({route, navigation}) => {
    const Items =[
      {
        id:1, from:'Cocody',to:'Marcory',date_from:'2020-10-01 05:30:00', date_to:'2020-10-01 06:30:00'
      }
    ];

    const _renderItem = ({item}) =>{
      return <SearchListItem item={item} navigation={navigation} />
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {console.log('click')}} style={styles.resContainer}>
              <View style={{width:'10%'}}>
                <Ionicons name="ios-search" size={32} color="rgb(112, 140, 145)" />
              </View>
              <View style={{width:'90%'}}>
                <View style={styles.content}>
                  <Text style={styles.text}>{route.params.depart}</Text>
                  <FontAwesome style={{marginLeft:10, marginRight:10}} name="long-arrow-right" size={24} color="rgb(112, 140, 145)" />
                  <Text style={styles.text}>{route.params.destination}</Text>
                </View>

                <View style={styles.content}>
                  <Text style={[styles.text, {color:'rgb(112, 140, 145)'}]}>{route.params.date}, </Text>
                  <Text style={[styles.text, {color:'rgb(112, 140, 145)'}]}>{route.params.seat}</Text>
                </View>

              </View>
            </TouchableOpacity>
            <Divider style={{marginTop:20}}/>

              <View style={styles.items_container}>
              <Text style={styles.text_info}>
                {route.params.depart}
                <FontAwesome
                style={{marginLeft:10, marginRight:10}}
                name="long-arrow-right" size={16} color="rgb(112, 140, 145)" />
                {route.params.destination} :
              </Text>
              <Button mode="text" color="rgb(0, 175, 245)" onPress={() => console.log('Pressed')}>filtrer</Button>
            </View>
            <Text style={styles.text_info}>4 Trajets disponibles</Text>
            <FlatList
              data={Items}
              renderItem={_renderItem}
            />
        </View>
    )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'rgb(255,255,255)'
  },
  resContainer:{
    flexDirection: 'row',
    backgroundColor: 'rgb(237, 237, 237)',
    borderRadius:16,
    paddingTop:8,
    paddingBottom:8,
    paddingLeft:16,
    paddingRight:16
  },
  content:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  text:{
    color: 'rgb(5, 71, 82)',
    fontSize:16,
    fontWeight:'bold'
  },
  items_container:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:-10
  },
  text_info:{
    color:'rgb(112, 140, 145)',
    fontSize:16,
    fontWeight:'600'
  },
  item:{

  }
})

export default SearchList
