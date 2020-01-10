import React from 'react';
import {ScrollView, StyleSheet, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import AddLocationForm from "../components/AddLocationForm";

export default class AddLocationScreen extends React.Component {

    render() {
        return (
            <AddLocationForm/>
        )
    }
}
