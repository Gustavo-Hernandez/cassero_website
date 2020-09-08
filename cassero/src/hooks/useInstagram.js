import 'isomorphic-fetch';
import React from "react";

export default () => {
  const [posts, setPosts] = React.useState([]);
  const url = 'https://www.instagram.com/graphql/query/?query_hash=bfa387b2992c3a52dcbe447467b4b771&variables={"id":39430957800, "first":9}'
  
  

  const filterPosts = (response) =>{
    return response.data.user.edge_owner_to_timeline_media.edges.map(edge => edge.node.thumbnail_resources[3].src);
  }

  React.useEffect(() => {
    const getPosts = async() =>{
      const response = await fetch(url).then(res => res.json());
      const data = filterPosts(response);
        setPosts(data);
    }
    getPosts();
  }, []);

  return [posts];
};
