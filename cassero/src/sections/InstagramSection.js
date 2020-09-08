import React from 'react';
import "./styles/InstagramSection.css"
import useInstagram from "../hooks/useInstagram";
const InstagramSection = () =>{
  const [posts] = useInstagram();

  const pictures = posts.map((post,index) => <img className="mt-2" key={index} src={post} width="32%" alt={`ig_post${index}`}/>) 


  return (
    <div className="instagramSection-mainContainer">
      <div className="d-flex flex-wrap justify-content-around mt-2 mb-2">
        {pictures}
      </div>
    </div>
  );
}
export default InstagramSection;