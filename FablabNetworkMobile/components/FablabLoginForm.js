import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import {Button} from "react-native-elements";
import {login} from "./webServices/login";
import {Subscribe} from "unstated";
import {FablabLoginContainer} from "../containers/FablabLoginContainer"
import {FablabLoginPersistentContainer} from "../containers/FablabLoginPersistentContainer"

const ErrorMessage = () => (
    <Text style={{color: '#e60000'}}>Please check your credentials</Text>
)

class FablabLoginForm extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        username: '',
        password: '',
        exception: false,
        buttonToggler: 'outline',
        persistence: FablabLoginContainer,
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

            login(this.state.username, this.state.password, isEmail, 'fablab')
                .then(
                    r => {
                        if (r == "usernameException") {
                            this.setState({exception: true});
                        } else if (r == "passwordException") {
                            this.setState({exception: true});
                        } else {
                            p.setLogged(r[0].username, r[0].name,
                                r[0].address, r[0].lat, r[0].lon, r[0].profile_photo,
                                r[0].telephone, r[0].email);

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
                                        persistence: FablabLoginPersistentContainer,
                                    })
                                    console.log('OK_Persistence');
                                } else if(this.state.buttonToggler == 'solid'){
                                    this.setState({
                                        buttonToggler: 'outline',
                                        persistence: FablabLoginContainer,
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

export default FablabLoginForm