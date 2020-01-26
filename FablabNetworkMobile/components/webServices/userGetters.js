import axios from "axios";

export const getUserData = async (username) => {
    const url = "http://fablabnetwork.tk/php/get-user-profile.php?user=" + username;
    return await fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {

            return {
                name: response.name,
                surname: response.surname,
                description: response.description,
                email: response.email,
                profile: {uri: 'http://www.fablabnetwork.tk/' + response.profile},
                cover: {uri: 'http://www.fablabnetwork.tk/' + response.cover},
            }
        })
        .catch(function (error) {
            console.log(error);
        });

}

export const getMembership = async (username) => {

    const url = "http://fablabnetwork.tk/php/get-memberships.php";
    const data = new FormData();

    data.append('username', username);

    return await axios.post(url,data).then(res => {

        if (res.data == "No membership found") {
            return "membershipException";
        } else if (res.data == "Unknown error") {
            return "nullParamException";
        } else {
            return res.data;
        }
    })
        .catch(err => console.log(err));

};

export const getProjects = async (username) => {

    let url = ''

    if (username.length > 0) {

        url = "http://fablabnetwork.tk/php/get-projects.php?user=" + username;

    } else {

        url = "http://fablabnetwork.tk/php/get-projects.php?;"

    }

    return await fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {

            const projects = response;
            let array = []

            for (let i = 0; i < projects.length; i++) {

                let images = []

                for (let k = 0; k < projects[i].images.length; k++) {
                    images = [...images, 'http://www.fablabnetwork.tk/' + projects[i].images[k]]
                }

                array = [...array, {
                    title: projects[i].title,
                    images: images,
                    description: projects[i].description,
                }];
            }

            return array

        })
        .catch(function (error) {
            console.log(error);
        });

}
