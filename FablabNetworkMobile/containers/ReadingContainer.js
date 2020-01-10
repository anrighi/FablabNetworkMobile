import React from 'react';
import {PersistContainer} from 'unstated-persist'
import {AsyncStorage} from 'react-native'

class ReadingContainer extends PersistContainer {

    persist = {
        key: 'counter',
        version: 1,
        storage: AsyncStorage,
    }

    state = {
        read: [],
        error: ''
    }

    async insertLocation(obj) {

        this.setState({
            read: [...this.state.read, obj]
        })

    }
}

export default ReadingContainer
