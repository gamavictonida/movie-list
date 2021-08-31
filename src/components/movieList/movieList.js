import React, { useState, useEffect } from "react";
import MovieService from '../../services/MovieService'
import { Modal } from 'react-bootstrap';
import './movieList.css'

export default function InfiniteScrollNoLibrary() {

    const [movieList, setMovieList] = useState([]);
    const [search, setSearach] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);

    const [image, setImage] = useState('');
    const [plot, setPlot] = useState('');
    const [items, setItems] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            if(!noData) {
                loadMovieList(page);
            }
        }
    }

    useEffect(() => {
        loadMovieList(page);
    }, []);

    const handleSubmit = (evt) => {
        const clearData = []
        const clearPage = 1;
        setMovieList(clearData)
        setPage(clearPage)
    }

    const handleClick = (e) => {
        const id = e.target.id
        MovieService.getMovieById(id)
            .then(item => {
                setImage(item.Poster)
                setPlot(item.Plot)
                setItems(item)
                handleShow()
            })
    }

    const loadMovieList = (page) => {
        setLoading(true);
        setTimeout(() => {
                MovieService.getMovie(search, page)
                    .then((res) => {
                        const newPage = page + 1;
                        const newList = movieList.concat(res.Search);
                        setMovieList(newList);
                        setPage(newPage);
                        if(res.Search.length===0)
                            setNoData(true);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() =>{
                        setLoading(false);
                    })
            }
            ,1500);
    }

    return (
        <div className="container-fluid pt-5 pb-5 bg-light">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3 className="text-center">{items.Title}</h3>
                    <div className="text-center imageModal"><img src={image}/></div>
                    <div className="desc">{items.Genre} | {items.Runtime} | {items.Country}</div>
                    <div>Actor: {items.Actors}</div>
                    <div>Director: {items.Director}</div>
                    <div className="plot">
                        <p>{plot}</p>
                    </div>
                </Modal.Body>
            </Modal>

            <div className="container text-center">
                <h2 className="display-3" id="movielist">Movie List</h2>
                <input type="text" name="name" placeholder="Search" value={search} onChange={e => setSearach(e.target.value)}/>
                <button className="btn-primary" onClick={handleSubmit}>search</button>
                <div className="row pt-4 gx-4 gy-4">
                    {movieList.map((movie, i) =>
                        (
                            <div className="col-md-3" key={movie.imdbID}>
                                <div className="card crop-img">
                                    <img onClick={handleClick} src={movie.Poster} alt={movie.Title} id={movie.imdbID} className="card-img-top" width="75" height="200" />
                                    <div className="card-body cardTitle">
                                        <h5 className="card-title">{movie.Title}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                    {loading ? <div className="text-center">loading data ...</div> : "" }
                    {noData ? <div className="text-center">no data anymore ...</div> : "" }
                </div>
            </div>
        </div>
    );
}