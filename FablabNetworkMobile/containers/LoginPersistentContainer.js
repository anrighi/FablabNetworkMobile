import {Container} from "unstated";
import {PersistContainer} from "unstated-persist";
import {AsyncStorage} from "react-native";

export class LoginPersistentContainer extends PersistContainer {

    persist = {
        key: 'counter',
        version: 1,
        storage: AsyncStorage,
    }

    state = {
        username: '',
        type: '',
        logged: false,
    }

    setLogged = async (usr, type, logged) => {

        this.setState({
            username: usr,
            type: type,
            logged: logged,
        })
    }

}

