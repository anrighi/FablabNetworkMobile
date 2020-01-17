export const getFablab = async () => {
    const url = "http://fablabnetwork.tk/php/get-fablabs.php";

    return await fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {

            const fablabs = response;
            let array = []

            for (let i = 0; i < fablabs.length; i++) {

                array = [...array, {
                    name: fablabs[i].name,
                    image: fablabs[i].image,
                    coord: {lat: Number(fablabs[i].lat), lon: Number(fablabs[i].lon)}
                }];
            }

            return array
        })
        .catch(function (error) {
            console.log(error);
        });

}
