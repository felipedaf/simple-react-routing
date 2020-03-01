import React from 'react'
import '../../static/make-post.css'
import axios from 'axios'
import { apiURI } from '../../uriRedirect'
import { token } from '../../auth'

export default function PostMaker(props) {

    const makePost = (event) => {
        let phrase = document.getElementById('post-text').value
        axios({
            method: 'POST',
            url: apiURI + '/user/post',
            data: {
                body: phrase
            },
            headers: {
                'Authorization': 'JWT ' + token
            }
        })
        .then(resp => {
            if(props.makePostCallback)
                props.makePostCallback()
            else
                window.location.reload()
        })
        .catch(err => {
            if(!err.response)
                alert('Something went wrong!')
            else if(err.response.status === 401)
                window.location.reload()
        })
        event.preventDefault()
    }

    const auto_grow = () => {
        let element = document.getElementById('post-text')
        element.style.height = (element.scrollHeight / 2)+'px';

    }


    return (
        <div className='post-input-session'>
            <form>
                <textarea id='post-text' onInput={auto_grow} maxLength='120' placeholder='What are you thinking?' className='input-text' type="text"></textarea>
                <button onClick={makePost}  className='share-button'>Share</button>
            </form>
        </div>
    )
}
