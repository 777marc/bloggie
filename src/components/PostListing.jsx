import React, { PureComponent } from 'react'
import Post from './Post';

class PostListing extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            posts : []
        }
    }

    componentDidMount() {

        let posts = [
            {
                'title' : 'my post 1',
                'description' : 'some post content here...',
                'date' : '2020-06-08' 
            },
            {
                'title' : 'my post 2',
                'description' : 'some post content here...',
                'date' : '2020-06-08' 
            },
            {
                'title' : 'my post 3',
                'description' : 'some post content here...',
                'date' : '2020-06-08' 
            }
        ];

        this.setState({ posts });

    }

    render() {

        let { posts } = this.state;

        return (
            <>
                <div>

                    { 
                        posts.map( post => {
                            return <Post post={post} />
                        }) 
                    }   
                </div>
            </>
        )
    }
}

export default PostListing