import React from 'react';

const YoutubeEmbed = ({link}) => {
  return (
    <div className="video-responsive">
      <iframe
        title="Youtube"
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeEmbed;
