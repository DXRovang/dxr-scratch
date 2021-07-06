import React from 'react';
 
const Music = () => {

    return (
       <div className="body row">
          <div className="column blurb">
          <h1>Music Director, Pianist, Arranger</h1>
          <p>Oberlin Conservatory, 1992</p>
          <br></br><br></br>
          <p>Logic * Mainstage * Sibelius * Finale</p>
          <p>Classical (solo, chamber, opera)</p>
          <p>Musical Theatre</p>
          <p>Rock</p>
          <p>Guitar</p>
          <p>Vocal Coach</p>
          <br></br><br></br>
          <p>NYU/Yale/Juilliard/Peabody/Pace</p>
          <p>Tuachan/Goodspeed/George St./O'Neill</p>
          <p>TUTS/MUNY/Engeman/Spoleto/Longacre</p>
          <p>Telsey/Wojcik-Seay/Calleri/Cherpakov</p>
  

          </div>
          <div className="column">
         <div className="music">Cirque Musica, 2018
            <iframe className="youtube" width="560" height="315" src="https://www.youtube.com/embed/uMTN2sM6Q2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>hello</iframe>
         </div>
         <div className="music">
            <div className="mp3">Brahms, Op.117 #1</div>
            <audio  src="./brahms-117-1.mp3" controls/>
         </div>   
         <div className="music">
            <div className="mp3">Brahms, Op.118 #2</div>
            <audio  src="./brahms-118-2.mp3" controls/>
         </div> 
         <div className="music">
            <div className="mp3">Brahms, Op.118 #5</div>
            <audio  src="./brahms-118-5.mp3" controls/>
         </div> 
         </div>
      </div>
    );
}
 
export default Music;