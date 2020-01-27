import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {HeaderBackButton} from 'react-navigation';
import {Input} from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import {ImageBrowser} from 'expo-image-picker-multiple';
import * as ImageManipulator from 'expo-image-manipulator';
import {createProject} from "../components/webServices/booking";

class CreateProjectScreen extends React.Component {
    state = {
        focused: true,
        title: '',
        description: ''
    }

    static navigationOptions = ({screenProps: {t}, navigation}) => ({
        title: t('nearby'),
        headerLeft: <HeaderBackButton onPress={() => navigation.navigate('FablabList')}/>
    });


    navigationFunction = coord => {
        this.props.navigation.navigate('MapDetail', coord)
    }

    bookFunction = username => {
        this.props.navigation.navigate('MachineList', username)
    }

    eventFunction = fabUsername => {
        this.props.navigation.navigate('EventList', {fabUsername})
    }

    componentDidMount() {

        Permissions.askAsync(Permissions.CAMERA_ROLL);

    }

    imagesCallback = (callback) => {
        const {navigation} = this.props;
        navigation.setParams({loading: true});

        callback.then(async (photos) => {
            const cPhotos = [];
            for (let photo of photos) {
                const pPhoto = await this._processImageAsync(photo.uri);
                cPhotos.push({
                    uri: pPhoto.uri,
                    name: photo.filename,
                    type: 'image/jpg'
                })
            }

            this.setState({selectedImages: cPhotos})

            await createProject('admin', this.state.title, this.state.description, this.state.selectedImages)

        })
            .catch((e) => console.log(e))
            .finally(() => navigation.setParams({loading: false}));
    };

    async _processImageAsync(uri) {
        const file = await ImageManipulator.manipulateAsync(
            uri,
            [{resize: {width: 1000}}],
            {compress: 0.8, format: ImageManipulator.SaveFormat.JPEG}
        );
        return file;
    }

    updateHandler = (count, onSubmit) => {
        this.setState({
            headerTitle: `Selected ${count} files`,
            headerRight: onSubmit,
        });
    };

    render() {
        const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;
        return (
            <View style={styles.container}>
                <Input placeholder='BASIC INPUT' label={'Title'} onChangeText={text => this.setState({title: text})}/>
                <Input placeholder='BASIC INPUT' label={'Description'}
                       onChangeText={text => this.setState({description: text})}/>

                <ImageBrowser
                    max={3}
                    onChange={this.updateHandler}
                    callback={this.imagesCallback}
                    renderSelectedComponent={this.renderSelectedComponent}
                    emptyStayComponent={emptyStayComponent}
                />

                <Button title={'save'} onPress={() => this.state.headerRight()}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 10,
        paddingVertical: 5,
    },
});

export default CreateProjectScreen
