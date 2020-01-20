import React, {Component} from 'react';
import {Button, Picker, ScrollView, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from "axios";
import {getMaterials} from "./webServices/getFablabMaterials";
import {Slider} from 'react-native-elements';

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
    }


    componentDidMount() {

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


    setStartDate = (event, date) => {
        date = date || this.state.dates.start;
        this.setState({
            dates: {start: date, end: this.state.dates.end}
        });
    }

    setEndDate = (event, date) => {
        date = date || this.state.dates.end;
        this.setState({
            dates: {start: this.state.dates.start, end: date}
        });
    }

    render() {
        return (
            <ScrollView>
                <Text>choose start</Text>
                <DateTimePicker
                    value={this.state.dates.start}
                    minimumDate={new Date()}
                    maximumDate={this.state.dates.end}
                    mode={'datetime'}
                    is24Hour={true}
                    onChange={this.setStartDate}
                    minuteInterval={5}
                />
                <Text>choose end</Text>
                <DateTimePicker
                    value={this.state.dates.end}
                    minimumDate={this.state.dates.start}
                    maximumDate={new Date('2025-12-31')}
                    mode={'datetime'}
                    is24Hour={true}
                    onChange={this.setEndDate}
                    minuteInterval={5}
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
