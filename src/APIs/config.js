import axios from "axios";
const api_Key = "357d46d3b0be23510eb44a285e06602a"
const axiosInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie/",
    params: {
        api_key: api_Key,
      },
})


export default axiosInstance