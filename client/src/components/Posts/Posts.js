import React from 'react';
import Post from './Post/Post';


import useStyles from './styles';

//need to add className here next to <h1>

const Posts = () => {
    const classes = useStyles();
    return (
        <>
            
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}


export default Posts;