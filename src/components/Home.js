import React from 'react'
import PostSession from './home/PostSession'
import '../static/home-grid.css'
import PostMaker from './home/PostMaker'

export default function Home(props) {
    return (
        <div className='main-view-home'>
            <div className='search-session'>

            </div>
            <div className='user-data-session'>
                <div className='side-session'>

                </div>
                <div className='posts-session'>
                    <div className='create-post-session'>
                        <PostMaker/>
                    </div>
                    <div className='logged-user-posts-session'>

                    </div>
                </div>
                <div className='side-session'>

                </div>
            </div>
        </div>

    )
}
