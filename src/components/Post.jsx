import React from 'react'

function Post(props) {
    return (
        <div>
            <h2>{ props.post.title }</h2>
            <p>{ props.post.description }</p>
            <p>{ props.post.date }</p>
        </div>
    )
}

export default Post
