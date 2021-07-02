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
   "The Pen", 2016.  Music Director
<iframe className="youtube"width="560" height="315" src="https://www.youtube.com/embed/PjTt2T1nOTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div className="music">
Bach English Suite No 3 in G minor BWV 808, 1st mov.  Pianist
<iframe className="youtube"width="560" height="315" src="https://www.youtube.com/embed/_EG8zO5y-Uc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
</div>   
       </div>
    );
}
 
export default Music;