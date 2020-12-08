import React from 'react';


function Home(props) {
    return (
        <div className="container-home">
            <div className="home">
                <div className="row space">
                    <div className="col-12">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 offset-4">
                        <h1> <span className="otherclr">Find </span> <span className="hospclr">Hospitals, </span> <span className="cliniclr">Clinics, </span> <span className="labsclr">Labs, </span> <span className="otherclr">near you </span></h1>
                    </div>
                </div>
                <div className="row space">
                    <div className="col-12">
                        
                    </div>
                </div>
                <div className="row space">
                    <div className="col-12">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 offset-2">
                        <form onsubmit="event.preventDefault();" role="search">
                            <label for="search">Search for stuff</label>
                            <input className="searchBar" id="search" type="search" placeholder="F-6/3, Islamabad" autofocus required />
                            <button type="submit">Go</button>    
                        </form>
                    </div>

                    <div className="col-5">
                        <input className="searchBar" type="text" placeholder="Search"></input>
                    </div>

                </div>
                <div className="row space">
                    <div className="col-12">
                        
                    </div>
                </div>
                <div className="row space">
                    <div className="col-12">
                        
                    </div>
                </div>
                <div className="row space">
                    <div className="col-12">
                        
                    </div>
                </div>
                <div className="row space">
                    <div className="col-12">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 offset-1">
                        <div className = "lowerbox">
                            <div className="row">
                                <div className="col-12">
                                    <h1><span className="otherclr lowerboxtxt">How it Works?</span></h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 offset-2">
                                    <img src="assets/images/watchVideo.png" height="190px" width="70%" alt="Watch Video"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 offset-3">
                                    <h4>WATCH VIDEO</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 offset-2">
                    <div className = "lowerbox">
                            <div className="row">
                                <div className="col-12">
                                    <h1><span className="otherclr lowerboxtxt">Recommendations</span></h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 offset-2">
                                    <p className="lboxtxt">The only good healthcare website in Pakistan. The suggested hospitals are good and a very good user experience</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 offset-3">
                                    <h4>- Ali Akram(Diabatic)</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default Home;