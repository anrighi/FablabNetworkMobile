import {createStackNavigator} from "react-navigation";
import ReadingListScreen from "../screens/ReadingListScreen";
import TabBarIcon from "../components/TabBarIcon";
import {Platform} from "react-native";
import React from "react";
import MapScreen from "../screens/MapScreen";

const ReadingListStack = createStackNavigator(
    {
        ReadingList: ReadingListScreen,
        Map: MapScreen

    });

ReadingListStack.navigationOptions = {
    tabBarLabel: 'Reading List',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};

export default ReadingListStack
