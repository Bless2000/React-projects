import React from "react";
import NavBar from "./NavBar";
import '../css/app.css'
import InputFields from "./InputFields";

function App() {
    return ( 
        <>
            <NavBar/>
            <form className="main">
                    <div className="input">
                        <InputFields title="First Name" mytype="text" placeholder="Enter First Name" />
                    </div>
                    
                    <div className="input">
                        <InputFields title="Last Name" mytype="text" placeholder="Enter Last Name" />
                    </div>

                    <div className="input">
                        <InputFields title="Username" mytype="text" placeholder="Enter Username" />
                    </div>

                    <div className="input">
                        <InputFields title="Password" mytype="password" placeholder="Enter Password" />
                    </div>

                    <div className="input">
                        <InputFields title="Email" mytype="email" placeholder="Enter Email" />
                    </div>

                    <div className="input">
                        <InputFields title="Phone Number" mytype="number" placeholder="Enter Phone Number" />
                    </div>
                    
                        <button className="btn">Sign Up</button>
            </form>
        </>
     );
}

export default App;