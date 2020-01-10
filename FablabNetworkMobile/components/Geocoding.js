import * as Location from 'expo-location';

export async function getAddress(long, lat) {
    return Location.reverseGeocodeAsync({
        longitude: long,
        latitude: lat
    }).then(res => {
        return res[0].street + ", " + res[0].city + ", " + res[0].country;
    })
}

export async function getCoordinates(address) {
    return Location.geocodeAsync(address).then(res => {
        let object = {
            coord:
                {
                    long: res[0].longitude,
                    lat: res[0].latitude
                }
        }
        return object
    })
}

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

export function getDistance(start, end) {
    const earthRadiusKm = 6371;
    const dLat = degreesToRadians(start.lat - end.lat);
    const dLon = degreesToRadians(start.long - end.long);
    const lat1 = degreesToRadians(start.lat);
    const lat2 = degreesToRadians(end.lat);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
}

