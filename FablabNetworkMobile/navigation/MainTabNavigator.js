import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import SettingsStack from "./SettingsStack";
import DashboardStack from "./DashboardStack";
import FablabSwitch from "./FablabSwitch";
import EventSwitch from "./EventSwitch";

const tabNavigator = createBottomTabNavigator({
    DashboardStack,
    FablabSwitch,
    EventSwitch,
    SettingsStack,
})

export default tabNavigator;
