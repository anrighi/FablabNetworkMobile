import React from "react";
import {createStackNavigator} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import {Platform} from "react-native";
import DashboardScreen from "../screens/DashboardScreen";
import MembershipScreen from "../screens/MembershipScreen";
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen";
import BalanceScreen from "../screens/BalanceScreen";
import ProjectScreen from "../screens/ProjectScreen";

const DashboardStack = createStackNavigator(
    {
        Dash: DashboardScreen,
        ProfileSettings: ProfileSettingsScreen,
        BalanceScreen: BalanceScreen,
        MembershipScreen: MembershipScreen,
        ProjectScreen: ProjectScreen,
    });

DashboardStack.navigationOptions = {
    tabBarLabel: 'Dash',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

export default DashboardStack
