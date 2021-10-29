import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://desafio-hype-mateus.herokuapp.com/'
});