import React from 'react'
import PostSession from './home/PostSession'
import '../static/home-grid.css'
import PostMaker from './home/PostMaker'
import PostVisualizer from './home/PostVisualizer'

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
                        <PostMaker makePostCallback={null}/>
                    </div>
                    <div className='logged-user-posts-session'>
                        <PostVisualizer/>
                    </div>
                </div>
                <div className='side-session'>

                </div>
            </div>
        </div>

    )
}
