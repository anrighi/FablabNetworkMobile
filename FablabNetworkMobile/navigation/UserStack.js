import {createStackNavigator} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import {Platform} from "react-native";
import React from "react";
import ProjectScreen from "../screens/ProjectScreen";
import ProjectListScreen from "../screens/ProjectListScreen";
import UserScreen from "../screens/UserScreen";

const UserStack = createStackNavigator(
    {
        User: UserScreen,
        Proj: ProjectScreen,
        ProjList: ProjectListScreen,
    }
);

UserStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

UserStack.path = '';

export default UserStack
