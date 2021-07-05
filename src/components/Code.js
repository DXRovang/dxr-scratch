import React from 'react';
 
const Code = () => {


    return (
       <div className="body">
          
          <h1>Full-Stack Software Engineer</h1>
          <p>Flatiron, 2021</p>
          <a className="link res"download="Resume.doc" target="_blank" href="/Resume.doc"> Download Resume</a>
          {/* <a className="link res" target="_new" href="/Resume.doc">View Resume</a> */}

          <h3 className="link"><a className="external"href="https://dxrovang.github.io/tarot-trove-frontend/draws" target="_blank" rel="noopener noreferrer"><p>the Tarot Trove</p></a>
          </h3>
          
         <img className="background logo"src="React-01.png"/>
         <img className="logo"src="Ruby-01.png"/>
         <img className="background logo"src="Redux-01.png"/>
         <img className="logo background"src="CSS-3-01.png"/>
         <img className="logo background"src="Rails-01.png"/>
         <img className="logo background"src="HTML-5-01.png"/>
         <img className="background logo"src="JavaScript-01.png"/>
         <img className="background logo"src="Postgresql-01.png"/>
         <img className=" background logo"src="Bootstrap-01.png"/>
         {/* <img className="logo"src="Logic.png"/> */}
        
       </div>
    );
}
 
export default Code;