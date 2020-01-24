import React from 'react';
import {View} from 'react-native';
import BookingForm from "../components/BookingForm";

class BookingScreen extends React.Component {
    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('machineList')
    });

    render() {
        return (
            <View>
                <BookingForm
                    username={this.props.navigation.state.params.username}
                    machineID={this.props.navigation.state.params.id}
                    type={this.props.navigation.state.params.type}
                />
            </View>
        );
    }

}

export default BookingScreen
