import React from 'react'
import '../../static/visualizer-post.css'

export default function PostVisualizer() {
    return (
        <div className="posts-visualizer-session">
            <div className="post-space-session">
                <div className="post">
                    <div className="post-content">
                        <p>Frase aleatoria</p>
                    </div>
                </div>
                <div className="post-actions">
                    <div className="show-comments">
                        <div className="show-comments-button">
                            <button>comm</button>
                        </div>
                    </div>
                    <div className="like-post">
                        <div className="like-post-button">
                            <button>like</button>
                        </div>
                    </div>
                </div>
                <div className="post-comments">
                    <div className="comments">

                    </div>
                    <div className="comment-post">

                    </div>
                </div>
            </div>
            
        </div>
    )
}
