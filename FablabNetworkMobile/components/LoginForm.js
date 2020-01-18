import React, {Component} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {login} from "./webServices/login";
import {Subscribe} from "unstated";
import {LoginContainer} from "../containers/LoginContainer"
import {colors} from "react-native-elements";

const ErrorMessage = () => (
    <Text style={{color: '#e60000'}}>Please check your credentials</Text>
)

class LoginForm extends React.Component {

    state = {
        username: '',
        password: '',
        exception: false,
    }

    async submit(props) {

        if (this.state.username == '' && this.state.password == ''
            | this.state.username == '' | this.state.password == '') {
        } else {
            let isEmail = false;
            const tocheck = this.state.username;

            if (tocheck.match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]" +
                "{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")) {
                isEmail = true;
            }

            login(this.state.username, this.state.password, isEmail)
                .then(
                    r => {
                        if (r == "usernameException") {
                            this.setState({exception: true});
                        } else if (r == "passwordException") {
                            this.setState({exception: true});
                        } else {
                            props.setLogged(r[0].username, true, r[0].name,
                                r[0].surname, r[0].description, r[0].profile_photo,
                                r[0].cover_photo, r[0].date_of_birth);
                            console.log("Login successful");
                            this.setState({exception: false});
                        }
                    }
                )

        }
    }


    render() {
        return (
            <Subscribe to={[LoginContainer]}>
                {props => (
                    <View>
                        <TextInput
                            value={this.state.username}
                            onChangeText={(username) => this.setState({username})}
                            placeholder={'Username'}
                        />
                        <TextInput
                            value={this.state.password}
                            onChangeText={(password) => this.setState({password})}
                            placeholder={'Password'}
                            secureTextEntry={true}
                        />

                        {this.state.exception && <ErrorMessage/>}

                        <Button
                            title={'Login'}
                            onPress={async () => this.submit(props)}
                        />

                    </View>
                )}
            </Subscribe>
        )

    }
}

export default LoginForm