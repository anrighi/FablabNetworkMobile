import sha256 from 'crypto-js/sha256';
import axios from 'axios';

export const login = async (username, password, isEmail, type) => {
    const url = "http://fablabnetwork.tk/php/login-engine.php";
    const data = new FormData();
    let hash = sha256(password).toString();

    data.append("do_login", type);
    data.append('isEmail', isEmail);
    data.append('username', username);
    data.append('password', hash);

    return await axios.post(url, data)
        .then(res => {

            if (res.data == "Wrong username") {
                return "usernameException";
            } else if (res.data == "Wrong password") {
                return "passwordException";
            } else {
                return res.data;
            }
        })
        .catch(err => console.log(err));
}







