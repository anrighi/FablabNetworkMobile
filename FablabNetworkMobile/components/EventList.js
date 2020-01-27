import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {ListItem} from "react-native-elements";
import {getProjects} from "./webServices/userGetters";
import {getEvents} from "./webServices/fablabGetters";

class EventList extends React.Component {

    state = {
        loading: true,
        events: [],
        fabUser: this.props.fablab
    }

    componentDidMount() {
        getEvents(this.state.fabUser).then(response => {
            this.setState({
                events: response,
            })
        }).then(() => this.setState({loading: false}))
    }

    render() {
        if (this.state.loading) {
            return <ActivityIndicator/>
        } else {
            return (
                <View>
                    <ScrollView>
                        {this.state.events.map((event, idx) => {
                            return (
                                <ListItem
                                    key={idx}
                                    title={event.title}
                                    leftAvatar={{
                                        rounded: true,
                                        source: event.image
                                    }}
                                    onPress={() => this.props.navFunction(event, this.props.fablab)}
                                />
                            );
                        })}
                    </ScrollView>
                </View>

            )
        }
    }
}

export default EventList
