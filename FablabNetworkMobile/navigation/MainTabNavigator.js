import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import HomeStack from "./HomeStack";
import ReadingListStack from "./ReadingListStack";
import SettingsStack from "./SettingsStack";
import DashboardStack from "./DashboardStack";

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    ReadingListStack,
    SettingsStack,
    DashboardStack
})

export default tabNavigator;
