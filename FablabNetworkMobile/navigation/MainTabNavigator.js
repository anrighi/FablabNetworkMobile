import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import PoiStack from "./POIStack";
import HomeStack from "./HomeStack";
import ReadingListStack from "./ReadingListStack";
import SettingsStack from "./SettingsStack";
import FablabStack from "./FablabStack";

const tabNavigator = createBottomTabNavigator({
    PoiStack,
    HomeStack,
    ReadingListStack,
    SettingsStack,
    FablabStack
})

export default tabNavigator;
