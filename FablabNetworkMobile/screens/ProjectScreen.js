import React from 'react';
import {View} from 'react-native';
import Project from "../components/Project";

class ProjectScreen extends React.Component {
    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('machineList')
    });

    render() {
        return (
            <View>
                <Project
                    project={this.props.navigation.state.params.project}
                />
            </View>
        );
    }

}

export default ProjectScreen
