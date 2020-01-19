import React from 'react';
import {View} from 'react-native';
import LoginForm from "../components/LoginForm";

class LoginScreen extends React.Component {

    render() {
        let func = this.props.loggedProps;

        return (
            <View>
                <LoginForm authoriser={func}/>
            </View>
        );
    }
}

export default LoginScreen