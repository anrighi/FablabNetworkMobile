import React from 'react';
import {StyleSheet, View} from 'react-native';
import User from "../components/User";

class UserScreen extends React.Component {


    state = {
        focused: true

    }

    didBlurSubscription = this.props.navigation.addListener(
        'didBlur',
        payload => {
            this.setState({focused: false})
        }
    );

    willFocusSubscription = this.props.navigation.addListener(
        'willFocus',
        payload => {
            this.setState({focused: true})
        }
    );


    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('nearby')
    });

    navFunction = (user) => {
        this.props.navigation.navigate('ProjList', {user: user})
    }

    render() {
        return (
            <View style={styles.container}>
                <User
                    navFunction={this.navFunction}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 10,
        paddingVertical: 5,
    },
});

export default UserScreen
