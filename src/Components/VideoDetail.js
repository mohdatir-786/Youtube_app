import React from "react";
const VideoDetail=({video})=>{
  if(!video){
      return <h1>loading...</h1>
  }
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;
  return <div style={{border:"2px solid black"}}>
        <div className="ui embed">
            <iframe src={videoSrc} />
        </div>
      <div className="ui segment" style={{border:"1px solid black"}}> <h4 className="ui header">
          {video.snippet.title}
      </h4>
          <p>{video.snippet.description}</p>
      </div>
  </div>
};
export default VideoDetail;