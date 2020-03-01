import axios from "axios"
import { apiURI } from "./uriRedirect"


const localTokenName = 'api_user_tk'

let token = localStorage.getItem(localTokenName) === null ? '' : localStorage.getItem(localTokenName)

const isAuthenticated = async () => {
    return await axios({
        method: 'get',
        url: apiURI+'/',
        headers: {
            'Authorization': 'JWT ' + token
        }
    })
    .then(response => {
        return true
    })
    .catch(err => {

        if(!err.response){
            alert('Server is unavailable!')
        }

        return false
    })

}



export {isAuthenticated, localTokenName, token}