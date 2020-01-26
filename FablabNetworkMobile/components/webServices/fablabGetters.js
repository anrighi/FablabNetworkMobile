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

export const getFablabs = async () => {
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
                    username: fablabs[i].username,
                    image: {uri: 'http://www.fablabnetwork.tk/' + fablabs[i].image},
                    coord: {lat: Number(fablabs[i].lat), lon: Number(fablabs[i].lon)},
                    address: fablabs[i].address,
                    telephone: fablabs[i].telephone,
                    email: fablabs[i].email,
                }];
            }

            return array
        })
        .catch(function (error) {
            console.log(error);
        });

}

export const getEvents = async (username) => {

    let url = ''

    if (username.length > 0) {
        url = "http://fablabnetwork.tk/php/get-events.php?fablab=" + username;
    } else {
        url = "http://fablabnetwork.tk/php/get-events.php?"
    }

    return await fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {

            const events = response;
            let array = []

            for (let i = 0; i < events.length; i++) {

                array = [...array, {
                    title: events[i].title,
                    startDate: events[i].startDate,
                    endDate: events[i].endDate,
                    image: {uri: 'http://www.fablabnetwork.tk/' + events[i].image},
                    coord: {lat: Number(events[i].lat), lon: Number(events[i].lon)},
                    description: events[i].description,
                    fabUsername: events[i].fablabName
                }];
            }

            return array
        })
        .catch(function (error) {
            console.log(error);
        });

}
