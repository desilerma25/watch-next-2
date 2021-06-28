import axios from "axios";

const fetchPopMovies = (page) => axios.get('/api/popular-movies')