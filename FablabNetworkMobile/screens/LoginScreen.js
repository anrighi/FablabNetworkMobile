import React from 'react';
import {View, Text} from 'react-native';
import LoginForm from "../components/UserLoginForm";
import {Button, Overlay} from "react-native-elements";
import UserLoginScreen from "./UserLoginScreen";
import FablabLoginScreen from "./FablabLoginScreen";


class LoginScreen extends React.Component {

    state = {
        type: '',
        isVisible: true,
    }

    chooseLogin(type) {
        if (type == 'fablab') {
            this.setState({type: type});
        } else if (type == 'user') {
            this.setState({type: type});
        } else {
            console.log('ERROR:' + type);
        }
        this.setState({isVisible: false});
    }

    render() {

        let func = this.props.loggedProps;

        if (this.state.type == '') {
            return (
                <Overlay
                    isVisible={this.state.isVisible}
                    windowBackgroundColor="#b3b3b3"
                    overlayBackgroundColor="#ffffff"
                    width="80%"
                    height="80%"
                >
                    <View>
                        <Button
                            title="Login as User"
                            type="outline"
                            touchableComponent={true}
                            onPress={async () => {
                                this.chooseLogin('user')
                            }}
                        />
                        <Button
                            title="Login as Fablab"
                            type="outline"
                            touchableComponent={true}
                            onPress={async () => {
                                this.chooseLogin('fablab')
                            }}
                        />
                    </View>
                </Overlay>


            )
        } else if (this.state.type == 'user') {
            return (<UserLoginScreen loggedProps={func}/>)
        } else if (this.state.type == 'fablab') {
            return (<FablabLoginScreen loggedProps={func}/>)
        } else {
            return (<Text>error</Text>)
        }
    }
}

export default LoginScreen