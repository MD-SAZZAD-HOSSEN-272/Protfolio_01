import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/"
})

// https://personal-protfolio-server.vercel.app/

const useAxiosSecure = () => {
    return instance
};

export default useAxiosSecure;