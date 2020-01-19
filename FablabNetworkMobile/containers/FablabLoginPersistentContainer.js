import {Container} from "unstated";
import {PersistContainer} from "unstated-persist";
import {AsyncStorage} from "react-native";

export class FablabLoginPersistentContainer extends PersistContainer {

    persist = {
        key: 'counter',
        version: 1,
        storage: AsyncStorage,
    }

    state = {
        username: '',
        name: '',
        address: '',
        lat: '',
        lon: '',
        profile_photo: '',
        phone: '',
        email: '',
    }

    setLogged = async (usr, name, address, lat, lon, profile_photo, phone, email) => {

        this.setState({
            username: usr,
            name: name,
            address: address,
            lat: lat,
            lon: lon,
            profile_photo: profile_photo,
            phone: phone,
            email: email,
        })
    }

}

