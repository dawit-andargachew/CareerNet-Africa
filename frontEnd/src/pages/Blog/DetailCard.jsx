import React from 'react';
import avatar from '../../data/avatar.jpg';
import BlogTab from './BlogTab'
import Timeline from './Timeline'

import resume from '../../assets/undraw_road_to_knowledge_m8s0.svg'
const Parse = require('html-react-parser')

const DetailCard = ({blog}) => {

  return (
    <div className="bg-white bg-opacity-50 p-4 mt-5 shadow-2xl rounded-t-lg">
      

      <div id="detail" className="flex flex-col space-y-6 p-4 lg:px-0 mt-12 text-black max-w-screen-md mx-auto text-lg leading-relaxed">
          {Parse(blog.description)}
        <BlogTab steps={blog.steps} />

        
        <Timeline timeline={blog.timeline} />

      </div>
    </div>
  );
};

export default DetailCard;
