import {Container} from "unstated";
import {bookMachine, bookPrinter} from "../components/webServices/booking";
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
        bookPrinter(machineID, this.state.dates.start, this.state.dates.end, this.state.selectedMaterial.materialId, this.state.selectedMaterial.amount)
    }

    bookMachine = (machineID) => {
        bookMachine(machineID, this.state.dates.start, this.state.dates.end, this.state.selectedMaterial.materialId, this.state.selectedMaterial.amount)
    }


}

