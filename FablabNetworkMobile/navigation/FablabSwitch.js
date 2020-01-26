import {createSwitchNavigator} from 'react-navigation';
import FablabStack from "./FablabStack";
import FablabListStack from "./FablabListStack";

const FablabSwitch = createSwitchNavigator(
    {
        FablabList: FablabListStack,
        FablabView: FablabStack,
    },
);

export default FablabSwitch
