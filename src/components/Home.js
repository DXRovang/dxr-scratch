import React from 'react';
 
const Home = () => {

    return (
       <div className="body row">
        <h1 className="column blurb intro1">
            
            <p className="column3">David </p>
            <p className="column3">Alexander </p>
            <p className="column3">Rovang</p>
        </h1>
        <div className="column blurb intro2">
            <div className="inner">
            <p>Welcome!</p>
            <p>Of the nearly 2 billion websites<br></br> you could have gone to, I'm flattered <br></br>that you came here.</p> 
            <p> Hopefully, you'll find something interesting<br></br> and want to talk to me about it!</p>
            <p> Happy browsing.</p>
            <div className="intro3"> 
            <p>
            <a href="https://www.linkedin.com/in/alexanderrovang/"target="_blank" rel="noopener noreferrer"><img id="linkedin"src="./images/LI-In-Bug.png"/></a>
            <a href="https://github.com/DXRovang"target="_blank" rel="noopener noreferrer"><img src="./images/GitHub-Mark-Light-64px.png"/></a>

            <a className="pos" href="https://www.instagram.com/x8nder/"target="_blank" rel="noopener noreferrer"><img className="pos" id="insta"src="./images/instagram.png"/></a>
            </p>
            </div>
            </div>
        </div>
    </div>
    );
}
 
export default Home;