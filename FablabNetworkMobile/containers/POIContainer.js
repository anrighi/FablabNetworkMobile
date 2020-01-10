import React from 'react';
import {PersistContainer} from 'unstated-persist'
import {AsyncStorage} from 'react-native'
import {getCoordinates} from "../components/Geocoding";

class POIContainer extends PersistContainer {

    persist = {
        key: 'counter',
        version: 1,
        storage: AsyncStorage,
    }


    state = {
        pois: [],
        error: ''
    }


    async insertLocation(text, goBack) {
        if (text.length > 0) {
            let obj = await getCoordinates(text)
            console.log(obj)

            this.setState({
                pois: [...this.state.pois, {name: text, coord: obj.coord}]
            })
        }
    }
}

export default POIContainer
