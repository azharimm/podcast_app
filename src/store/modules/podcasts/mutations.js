import podcasts from "."

export const SET_PODCASTS = (state, podcasts) => {
    state.podcasts = podcasts
}

export const SET_PAGE = (state, { current, max }) => {
    state.page.current = current;
    state.page.max = max || state.page.max;
}

export const APPEND_PODCASTS = (state, podcasts) => {
    state.podcasts.push(...podcasts)
}