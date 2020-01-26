import {createSwitchNavigator} from 'react-navigation';
import FablabStack from "./FablabStack";
import EventListStack from "./EventListStack";

const EventSwitch = createSwitchNavigator(
    {
        EventList: EventListStack,
        FablabView: FablabStack,
    },
);

export default EventSwitch
