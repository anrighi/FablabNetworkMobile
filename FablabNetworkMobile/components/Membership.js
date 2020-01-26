import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {UserLoginContainer} from "../containers/UserLoginContainer";
import styles from "../styles";
import {Subscribe} from "unstated";
import userGetters from "components/webServices/userGetters"


class Membership extends Component {

    state = {
        loading: true,
        settingsNav: this.props.settingsNav,
        container: UserLoginContainer,
    };

    render() {
        return (
            <View style={styles.mainviewStyle}>
                <Subscribe to={UserLoginContainer}> {p => (
                    <View>
                        <Text>p.username</Text>
                    </View>
                )}
                </Subscribe>
            </View>
        )
    }
}

export default Membership;
