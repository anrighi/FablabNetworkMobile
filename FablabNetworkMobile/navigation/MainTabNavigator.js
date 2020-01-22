import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import HomeStack from "./HomeStack";
import ReadingListStack from "./ReadingListStack";
import SettingsStack from "./SettingsStack";
import DashboardStack from "./DashboardStack";
import FablabStack from "./FablabStack";

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    ReadingListStack,
    SettingsStack,
    FablabStack,
    DashboardStack
})

export default tabNavigator;
