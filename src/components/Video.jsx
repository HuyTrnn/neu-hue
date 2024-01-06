import React from 'react';

const Video = ({url}) => {
  return (
    <div>
      <h1>Video </h1>
      <video width="560" height="315" className='max-h-[200px] md:max-h-[350px] bg-black/80' controls autoPlay loop muted>
        <source
          src={url}
          controls
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
