import axios from "axios";
import Cookies from "universal-cookie/es6";
import ConfigSwisse from "./ConfigSwisse";

const cookies = new Cookies();

const AplicationConnect = axios.create({
    baseURL: `${ConfigSwisse.urlapi}/SistemaGeneralBLocal`,
});

AplicationConnect.interceptors.request.use(async (config: any) => {
    //const token = cookies.get("token");
    const token = await localStorage.getItem('token');

    console.log("tokenaso  ", token)
    

    if (!config) {
        config = {};
    }
    if (!config.headers) {
        config.headers = {};
    }
    if (token) {

        config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.headers["Content-Type"] = "application/json";

    return config;
});

export default AplicationConnect;
