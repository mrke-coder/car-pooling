import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import Search from '../Search';
import SearchList from '../Search/SearchList';
import SearchDetails from '../Search/SearchDetails';
import NextToConclure from '../Search/NexToConclure';
const Stack = createStackNavigator();

const SearchNavigation = ()=>{
  return (
    <Stack.Navigator>
        <Stack.Screen name='Rechercher' component={Search}/>
        <Stack.Screen name="Search-List" component={SearchList}/>
        <Stack.Screen name="SearchDetails" component={SearchDetails}/>
        <Stack.Screen name="reservation" component={NextToConclure}/>
    </Stack.Navigator>
  );
}

export default SearchNavigation;
