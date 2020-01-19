import React from 'react';
import {View} from 'react-native';
import LoginForm from "../components/LoginForm";

class LoginScreen extends React.Component {

    render() {
        return (
            <View>
                <LoginForm props={this.loggedProps}/>
            </View>
        );
    }
}

export default LoginScreen