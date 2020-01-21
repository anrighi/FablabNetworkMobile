import {Container} from "unstated";

export class FablabLoginContainer extends Container {

    state = {
        username: '',
        name: '',
        address: '',
        lat: '',
        lon: '',
        profile_photo: '',
        phone: '',
        email: '',
        type: '',
        logged: '',
    }

    setLogged = async (usr, type, logged) => {

        this.setState({
            username: usr,
            type: type,
            logged: logged,
        })
    }

    setData = async (name, address, lat, lon, profile_photo, phone, email) => {

        this.setState({
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

