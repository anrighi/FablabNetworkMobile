import React from "react";
import {createStackNavigator} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import {Platform} from "react-native";
import DashboardScreen from "../screens/DashboardScreen";
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen";

const DashboardStack = createStackNavigator(
    {
        Dash: DashboardScreen,
        ProfileSettings: ProfileSettingsScreen
    });

DashboardStack.navigationOptions = {
    tabBarLabel: 'Dash',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

export default DashboardStack
