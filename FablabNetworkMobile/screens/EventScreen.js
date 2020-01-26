import React from 'react';
import {StyleSheet, View} from 'react-native';
import Event from "../components/Event";

class EventScreen extends React.Component {
    state = {
        focused: true
    }

    static navigationOptions = ({screenProps: {t}, navigation}) => ({
        title: t('nearby'),
    });


    navigationFunction = coord => {
        this.props.navigation.navigate('MapDetail', coord)
    }

    fablabFunction = username => {
        this.props.navigation.navigate('Fab', username)
    }

    render() {
        return (
            <View style={styles.container}>
                <Event
                    data={this.props.navigation.state.params.eventData}
                    username={this.props.navigation.state.params.fabUser}
                    navFunction={this.navigationFunction}
                    fabFunction={this.fablabFunction}
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

export default EventScreen
