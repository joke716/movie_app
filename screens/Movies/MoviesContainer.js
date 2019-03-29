import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { movies } from "../../api";

export default class extends React.Component {
    state = {
        loading: true,
        upcoming: null,
        popular: null,
        nowPlaying: null,
        error: null
    };

    async componentDidMount() {
        let upcoming, popular, nowPlaying, error;
        try {
            ({
                data: { result: upcoming }
            } = await movies.getUpcoming());
            ({
                data: { result: popular }
            } = await movies.getPopular());
            ({
                data: { result: nowPlaying }
            } = await movies.getNowPlaying());

        } catch {
            error = "Can't get Movies.";
        } finally {
            this.setState({
                loading: false,
                error,
                upcoming,
                popular,
                nowPlaying
            });
        }
    }

    render() {
        const { loading, upcoming, popular, nowPlaying } = this.state;
        return <MoviesPresenter loading={loading} />;
    }
}