import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import SettingsStack from "./SettingsStack";
import DashboardStack from "./DashboardStack";
import ListSwitch from "./ListSwitch";
import UserStack from "./UserStack";

const tabNavigator = createBottomTabNavigator({
    UserStack,
    ListSwitch,
    SettingsStack,
    DashboardStack
})

export default tabNavigator;
