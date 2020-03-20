import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import axios from 'axios';
import { apiURI } from '../../uriRedirect';
import ConfirmationGreet from './ConfirmationGreet';

export default function ConfirmationRedirect() {
    const [validToken, setValidToken] = useState(true)
    const [customerName, setCustomerName] = useState('')

    let { token} = useParams();

    useEffect(() => {
        checkToken()
    }, [])


    const checkToken = async () => {
        await axios.get(apiURI + '/confirm/' + token)
        .then(resp => {
            if(resp.status === 200){
                let userConfirmedName = resp.data.user.name
                setCustomerName(userConfirmedName)
                setValidToken(true)
            }
            else
                setValidToken(false)
        })
        .catch(e => {
            setValidToken(false)
        })
    }


    return (
        validToken ? <ConfirmationGreet customerName={customerName} /> : <Redirect to={{pathname : '/confirm'}}/>
    )
}
