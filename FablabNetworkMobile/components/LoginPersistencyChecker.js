import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppNavigator from "../navigation/AppNavigator";
import LoginScreen from "../screens/LoginScreen";


class LoginPersistencyChecker extends React.Component {

    state = {
        auth: false,
    }

    componentDidMount() {
        this.setState({auth: this.props.toCheck.logged});
        console.log("mounted");
    }

    setAuth = async logged => {
        this.setState({auth: logged});
        console.log(logged);
    };

    render() {

        let propsToCheck = this.props.toCheck;
        let screenProps = this.props.screenProps;
        let styles = this.props.styles;

        if (this.state.auth && propsToCheck.type == 'fablab') {
            return (

                //TODO: ADD PROPS FOR FABLAB PERSISTENT DATA CONTAINER

                <View style={styles.container}>
                    <AppNavigator
                        screenProps={screenProps}
                    />
                </View>
            )
        } else if (this.state.auth && propsToCheck.type == 'user') {
            return (

                //TODO: ADD PROPS FOR USER PERSISTENT DATA CONTAINER

                <View style={styles.container}>
                    <AppNavigator
                        screenProps={screenProps}
                    />
                </View>
            )
        }  else if (this.state.auth && propsToCheck.type == 'null') {
            return (
                <View style={styles.container}>
                    <AppNavigator
                        screenProps={screenProps}
                    />
                </View>
            )
        } else if (!this.state.auth) {
            return (
                <View style={styles.login_container}>
                    <LoginScreen
                        loggedProps={{setAuth: this.setAuth}}
                    />
                </View>
            )
        } else {
            return (<View><Text>Unexpected Error</Text></View>)
        }
    }
}
export default LoginPersistencyChecker