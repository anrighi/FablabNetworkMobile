import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import WikiList from "../components/WikiList";

class HomeScreen extends React.Component {


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

    render() {

        return (

            (this.state.focused &&

                <View style={styles.container}>
                    <WikiList/>
                </View>
            ))
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

export default HomeScreen
