import React, { useEffect, useState } from 'react';
import ForYouElement from './ForYouElement';
import './ForYou.css'

function ForYou() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchPosts() {
            let url = "http://localhost:5000/posts";
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            setPosts(parsedData.allPosts);
        }
        // setTimeout(()=>{
        //     fetchPosts();
        // },5000)
        fetchPosts()
    },[])

    function createPosts(post) {
        return <ForYouElement key={post._id} name={post._id} postImage={post.imageName.url} time={post.timestamp} caption={post.caption}></ForYouElement>
    }

    return (
        <div className='forYouSection'>
            {posts.reverse().map(createPosts)}
        </div>
    )
}

export default React.memo(ForYou);