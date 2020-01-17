import React from 'react';
import {View} from 'react-native';
import {Subscribe} from "unstated";
import {WikiDataContainer} from "../containers/WikiDataContainer";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

class LoginScreen extends React.Component {

    render() {
        return (
            <View>
                <Subscribe to={[WikiDataContainer]}>
                    {props => (
                        <View>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle eventKey="0">
                                    Click me!
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle eventKey="1">
                                    Click me!
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        </View>
                    )}
                </Subscribe>
            </View>
        )
    }
}

export default LoginScreen