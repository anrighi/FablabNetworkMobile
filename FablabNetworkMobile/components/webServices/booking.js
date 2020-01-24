import axios from "axios";

export const bookPrinter = async (id, start, end, materialID, materialAmount) => {

    const url = "http://www.fablabnetwork.tk/php/insert-booking.php";
    const data = new FormData();

    data.append("type", 'P');
    data.append("printerID", id);
    data.append("start", start.toUTCString());
    data.append("end", end.toUTCString());
    data.append("materialID", materialID);
    data.append("materialAmount", materialAmount);

    return await axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}
