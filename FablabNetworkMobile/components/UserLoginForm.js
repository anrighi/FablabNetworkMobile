import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import {Button} from "react-native-elements";
import {login} from "./webServices/login";
import {Subscribe} from "unstated";
import {UserLoginContainer} from "../containers/UserLoginContainer"
import {LoginPersistentContainer} from "../containers/LoginPersistentContainer";

const ErrorMessage = () => (
    <Text style={{color: '#e60000'}}>Please check your credentials</Text>
)

class UserLoginForm extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        username: '',
        password: '',
        exception: false,
        buttonToggler: 'outline',
        persistence:UserLoginContainer,
    }

    async submit(p, authoriser) {

        if (this.state.username == '' && this.state.password == ''
            | this.state.username == '' | this.state.password == '') {
        } else {
            let isEmail = false;
            const tocheck = this.state.username;

            if (tocheck.match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]" +
                "{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")) {
                isEmail = true;
            }
                console.log(this.state.username);
            login(this.state.username, this.state.password, isEmail, 'user')
                .then(
                    r => {
                        if (r == "usernameException") {
                            this.setState({exception: true});
                        } else if (r == "passwordException") {
                            this.setState({exception: true});
                        } else {
                            p.setLogged(r[0].username, 'user', true);

                            console.log("Login successful");

                            this.setState({exception: false});
                            authoriser.setAuth(true);    // Refreshes main page and hides login screen
                        }
                    }
                )

        }
    }


    render() {
        return (
            <Subscribe to={[this.state.persistence]}>
                {p => (
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
                            onPress={async () => this.submit(p, this.props.authoriser)}
                        />

                        <Button
                            icon={{
                                name: "thumb-up",
                                size: 15,
                                color: "white"
                            }}
                            title="I wish to remain logged"
                            type={this.state.buttonToggler}
                            onPress={async () => {
                                if(this.state.buttonToggler == 'outline'){
                                    this.setState({
                                        buttonToggler: 'solid',
                                        persistence: LoginPersistentContainer,
                                    })
                                    console.log('OK_Persistence');
                                } else if(this.state.buttonToggler == 'solid'){
                                    this.setState({
                                        buttonToggler: 'outline',
                                        persistence: UserLoginContainer,
                                    })
                                    console.log('NO_Persistence');
                                }
                            }}
                        />
                    </View>
                )}
            </Subscribe>
        )

    }
}

export default UserLoginForm