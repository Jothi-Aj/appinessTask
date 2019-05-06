import axios from 'axios';

const apiEndPoint = 'https://api.darksky.net/forecast/ec5fb70d19d650295a3b6c7b1e3ab8da/';

export default {
	foreCast: {
        fetchWeatherData: (userLatLng) =>
            axios.get(`https://api.darksky.net/forecast/ec5fb70d19d650295a3b6c7b1e3ab8da/${userLatLng.lat},${userLatLng.lng}`).then(res => res),
    },
	

}