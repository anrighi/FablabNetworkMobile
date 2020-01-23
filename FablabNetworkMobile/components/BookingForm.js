import React, {Component} from 'react';
import {ActivityIndicator, Button, View} from 'react-native';
import {getMaterials} from "./webServices/fablabGetters";
import {bookPrinter} from "./webServices/booking";
import MaterialPicker from "./MaterialPicker";
import TimePicker from "./TimePicker";

class BookingForm extends Component {

    state = {
        machineID: this.props.machineID,
        fablabUsername: this.props.username,
        materials: [],
        dates: {
            start: undefined,
            end: undefined,
        },
        selectedMaterial: {
            materialId: undefined,
            amount: undefined,
        },
        loading: true,
    }

    componentDidMount() {
        getMaterials(this.state.fablabUsername, this.state.machineID)
            .then(response => {
                this.setState({materials: response, loading: false})
            })
    }

    updateMaterial = (id, amount) => {
        this.setState({
            selectedMaterial: {
                materialId: id,
                amount: amount,
            }
        })
    }

    updateDate = (type, value) => {
        if (type === 'start') {
            this.setState({
                dates: {
                    start: value,
                    end: this.state.dates.end,
                }
            })
        } else {
            this.setState({
                dates: {
                    start: this.state.dates.start,
                    end: value,
                }
            })
        }
    }

    render() {
        if (this.state.loading) {
            return <ActivityIndicator size="large" color="#0000ff"/>
        } else
            return (
                <View>
                    <TimePicker update={this.updateDate}/>
                    <MaterialPicker
                        update={this.updateMaterial}
                        materials={this.state.materials}
                        max={this.state.selectedMaterial.maxValue}
                    />
                    <Button
                        onPress={() => bookPrinter(this.state.machineID, this.state.dates.start, this.state.dates.end, this.state.selectedMaterial.materialId, this.state.selectedMaterial
                            .amount)
                        }
                        title={'book'}/>
                </View>
            );
    }
}

export default BookingForm
