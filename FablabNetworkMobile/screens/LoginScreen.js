import React from 'react';
import {View} from 'react-native';
import LoginForm from "../components/LoginForm";

export default class LoginScreen extends React.Component {

    render() {
        return (
            <View>
                <LoginForm/>
            </View>
        );
    }
}