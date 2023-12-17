import { useDispatch } from "react-redux";
import { options } from "../../utils/constants";
import { useEffect } from "react";
import { addTrailarVideo } from '../../utils/moviesSlice';

const useMovieTrailar = (movie_id) => {

    const dispatch = useDispatch();

    const getTrailar = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/466420/videos?language=en-US', options);
        const json = await data.json();
        const videos = json.results;
        const filter_data = videos.filter(video=>video.type==="Trailer");
        const trailer = filter_data.length ? filter_data[0]:json.results[0];  
        dispatch(addTrailarVideo(trailer));  
    } 
    useEffect(()=>{
        getTrailar();
    },[])
}
export default useMovieTrailar;