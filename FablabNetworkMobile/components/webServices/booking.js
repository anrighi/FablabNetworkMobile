import axios from "axios";
import moment from 'moment';

export const bookPrinter = async (id, start, end, materialID, materialAmount) => {

    const startJSON = moment(start).format('YYYY-MM-DD hh:mm')
    const endJSON = moment(end).format('YYYY-MM-DD hh:mm')

    const url = "http://www.fablabnetwork.tk/php/insert-booking.php";
    const data = new FormData();

    data.append("type", 'P');
    data.append("printerID", id);
    data.append("start", startJSON);
    data.append("end", endJSON);
    data.append("materialID", materialID);
    data.append("materialAmount", materialAmount);

    return await axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}

export const bookMachine = async (id, start, end) => {

    const url = "http://www.fablabnetwork.tk/php/insert-booking.php";
    const data = new FormData();

    const startJSON = moment(start).format('YYYY-MM-DD hh:mm')
    const endJSON = moment(end).format('YYYY-MM-DD hh:mm')

    data.append("type", 'M');
    data.append("machineID", id);
    data.append("start", startJSON);
    data.append("end", endJSON);

    return await axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}

export const becomeMember = async (username, fabUsername) => {

    const url = "http://www.fablabnetwork.tk/php/become-member.php";
    const data = new FormData();

    data.append("user", username);
    data.append("fablab", fabUsername);

    return await axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}
