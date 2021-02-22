import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ToDo from "./screens/ToDo"
import Welcome from "./screens/welcome"

const Tab = createBottomTabNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Welcome" component={Welcome}/>
                <Tab.Screen name="Tasks" component={ToDo}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
