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
        let fabName = ''
        if(this.props.navigation.state.params !== undefined) {
            fabName = this.props.navigation.state.params.fabUsername
        }
        return (
            <View>
                <EventList
                    navFunction={this.navFunction}
                    fablab={fabName}
                />
            </View>
        );
    }

}

export default EventListScreen
