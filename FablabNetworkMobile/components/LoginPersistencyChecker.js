
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginScreen from "../screens/LoginScreen";


class LoginPersistencyChecker extends React.Component {

    render() {

        let propsToCheck = this.props.toCheck;
        let styles = this.props.styles;

        return (
            <View style={styles.login_container}>
                <LoginScreen
                    loggedProps={{
                        setContainer: this.props.setContainer,
                        propsToCheck: propsToCheck,
                        persistency: this.props.persistency,
                    }}
                />
            </View>
        )

    };
}

export default LoginPersistencyChecker