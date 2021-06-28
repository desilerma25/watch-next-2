import axios from "axios";

export default async (req, res) => {
    const URL = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.API_KEY}`;
    const response = await axios.get(URL);
    // Get data from db
    res.status(200).json({ data: response.data })
}