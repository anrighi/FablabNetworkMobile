import {createSwitchNavigator} from 'react-navigation';
import DashboardStack from "./DashboardStack";

const DashboardSwitch = createSwitchNavigator(
    {
        Dashboard: DashboardStack,
    },
);

export default DashboardSwitch
