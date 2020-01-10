import React from 'react';
import ReadingList from "../components/ReadingList";
import {Button, View} from "react-native";

class ReadingListScreen extends React.Component {

    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('readingList'),
    })

    render() {
        let {t} = this.props.screenProps;
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('Map')}
                    title={t('showMap')}>
                    Show map
                </Button>
                <ReadingList/>
            </View>
        )
    }


}


export default ReadingListScreen
