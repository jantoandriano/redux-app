import axios from "axios"
export const FETCH_DATA = "FETCH_DATA";
export const HANDLE_DETAIL = "HANDLE_DETAIL"

export const API_URL = "https://rickandmortyapi.com/api/character"

export const fetchData = (payload) => {
  return{
    type : FETCH_DATA,
    payload
  }
}

export const fetchDataAPI = () => {
  return (dispatch) => {
      return axios.get(API_URL)
      .then(res => {
        dispatch(fetchData(res.data.results))
      })
      .catch(error => {
        throw(error)
      })
  }
  
}






