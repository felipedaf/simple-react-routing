import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import axios from 'axios';
import { apiURI } from '../../uriRedirect';
import ConfirmationGreet from './ConfirmationGreet';

export default function ConfirmationRedirect() {
    const [validToken, setValidToken] = useState(true)

    let { token } = useParams();

    useEffect(() => {
        checkToken()
    }, [])


    const checkToken = async () => {
        await axios.get(apiURI + '/confirm/' + token)
        .then(resp => {
            if(resp.status === 200){
                setValidToken(true)
            }
            else
                setValidToken(false)
        })
        .catch(e => {
            setValidToken(true)
        })
    }


    return (
        validToken ? <ConfirmationGreet customerName={'Felipe'} /> : <Redirect to={{pathname : '/confirm'}}/>
    )
}
