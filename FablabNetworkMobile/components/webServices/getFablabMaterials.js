export const getMaterials = async (username, printerid) => {
    const url = "http://fablabnetwork.tk/php/get-materials.php?fablab=" + username + '&printer=' + printerid;
    return await fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {

            let materials = []

            for (let place in response) {
                materials = [...materials, {
                    id: response[place].id,
                    name: response[place].name,
                    brand: response[place].brand,
                    colour: response[place].colour,
                    cost: response[place].cost,
                    max: response[place].max
                }]
            }

            return materials;

        })
        .catch(function (error) {
            console.log(error);
        });
}
