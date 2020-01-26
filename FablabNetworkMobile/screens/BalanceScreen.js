import React, {Component} from 'react'
import {Dimensions, StyleSheet, View} from 'react-native'
import styles from "../styles";
import {UserLoginContainer} from "../containers/UserLoginContainer";
import Text from "react-native-web/dist/exports/Text";


class BalanceScreen extends Component {


    state = {
        loading: true,
        settingsNav: this.props.settingsNav,
        container: UserLoginContainer,
    };

    render() {


        return (
            <View style={styles.mainviewStyle}>
                <Text>MembershipScreen</Text>
            </View>
        )
    }

}

export default BalanceScreen;
