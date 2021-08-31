import axios from 'axios'

export default {
    getMovie: async function(query, page) {
        try{
            if (query === '') {
                query = 'fast'
            }
            const response = await axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${query}&page=${page}`)
            return response.data
        } catch (error) {
            throw error
        }
    },

    getMovieById: async function(query) {
        try{
            if (query === '') {
                query = 'fast'
            }
            const response = await axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&i=${query}`)
            return response.data
        } catch (error) {
            throw error
        }
    }
}