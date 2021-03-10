import * as api from '../api';

export const getTrains = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}