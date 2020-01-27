import {createStackNavigator} from "react-navigation";
import SettingsScreen from "../screens/SettingsScreen";
import TabBarIcon from "../components/TabBarIcon";
import {Platform} from "react-native";
import React from "react";
import LanguageScreen from "../screens/LanguageScreen";
import CreateProjectScreen from "../screens/CreateProjectScreen";

const SettingsStack = createStackNavigator(
    {
        Create: CreateProjectScreen,
        Settings: SettingsScreen,
        Language: LanguageScreen,
    }
);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};

export default SettingsStack
