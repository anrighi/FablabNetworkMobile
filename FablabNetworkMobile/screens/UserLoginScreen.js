import React from 'react';
import {View, Button, Text} from 'react-native';
import UserLoginForm from "../components/UserLoginForm";

class UserLoginScreen extends React.Component {

    state = {
        type: '',
    }

    render() {
        let func = this.props.loggedProps;

        return (
            <View>
                <UserLoginForm authoriser={func}/>
            </View>
        );
    }
}

export default UserLoginScreen