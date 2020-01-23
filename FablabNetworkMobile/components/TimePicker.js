import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {Appearance} from 'react-native-appearance';

class TimePicker extends Component {

    state = {
        dates: {
            start: new Date(),
            end: new Date(),
        },
        visibility: {start: false, end: false},
        isDarkModeEnabled: false,
        updateFunction: this.props.update
    }

    componentDidMount() {
        const colorScheme = Appearance.getColorScheme();
        if (colorScheme === 'dark') {
            this.setState({isDarkModeEnabled: true})
        } else {
            this.setState({isDarkModeEnabled: false})
        }
    }

    showDatePicker = type => {
        if (type === 'start') {
            this.setState({visibility: {start: true, end: false}});
        } else {
            this.setState({visibility: {start: false, end: true}});
        }
    };

    hideDatePicker = () => {
        this.setState({visibility: {start: false, end: false}});
    };

    setStartDate = date => {
        this.setState({dates: {start: date, end: this.state.dates.end}})
        this.state.updateFunction('start', date)
        this.hideDatePicker();
    };

    setEndDate = date => {
        this.setState({dates: {start: this.state.dates.start, end: date}})
        this.state.updateFunction('end', date)
        this.hideDatePicker();
    };

    render() {
        return (
            <View>
                <Button title="Select start" onPress={() => this.showDatePicker('start')}/>
                <DateTimePickerModal
                    isVisible={this.state.visibility.start}
                    isDarkModeEnabled={this.state.isDarkModeEnabled}
                    mode="datetime"
                    date={this.state.dates.start}
                    onConfirm={this.setStartDate}
                    onCancel={this.hideDatePicker}
                />
                <Text>{this.state.dates.start + ''}</Text>

                <Button title="Select end" onPress={() => this.showDatePicker('end')}/>
                <DateTimePickerModal
                    isVisible={this.state.visibility.end}
                    isDarkModeEnabled={this.state.isDarkModeEnabled}
                    mode="datetime"
                    date={this.state.dates.end}
                    onConfirm={this.setEndDate}
                    onCancel={this.hideDatePicker}
                />
                <Text>{this.state.dates.end + ''}</Text>

            </View>
        );
    }
}

export default TimePicker
