export const getFablabData = async (username) => {
    const url = "http://fablabnetwork.tk/php/get-fablabs.php?us=" + username;
    return await fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {

            return {
                name: response[0].name,
                image: {uri: 'http://www.fablabnetwork.tk/' + response[0].image},
                address: response[0].address,
                telephone: response[0].telephone,
                coord: {lat: Number(response[0].lat), lon: Number(response[0].lon)},
                email: response[0].email
            }

        })
        .catch(function (error) {
            console.log(error);
        });

}
