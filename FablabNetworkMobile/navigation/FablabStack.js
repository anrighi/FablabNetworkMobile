import {createStackNavigator} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import {Platform} from "react-native";
import React from "react";
import MapScreen from "../screens/MapScreen";
import FablabScreen from "../screens/FablabScreen";

const FablabStack = createStackNavigator(
    {
        Fab: FablabScreen,
        Map: MapScreen,
    });

FablabStack.navigationOptions = {
    tabBarLabel: 'Fab',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

export default FablabStack
