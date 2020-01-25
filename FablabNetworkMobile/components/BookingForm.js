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
        if (this.props.type === 'printer') {
            getMaterials(this.state.fablabUsername, this.state.machineID)
                .then(response => {
                    this.setState({materials: response, loading: false})
                })
        } else {
            this.setState({loading: false})
        }
    }

    render() {
        if (this.state.loading) {
            return <ActivityIndicator size="large" color="#0000ff"/>
        } else {
            return (
                <Subscribe to={[BookingContainer]}>{
                    props =>
                        <View>
                            <TimePicker update={props.updateDate}
                                        type={this.props.type === 'printer' ? 'datetime' : 'date'}/>
                            {this.props.type === 'printer' ?
                                <View>
                                    <MaterialPicker
                                        update={props.updateMaterial}
                                        materials={this.state.materials}
                                    />
                                    <Button
                                        onPress={() => props.bookPrinter(this.state.machineID)}
                                        disabled={this.state.materials.length < 1}
                                        title={'Book'}/>
                                </View> :
                                <Button
                                    onPress={() => props.bookMachine(this.state.machineID)}
                                    title={'Book'}/>
                            }
                        </View>
                }
                </Subscribe>
            );
        }
    }
}

export default BookingForm
