import {Container} from "unstated";
import {bookPrinter} from "../components/webServices/booking";
import React from "react";

export class BookingContainer extends Container {

    state = {
        dates: {
            start: new Date(),
            end: new Date(),
        },
        selectedMaterial: {
            materialId: 0,
            amount: 0,
        },
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

    bookPrinter = (machineID) => {
        if (machineID === undefined || this.state.dates.start === undefined || this.state.dates.end === undefined || this.state.selectedMaterial.materialId === undefined || this.state.selectedMaterial.amount === undefined) {
            console.log('undefined error')
        } else {
            bookPrinter(machineID, this.state.dates.start, this.state.dates.end, this.state.selectedMaterial.materialId, this.state.selectedMaterial.amount)
        }
    }


}

