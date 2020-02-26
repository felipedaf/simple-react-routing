import axios from "axios"
import { apiURI } from "./uriRedirect"

const isAuthenticated = async () => {

    let token = localStorage.getItem(localTokenName) === null ? '' : localStorage.getItem(localTokenName)

    return await axios({
        method: 'get',
        url: 'http://'+apiURI+'/',
        headers: {
            'Authorization': 'JWT ' + token
        }
    })
    .then(response => {
        return true
    })
    .catch(() => {
        return false
    })

}

const localTokenName = 'api_user_tk'

export {isAuthenticated, localTokenName}