import axios from "axios";

const URL = 'http://localhost:8080/api';
const requestService = {

    getMatches: async () => {
        return await axios.get(URL+'/match/all')
    },
    getPreviousSeason: async () => {
        return await axios.get(URL+'match/previous-season')
    },
    addMatch: async (match) => {

        return await axios.post(`${URL}/match`, match)

    },
    getMatch: async (id) =>{
        return await axios.get(`${URL}/match/${id}`)
    },
    addPoints: async (scoreData) => {
        return await axios.post(`${URL}/match/annotation`, scoreData)
    },
    addFault: async (faultData) => {
        return await axios.post(`${URL}/match/fault`, faultData)
    },

    getTeams: async () => {
        return await axios.get(URL+'/team/all')
    },
}

const useRequestService = () => requestService;
export {useRequestService}