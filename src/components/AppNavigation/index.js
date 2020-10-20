import * as React from "react"
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

// import des components
import HomeNavigation from "./HomeNavigation";
import PropositionDeTrajet from "../Proposition";
import SearchNavigation from "./SearchNavigation";
import AuthNavigation from './AuthNavigation';

const Tabs = createBottomTabNavigator();
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tabs.Navigator
            screenOptions = {
                ({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let icon;
                        switch (route.name){
                            case 'Accueil':
                                icon = 'ios-home'
                                break;
                            case 'Proposer':
                                icon = 'ios-add-circle'
                                break;
                            case 'Rechercher':
                                icon = 'ios-search'
                                break;
                            case 'Compte':
                                icon = 'ios-contact'
                                break
                        }
                       return <Ionicons name={icon} size={35} color={color} />
                    }
                })
            }
            tabBarOptions={{
                activeTintColor:"#1565c0"
            }}
            >
                <Tabs.Screen name="Accueil" component={HomeNavigation}/>
                <Tabs.Screen name="Proposer" component={PropositionDeTrajet}/>
                <Tabs.Screen name="Rechercher" component={SearchNavigation}/>
                <Tabs.Screen name="Compte" component={AuthNavigation}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
export default AppNavigation
