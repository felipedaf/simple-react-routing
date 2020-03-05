import React from 'react'
import '../../static/visualizer-post.css'

export default function PostVisualizer() {
    return (
        <div className="posts-visualizer-session">
            <div className="post-space-session">
                <div className="post">
                    <div className="post-content">
                        <span>Random phrase</span>
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
                        <div className="comment">
                            <div className="user-data">
                                <div className="comment-profile-photo">
                                    <img src="https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-2/256/4-512.png"></img>
                                </div>
                                <div className="comment-profile-name">
                                    <span>profile name</span>
                                </div>
                            </div>
                            <div className="comment-content">
                                <div className="content"><span>Example ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd dasdasdassdasdasdasdassda</span></div>
                            </div>
                        </div>
                        <div className="comment">
                            <div className="user-data">
                                <div className="comment-profile-photo">
                                    <img src="https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-2/256/4-512.png"></img>
                                </div>
                                <div className="comment-profile-name">
                                    <span>profile name</span>
                                </div>
                            </div>
                            <div className="comment-content">
                                <div className="content"><span>Teste 1 Teste 1 Teste 1 Teste 1Teste 1</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="comment-post">
                    </div>
                </div>
            </div>
            
        </div>
    )
}
