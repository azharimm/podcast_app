import * as api from '../../../api/podcasts'

export const getPodcasts = ({ commit }, page = 1) => {
    api.getPodcasts(page).then(response => {
        commit('SET_PODCASTS', response.data.data)
    })
}