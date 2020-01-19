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

