import axios from 'axios'

export default {

    getMovie: async function() {
        try{
            const response = await axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=Batman&page=2`)
            return response.data
        } catch (error) {
            throw error
        }
    }
}