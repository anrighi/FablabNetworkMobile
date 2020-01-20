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
