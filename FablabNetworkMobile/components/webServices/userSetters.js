import axios from "axios";

export const disableMembership = async (id) => {

    const url = "http://fablabnetwork.tk/php/set-memberships.php";
    const data = new FormData();

    data.append('id', id);

    return await axios.post(url, data).then(res => {

        return res.data;

    })
        .catch(err => console.log(err));

};
