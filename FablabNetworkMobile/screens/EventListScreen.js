import React from 'react';
import {View} from 'react-native';
import EventList from "../components/EventList";

class EventListScreen extends React.Component {
    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('machineList')
    });

    navFunction = (eventData, fabUser) => {
        console.log(fabUser)
        this.props.navigation.navigate('Event', {eventData, fabUser})
    }

    render() {
        return (
            <View>
                <EventList
                    navFunction={this.navFunction}
                    fablab={this.props.navigation.state.params.fabUsername}
                />
            </View>
        );
    }

}

export default EventListScreen
