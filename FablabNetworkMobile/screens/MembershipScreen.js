import React, {Component} from 'react'
import {Dimensions, StyleSheet, Text, View} from 'react-native'
import {UserLoginContainer} from "../containers/UserLoginContainer";
import MembershipList from "../components/MembershipList";
import styles from "../styles";
import {Subscribe} from "unstated";


class MembershipScreen extends Component {

    state = {
        loading: true,
        settingsNav: this.props.settingsNav,
        username: this.props.screenProps.username,
    };

    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('MembershipList')
    });

    render() {
        return (
            <View style={styles.mainviewStyle}>
                <MembershipList username={this.state.username}/>
            </View>

        )
    }
}

export default MembershipScreen;
