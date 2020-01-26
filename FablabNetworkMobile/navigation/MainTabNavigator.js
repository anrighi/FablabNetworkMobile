import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import SettingsStack from "./SettingsStack";
import DashboardSwitch from "./DashboardSwitch";
import FablabSwitch from "./FablabSwitch";
import EventSwitch from "./EventSwitch";


const tabNavigator = createBottomTabNavigator({
    DashboardSwitch,
    FablabSwitch,
    EventSwitch,
    SettingsStack,
})

export default tabNavigator;
