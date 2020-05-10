import React from "react";
const VideoItem=({video,onVideoSelect})=>{

   return <div onClick={()=>onVideoSelect(video)} className="item" style={{display:"flex",alignItems:"center",cursor:"pointer"
      ,border:"1px solid black",borderRadius:"4px "}}>
      <img className="ui image" width={"180px"} src={video.snippet.thumbnails.medium.url} />
      <div className="content">
         <div className="header" >
            {video.snippet.title}
         </div>
      </div>
       </div>

}
export default VideoItem;