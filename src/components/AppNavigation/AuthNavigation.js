import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Account from "../Account";
import Register from '../Account/Register';


const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Compte' component={Account}/>
      <Stack.Screen name='Sinscrire' component={Register}/>
    </Stack.Navigator>
  )
}

export default AuthNavigation;
