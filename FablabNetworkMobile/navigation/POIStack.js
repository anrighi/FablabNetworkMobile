import {createStackNavigator} from "react-navigation";
import PoiScreen from "../screens/PoiScreen";
import AddLocationScreen from "../screens/AddLocationScreen";
import TabBarIcon from "../components/TabBarIcon";
import {Platform} from "react-native";
import React from "react";

const PoiStack = createStackNavigator(
    {
        Poi: PoiScreen,
        AddLocation: AddLocationScreen,
    });

PoiStack.navigationOptions = {
    tabBarLabel: 'POI',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

export default PoiStack
