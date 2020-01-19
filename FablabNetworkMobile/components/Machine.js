import React from 'react';
import {View} from 'react-native';

class Machine extends React.Component {

    state = {
      //type: '',   // Arduino, Raspberry or generic -- I created also two components
                    // for each one extending Machine.js -- Benutzen Sie es, wie Sie wollen.
        id: '',
        name: '',
        dailyCost: 0,
        owner: '',
        isBooked: false,
    }



    render() {
        return (
            <View>

            </View>
        );
    }
}

export default Machine