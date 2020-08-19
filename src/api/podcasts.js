import axios from 'axios'
import { API_URL } from '../../env'

export const getPodcasts = (page = 1) => {
    return axios.get(`${API_URL}/podcasts?page=${page}`)
}