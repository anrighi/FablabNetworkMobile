import {createStackNavigator} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import {Platform} from "react-native";
import React from "react";
import MapScreen from "../screens/MapScreen";
import FablabListScreen from "../screens/FablabListScreen";
import FablabScreen from "../screens/FablabScreen";
import EventListScreen from "../screens/EventListScreen";
import EventScreen from "../screens/EventScreen";

const EventListStack = createStackNavigator(
    {
        EventList: EventListScreen,
        EventView: EventScreen,
        GeneralMap: MapScreen,
    });

EventListStack.navigationOptions = {
    tabBarLabel: 'Fablab List',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};

export default EventListStack
