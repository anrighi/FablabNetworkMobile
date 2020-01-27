import React from 'react';
import {StyleSheet, View} from 'react-native';
import Fablab from "../components/Fablab";
import { HeaderBackButton } from 'react-navigation';

class FablabScreen extends React.Component {
    state = {
        focused: true
    }

    static navigationOptions = ({screenProps: {t}, navigation}) => ({
        title: navigation.state.params.fablab.name,
        headerLeft: <HeaderBackButton onPress={() => navigation.navigate('FablabList')} />
    });


    navigationFunction = coord => {
        this.props.navigation.navigate('MapDetail', coord)
    }

    bookFunction = username => {
        this.props.navigation.navigate('MachineList', username)
    }

    eventFunction = fabUsername => {
        this.props.navigation.navigate('EventList', {fabUsername})
    }

    render() {
        return (
            <View style={styles.container}>
                <Fablab
                    username={this.props.screenProps.username}
                    data={this.props.navigation.state.params.fablab}
                    navFunction={this.navigationFunction}
                    eventFunction={this.eventFunction}
                    bookFunction={this.bookFunction}
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

export default FablabScreen
