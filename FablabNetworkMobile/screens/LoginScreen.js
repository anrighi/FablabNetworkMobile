
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UserLoginForm from "../components/UserLoginForm";
import {Button, Overlay} from "react-native-elements";
import FablabLoginScreen from "./FablabLoginScreen";


class LoginScreen extends React.Component {

    state = {
        type: '',
    }

    chooseLogin(type) {
        if (type == 'fablab') {
            this.setState({type: type})
        } else if (type == 'user') {
            this.setState({type: type});
          //  this.props.loggedProps.persistency.deleteCache().then(r => console.log("mona"))
        } else {
            console.log('ERROR:' + type);
        }
        this.setState({isVisible: false});
    }

    render() {

        let func = this.props.loggedProps;

        if (this.state.type == '') {
            return (
                <View style={styles.login_container}>
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
                        disabled={true}
                    />
                </View>


            )
        } else if (this.state.type == 'user') {
            return (<UserLoginForm authoriser={func} />)
        } else if (this.state.type == 'fablab') {
            return (<FablabLoginScreen loggedProps={func}/>)
        } else {
            return (<Text>error</Text>)
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    login_container: {
        margin:100,
    },
});
export default LoginScreen