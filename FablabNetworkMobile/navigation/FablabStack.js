import {createStackNavigator} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import {Platform} from "react-native";
import React from "react";
import MapScreen from "../screens/MapScreen";
import FablabScreen from "../screens/FablabScreen";
import MachineListScreen from "../screens/MachineListScreen";
import MachineScreen from "../screens/MachineScreen";
import BookingScreen from "../screens/BookingScreen";

const FablabStack = createStackNavigator(
    {
        Fab: FablabScreen,
        Map: MapScreen,
        MachineList: MachineListScreen,
        Machine: MachineScreen,
        Book: BookingScreen
    });

FablabStack.navigationOptions = {
    tabBarLabel: 'Fab',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

export default FablabStack
