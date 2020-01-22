import React, {Component} from 'react';
import {Button, Picker, ScrollView} from 'react-native';
import axios from "axios";
import {getMaterials} from "./webServices/getFablabMaterials";
import {Slider} from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {Appearance} from 'react-native-appearance';

class BookingForm extends Component {

    state = {
        machineID: this.props.machineID,
        fablabUsername: this.props.username,
        materials: [],
        dates: {
            start: new Date(),
            end: new Date(),
        },
        material: {
            value: 0,
            amount: 15,
        },
        loading: true,
        isDatePickerVisible: false,
        setDatePickerVisibility: false,
        isDarkModeEnabled: false
    }


    componentDidMount() {

        const colorScheme = Appearance.getColorScheme();
        console.log(colorScheme)
        if (colorScheme === 'dark') {
            this.setState({
                isDarkModeEnabled: true
            })
        } else {
            this.setState({
                isDarkModeEnabled: false
            })
        }

        getMaterials(this.state.fablabUsername, this.state.machineID)
            .then(response => {
                this.setState({materials: response, loading: false})
            })

    }

    bookPrinter = async (id, start, end, materialID, materialAmount) => {

        const url = "http://www.fablabnetwork.tk/php/insert-booking.php";
        const data = new FormData();

        console.log(id + ' ' + start + ' ' + end + ' ' + materialID + ' ' + materialAmount)

        data.append('printerID', id);
        data.append('start', start);
        data.append('end', end);
        data.append('materialID', materialID);
        data.append('materialAmount', materialAmount);

        return await axios.post(url, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }


    showDatePicker = () => {
        this.setState({setDatePickerVisibility: true});
    };

    hideDatePicker = () => {
        this.setState({setDatePickerVisibility: false});
    };

    setStartDate = date => {
        this.setState({dates: {start: date, end: this.state.dates.end}})
        this.hideDatePicker();
    };

    setEndDate = date => {
        this.setState({dates: {start: this.state.dates.start, end: date}})
        this.hideDatePicker();
    };

    render() {
        return (
            <ScrollView>
                <Button title="Select start" onPress={this.showDatePicker}/>
                <DateTimePickerModal
                    isVisible={this.state.setDatePickerVisibility}
                    isDarkModeEnabled={this.state.isDarkModeEnabled}
                    mode="datetime"
                    date={new Date()}
                    onConfirm={this.setStartDate}
                    onCancel={this.hideDatePicker}
                />
                <Button title="Select end" onPress={this.showDatePicker}/>
                <DateTimePickerModal
                    isVisible={this.state.setDatePickerVisibility}
                    isDarkModeEnabled={this.state.isDarkModeEnabled}
                    mode="datetime"
                    date={new Date()}
                    onConfirm={this.setEndDate}
                    onCancel={this.hideDatePicker}
                />

                <Picker
                    selectedValue={this.state.material.value}
                    onValueChange={itemValue => {
                        this.setState({
                            material: {
                                value: itemValue,
                                amount: 15
                            }
                        })
                    }}
                >
                    {
                        this.state.materials.map((material, idx) => {
                            return (
                                <Picker.Item
                                    key={idx++}
                                    label={material.name + ' - Colour: ' + material.colour}
                                    value={material.id}/>
                            );
                        })
                    }
                </Picker>
                <Slider
                    value={this.state.material.amount}
                    onValueChange={value => this.setState({material: {amount: value}})}
                    maximumValue={30}
                />
                <Button
                    onPress={() => this.bookPrinter(this.state.machineID, this.state.dates.start, this.state.dates.end, this.state.material.value, this.state.material.amount)}
                    title={'book'}/>
            </ScrollView>
        );
    }
}

export default BookingForm
