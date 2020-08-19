import axios from 'axios'
import { API_URL } from '../../env'

export const getPodcasts = (page = 1) => {
    return axios.get(`${API_URL}/podcasts?page=${page}`)
}

export const getPodcast = (id) => {
    return axios.get(`${API_URL}/podcasts/${id}`)
}