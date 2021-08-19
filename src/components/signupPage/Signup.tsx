import React from "react";
import SignupField from "./SignupField";
import "./Signup.css"
import {PrimaryButton} from "@fluentui/react";
import NavigationBar from "../header/NavigationBar";

const Signup = () => {
    return (
        <div>
            <NavigationBar/>
            <div
                className="signup"
            >
                <div
                    className="signup-container"
                >
                    <h1>Tunafish</h1>
                    <div
                        className='signup-container-fields'
                    >
                        <SignupField infoType="Name"/>
                        <SignupField infoType="Password"/>
                        <SignupField infoType="Email"/>
                    </div>

                    <div
                        className="signup-container-footer"
                    >
                        <PrimaryButton
                            style={{width: "100%"}}
                            // onClick={}
                        >Create Account</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;