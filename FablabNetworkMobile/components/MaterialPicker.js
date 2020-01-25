import React, {Component} from 'react';
import {Picker, Slider, Text, View} from 'react-native';

class MaterialPicker extends Component {

    state = {
        materials: this.props.materials,
        updateFunction: this.props.update,
        selectedMaterial: {
            materialId: 0,
            amount: 0,
            maxValue: 0,
        },
    }

    componentDidMount() {

        if (this.state.materials.length > 0) {
            this.setState({
                selectedMaterial: {
                    materialId: this.props.materials[0].id,
                    amount: this.props.materials[0].max / 2,
                    maxValue: this.props.materials[0].max,
                },
            })
        }
    }

    updateMaterial = value => {
        let max = 0
        const array = this.state.materials

        for (let place in array) {
            if (array[place].id === value) {
                max = array[place].max
            }
        }

        this.setState({
            selectedMaterial: {
                materialId: value,
                amount: Math.round(max / 2),
                maxValue: max,
            }
        })
    }


    render() {
        if (this.state.materials.length === 0) {
            return <Text>No material available for this printer</Text>
        } else
            return (
                <View>
                    <Picker
                        selectedValue={this.state.selectedMaterial.materialId}
                        onValueChange={this.updateMaterial}
                    >
                        {
                            this.state.materials.map((material, idx) => {
                                return (
                                    <Picker.Item
                                        key={idx++}
                                        label={material.name + ' - Colour: ' + material.colour}
                                        value={material.id}/>
                                )
                            })
                        }
                    </Picker>

                    <Slider
                        value={this.state.selectedMaterial.amount}
                        onValueChange={value => {
                            this.setState({
                                selectedMaterial: {
                                    materialId: this.state.selectedMaterial.materialId,
                                    amount: value,
                                    maxValue: this.state.selectedMaterial.maxValue
                                }
                            })
                            this.state.updateFunction(this.state.selectedMaterial.materialId, value)
                        }}
                        maximumValue={this.state.selectedMaterial.maxValue}
                        minimumValue={1}
                        step={1}
                    />
                    <Text>{this.state.selectedMaterial.amount}</Text>
                </View>
            );
    }
}

export default MaterialPicker
