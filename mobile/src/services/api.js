import axios from 'axios';

const api = axios.create({

    /*para usar em seu celular
     1: pegue no seu pc o IP dele, windows: ipconfig, linux: ifconfig. ios: ifconfig
     2: a base dele para o link da baseURL e ponha a porta que esta sendo usada no backend 
    */

    baseURL: 'http://192.168.0.104:3333'
});

export default api;