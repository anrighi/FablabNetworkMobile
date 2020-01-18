import React from 'react';
import {Button, KeyboardAvoidingView, Text, TextInput} from 'react-native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

class ProfileSettings extends React.Component {

    state = {
        email: '',
        granted: false
    }

    getPermissionAsync = async () => {
        const newPermission = await Permissions.askAsync(Permissions.CAMERA);
        if (newPermission.status === 'granted') {
            this.setState({granted: true})
        }
    }

    componentDidMount() {

        this.getPermissionAsync().then(response => console.log(response));
    }

    saveData = async () => {
        const url = "http://www.fablabnetwork.tk/php/profile-settings.php";
        const data = new FormData();

        data.append("category", 'email');
        data.append('input', this.state.email);

        return await axios.post(url, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    getHandler = key => val => {
        this.setState({[key]: val})
    }
    /*
        uploadImage = async () => {
            const url = "http://www.fablabnetwork.tk/php/profile-settings.php";
            const body = new FormData();
            body.append('photo', {uri: imagePath, name: 'photo.png', type: 'image/png'});
            body.append('Content-Type', 'image/png');

            fetch(url, {
                method: 'POST', headers: {
                    "Content-Type": "multipart/form-data",
                }, body: body
            })
                .then((res) => checkStatus(res))
                .then((res) => res.json())
                .then((res) => {
                    console.log("response" + JSON.stringify(res));
                })
                .catch((e) => console.log(e))
                .done()
        }
    */

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
    }

    render() {
        if (!this.state.granted) {
            return <Text>lol</Text>
        } else {
            return (
                <KeyboardAvoidingView>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        placeholder={this.state.email}
                        value={this.state.email}
                        onChangeText={this.getHandler('email')}
                    />
                    <Button
                        title={"Save"}
                        onPress={() => this.saveData()}
                    />
                    <Button
                        title="Pick an image from camera roll"
                        onPress={this._pickImage}
                    />
                </KeyboardAvoidingView>
            )
        }
    }
}

export default ProfileSettings
