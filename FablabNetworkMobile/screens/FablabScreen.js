import React from 'react';
import {StyleSheet, View} from 'react-native';
import Fablab from "../components/Fablab";

class FablabScreen extends React.Component {
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


    navigationFunction = coord => {
        this.props.navigation.navigate('Map', coord)
    }

    render() {
        return (
            <View style={styles.container}>
                <Fablab navFunction={this.navigationFunction}/>
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

export default FablabScreen
