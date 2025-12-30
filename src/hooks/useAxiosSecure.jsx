import axios from "axios";

const instance = axios.create({
    baseURL: "https://personal-protfolio-server.vercel.app/"
})

// https://personal-protfolio-server.vercel.app/

const useAxiosSecure = () => {
    return instance
};

export default useAxiosSecure;