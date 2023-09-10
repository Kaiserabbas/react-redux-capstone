// actions/airPollutionActions.js
import axios from 'axios';

const API_KEY = '0fd89f3c751f217b80034bb11909263a'; 

export const fetchAirPollution = (lat, lon) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    dispatch({ type: 'FETCH_AIR_POLLUTION_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_AIR_POLLUTION_FAILURE', payload: error });
  }
};
    