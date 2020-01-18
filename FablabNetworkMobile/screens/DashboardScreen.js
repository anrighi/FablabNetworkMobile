import React from 'react';
import {StyleSheet, View} from 'react-native';
import Dashboard from "../components/Dashboard";

class DashboardScreen extends React.Component {
    state = {
        focused: true
    }

    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('nearby')
    });


    navigationFunction = coord => {
        this.props.navigation.navigate('Map', coord)
    }

    render() {
        return (
            <View style={styles.container}>
                <Dashboard settingsNav={() => this.props.navigation.navigate('ProfileSettings')}/>
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

export default DashboardScreen
