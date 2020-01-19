import React from 'react';
import {View, Button, Text} from 'react-native';
import FablabLoginForm from "../components/FablabLoginForm";

class FablabLoginScreen extends React.Component {

    state = {
        type: '',
    }

    render() {
        let func = this.props.loggedProps;

        return (
            <View>
                <FablabLoginForm authoriser={func}/>
            </View>
        );
    }
}

export default FablabLoginScreen