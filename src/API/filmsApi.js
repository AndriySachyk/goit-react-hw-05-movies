import axios from "axios"


axios.defaults.baseURL ='https://api.themoviedb.org/3/'
const API_KEY = 'cd4aad21ae4d2cce6f7768bb93e45089'

export const getTrendingFilms = async()=>{
    const {data} = await axios.get(`trending/movie/day?api_key=${API_KEY}&language=en-US`);
    return data;

}



export const getDetailsFilm = async(id)=>{
    const {data} = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    return data;
}





