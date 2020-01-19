import {Container} from "unstated";

export class UserLoginContainer extends Container {

    state = {
        username: '',
        name: '',
        surname: '',
        description: '',
        profile_photo: '',
        cover_photo: '',
        date_of_birth: '',
    }

    setLogged = async (usr, name, surname, description, profile_photo, cover_photo, dob) => {

        this.setState({
            username: usr,
            name: name,
            surname: surname,
            description: description,
            profile_photo: profile_photo,
            cover_photo: cover_photo,
            date_of_birth: dob,
        })
    }

}

