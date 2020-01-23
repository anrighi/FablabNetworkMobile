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

export const getFablabMachines = async (username) => {
    const url = "http://fablabnetwork.tk/php/get-machines.php?fablab=" + username;
    return await fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {

            const printer = response.printers
            const machine = response.machines

            let printers = []
            let machines = []

            for (let place in printer) {
                printers = [...printers, {
                    id: printer[place].id,
                    name: printer[place].name,
                    brand: printer[place].brand,
                    hourlyCost: printer[place].hourlyCost,
                    image: {uri: 'http://www.fablabnetwork.tk/' + printer[place].image},
                }]
            }

            for (let place in machine) {
                machines = [...machines, {
                    id: machine[place].id,
                    name: machine[place].name,
                    brand: machine[place].brand,
                    hourlyCost: machine[place].hourlyCost,
                    image: {uri: 'http://www.fablabnetwork.tk/' + machine[place].image},
                }]
            }

            return {printers: printers, machines: machines}
        })
        .catch(function (error) {
            console.log(error);
        });
}

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
