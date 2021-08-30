import React from 'react';
import './movieList.css'

import MovieList from '../../services/MovieService'

export default class PersonList extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        this.movieList()
    }

    movieList() {
        MovieList.getMovie()
            .then(res => {
                const movies = res.Search
                this.setState({ movies })
            })
    }

    render() {
        return (
            <div className="container-fluid pt-5 pb-5 bg-light">
                <div className="container text-center">
                    <h2 className="display-3">Movie List</h2>
                    <div className="row pt-4 gx-4 gy-4">
                        { this.state.movies.map(movie => <div className="col-md-4" key={movie.imdbID}>
                            <div className="card crop-img">
                                <img src={movie.Poster} className="card-img-top" width="200" height="200" alt="imageposter"/>
                                <div className="card-body">
                                    <h5 className="card-title">{movie.Title}</h5>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        )
    }
}