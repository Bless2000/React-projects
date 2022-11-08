import React from "react";
import InputFields from "./inputfields";
import '../css/app.css';

function App() {
    return ( 
        <>
            <div className="login">
                <form className="login-form">
                    <div className="input">
                        <InputFields  title= "Username"  itype="username" iplaceholder="Enter username"/>
                    </div>

                    <div className="input">
                        <InputFields  title= "Password"  itype="password" iplaceholder="Enter password"/>
                    </div>

                    <div className="input">
                        <InputFields  title= "Email"  itype="email" iplaceholder="Enter email"/>
                    </div>

                    <button>Login</button>
                </form>

            </div>
        </>
     );
}

export default App;