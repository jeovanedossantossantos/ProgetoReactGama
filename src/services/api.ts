import axios from 'axios';

export const api = axios.create({
    baseURL:"https://sistemadeagendamento-san5v.ondigitalocean.app/",
    // "https://webhook.site/1cf60753-daff-455f-b26b-22fab738847a"
    // 'https://gamabackend-with-node.herokuapp.com/'
})