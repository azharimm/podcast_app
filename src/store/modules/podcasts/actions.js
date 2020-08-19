import * as api from '../../../api/podcasts'

export const getPodcasts = ({ commit }, page = 1) => {
    api.getPodcasts(page).then(response => {
        commit('SET_PODCASTS', response.data.data)
        commit('SET_PAGE', {
            current: page,
            max: response.data.meta.pagination.total_pages
        })
    })
}

export const getMorePodcasts = ({ commit, state }, page = 1) => {
    api.getPodcasts(state.page.current + 1).then(response => {
        commit('APPEND_PODCASTS', response.data.data)
        commit('SET_PAGE', {
            current: state.page.current + 1,
            max: response.data.meta.pagination.total_pages
        })
    })
}

export const getPodcast = ({commit}, id) => {
    return api.getPodcast(id).then(response => {
        return response.data.data;
    })
}