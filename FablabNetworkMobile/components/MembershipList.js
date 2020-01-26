import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {UserLoginContainer} from "../containers/UserLoginContainer";
import styles from "../styles";
import {Button, Overlay} from "react-native-elements";
import {getMembership} from "./webServices/userGetters";


class MembershipList extends Component {

    state = {
        memberships: [],
        loading: true,
        settingsNav: this.props.settingsNav,
        container: UserLoginContainer,
    };

    componentDidMount() {
        getMembership(this.props.username).then(response => {
            console.log(response);
        }).then(() => this.setState({loading: false}))
    }

    render() {
        if (this.state.loading) {
            return (
                <Overlay isVisible={this.state.loading}>
                    <Button
                        title="Loading button"
                        width="20"
                        height="20"
                        loading
                    />
                </Overlay>
            )
        } else {
            return (
                <View style={styles.mainviewStyle}>

                </View>
            )
        }
    }
}

export default MembershipList;
