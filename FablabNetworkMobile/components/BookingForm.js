import React, {Component} from 'react';
import {ActivityIndicator, Button, View} from 'react-native';
import {getMaterials} from "./webServices/fablabGetters";
import MaterialPicker from "./MaterialPicker";
import TimePicker from "./TimePicker";
import {Subscribe} from "unstated";
import {BookingContainer} from "../containers/BookingContainer";

class BookingForm extends Component {

    state = {
        machineID: this.props.machineID,
        fablabUsername: this.props.username,
        materials: [],
        loading: true,
        visible: false,
    }

    componentDidMount() {
        getMaterials(this.state.fablabUsername, this.state.machineID)
            .then(response => {
                this.setState({materials: response, loading: false})
            })
    }

    render() {
        if (this.state.loading) {
            return <ActivityIndicator size="large" color="#0000ff"/>
        } else if (this.props.type === 'printer') {
            return (
                <Subscribe to={[BookingContainer]}>{
                    props =>
                        <View>
                            <TimePicker update={props.updateDate} type={'datetime'}/>
                            <MaterialPicker
                                update={props.updateMaterial}
                                materials={this.state.materials}
                            />
                            <Button
                                onPress={() => props.bookPrinter(this.state.machineID)}
                                title={'book'}/>
                        </View>
                }
                </Subscribe>
            );

        } else {
            return (
                <Subscribe to={[BookingContainer]}>{
                    props =>
                        <View>
                            <TimePicker update={props.updateDate} type={'date'}/>
                            <MaterialPicker
                                update={props.updateMaterial}
                                materials={this.state.materials}
                            />
                            <Button
                                onPress={() => props.bookPrinter(this.state.machineID)}
                                title={'book'}/>
                        </View>
                }
                </Subscribe>
            );


        }

    }
}

export default BookingForm
