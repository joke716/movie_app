

import axios from "axios/index";

const api - axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "4a2c55d5e9b8887b8fff1ea18e693f86",
        language: "en-US"
    }
});

export const movies = {
    getMovie: id =>
        api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),
    getPopular: () => api.get("movie/popular"),
    getUpcoming: () => api.get("movie/upcoming"),
    getNowPlaying: () => api.get("movie/now_playing"),
    searchMovies: term =>
        api.get("search/movie", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};

export const tv = {
    getShow: id =>
        api.get(`tv/${id}`, { params: { append_to_response: "videos" } }),
    getPopular: () => api.get("tv/popular"),
    getTopRated: () => api.get("tv/top_rated"),
    getAiringToday: () => api.get("tv/airing_today"),
    searchTv: term =>
        api.get("search/tv", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};