import {Container} from "unstated";

export class LoginContainer extends Container {

    state = {
        username: '',
        loggedin: false,
        name: '',
        surname: '',
        description: '',
        profile_photo: '',
        cover_photo: '',
        date_of_birth: '',
    }

    setLogged = async (usr, logged, name, surname, description, profile_photo, cover_photo, dob) => {

        this.setState({
            username: usr,
            loggedin: logged,
            name: name,
            surname: surname,
            description: description,
            profile_photo: profile_photo,
            cover_photo: cover_photo,
            date_of_birth: dob,
        })
    }

}

