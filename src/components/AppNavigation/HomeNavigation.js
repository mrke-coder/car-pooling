import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "../Home";
import Depart from "../Home/Components/Depart";
import Destination from "../Home/Components/Destination";
import Seat from "../Home/Components/Seat";
import SearchList from '../Search/SearchList';
import SearchDetails from '../Search/SearchDetails';
import NextToConclure from '../Search/NexToConclure';
import Login from "../Account/Login";
const Stack = createStackNavigator();
const HomeNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home}/>
            <Stack.Screen name="Depart" component={Depart}/>
            <Stack.Screen name="Destination" component={Destination}/>
            <Stack.Screen name="Nombre-Place" component={Seat}/>
            <Stack.Screen name="Search-List" component={SearchList}/>
            <Stack.Screen name="SearchDetails" component={SearchDetails}/>
            <Stack.Screen name="reservation" component={NextToConclure}/>
            <Stack.Screen name="Sidentifier" component={Login}/>
        </Stack.Navigator>
    )
}

export default HomeNavigation;
