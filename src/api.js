

import axios from "axios/index";

const api - axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "4a2c55d5e9b8887b8fff1ea18e693f86",
        language: "en-US"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular")
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today")
};
