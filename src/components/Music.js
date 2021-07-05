import React from 'react';
 
const Music = () => {

    return (
       <div className="body">
          <h1>Music Page</h1>
          <p>Music page content</p>
 <div className="music">
    Cirque Music, 2018.  Conductor
<iframe className="youtube" width="560" height="315" src="https://www.youtube.com/embed/uMTN2sM6Q2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>hello</iframe>
</div>

<div className="music">
   <audio  src="./brahms-117-1.mp3" controls autoPlay />
</div>   
<div className="music">
   <audio  src="./brahms-118-2.mp3" controls autoPlay />
</div> 
<div className="music">
   <audio  src="./brahms-118-5.mp3" controls autoPlay />
</div> 
       </div>
    );
}
 
export default Music;