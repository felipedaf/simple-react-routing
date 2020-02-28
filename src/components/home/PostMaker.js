import React from 'react'
import '../../static/make-post.css'

export default function PostMaker(props) {
    return (
        <div className='post-input-session'>
            <form>
                <textarea maxlength='120' placeholder='What are you thinking?' className='input-text' type="text"></textarea>
                <button className='share-button'>Share</button>
            </form>
        </div>
    )
}
