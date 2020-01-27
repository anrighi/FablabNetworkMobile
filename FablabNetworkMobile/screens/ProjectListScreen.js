import React from 'react';
import {View} from 'react-native';
import ProjectList from "../components/ProjectList";

class ProjectListScreen extends React.Component {

    state = {
        username: this.props.screenProps.username,
    }

    static navigationOptions = ({screenProps: {t}}) => ({
        title: t('machineList')
    });

    navFunction = (project) => {
        this.props.navigation.navigate('Proj', {project})
    }

    render() {
        return (
            <View>
                <ProjectList
                    navFunction={this.navFunction}
                    username={this.state.username}
                />
            </View>
        );
    }

}

export default ProjectListScreen
