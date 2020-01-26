import {createSwitchNavigator} from 'react-navigation';
import FablabStack from "./FablabStack";
import ReadingListStack from "./ReadingListStack";

const ListSwitch = createSwitchNavigator(
    {
        FablabList: ReadingListStack,
        FablabView: FablabStack,
    },
);

export default ListSwitch
