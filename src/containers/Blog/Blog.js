import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        post:[]
    }



    componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
         const posts = response.data.slice(0,4);
         const updatedPosts = post.map(post => {
             return {
                 ...post,
                 author : 'Ayush'
             }
         });
        this.setState({posts: response.data});
        //console.log(response);
    });



}
    render () {
        const posts = this.state.posts.map(post =>{
            return <Post key={post.id} title={post.title} author={post.author}/>;

        }


        );
        return (
            <div>
                <section className="Posts">
                  {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;