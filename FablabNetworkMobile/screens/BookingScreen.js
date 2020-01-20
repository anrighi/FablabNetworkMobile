import React from 'react';
import {View} from 'react-native';
import MachineList from "../components/MachineList";
import Machine from "../components/Machine";
import BookingForm from "../components/BookingForm";

class BookingScreen extends React.Component {
    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('machineList')
    });

    render() {
        return (
            <View>
                <BookingForm/>
            </View>
        );
    }

}

export default BookingScreen
