import React from 'react';
// import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

//need to add className here next to <h1>

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console/log(posts);

    return (
        <>
            
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}


export default Posts;