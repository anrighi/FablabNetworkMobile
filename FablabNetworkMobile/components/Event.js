import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import moment from "moment";

class Event extends React.Component {

    state = {
        event: this.props.data,
        fabUsername: this.props.username
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>{this.state.event.title}</Text>
                    </View>
                    <View style={styles.postContent}>
                        <Text style={styles.postTitle}>
                            {moment(this.state.event.startDate).format('DD-MM-YYYY hh:mm') + " " + moment(this.state.event.endDate).format('DD-MM-YYYY hh:mm')}
                        </Text>
                        <Text style={styles.postDescription}>{this.state.event.description}</Text>
                        <View style={styles.profile}>
                            <Text style={styles.name}
                                  onPress={() => this.props.fabFunction(this.state.fabUsername)}
                            >
                                Organizer: {this.state.fabUsername}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Event

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 30,
        alignItems: 'center',
        backgroundColor: "#00BFFF",
    },
    headerTitle: {
        fontSize: 30,
        color: "#FFFFFF",
        marginTop: 10,
    },
    postContent: {
        flex: 1,
        padding: 30,
    },
    postTitle: {
        fontSize: 26,
        fontWeight: '600',
    },
    postDescription: {
        fontSize: 16,
        marginTop: 10,
    },
    tags: {
        color: '#00BFFF',
        marginTop: 10,
    },
    date: {
        color: '#696969',
        marginTop: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 35,
        borderWidth: 4,
        borderColor: "#00BFFF",
    },
    profile: {
        flexDirection: 'row',
        marginTop: 20
    },
    name: {
        fontSize: 22,
        color: "#00BFFF",
        fontWeight: '600',
        alignSelf: 'center',
        marginLeft: 10
    },
    shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    }
});
