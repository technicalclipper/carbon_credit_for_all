import React,{useState} from 'react';
import Header from '../components/header'
import '../signin.css'

function Home(){
    return(
        <div>
        <div className="right-panel">
            <div className="content">
                <h1>Plant a Tree today!</h1>
                <p>
                "Planting a tree today is a step toward a better future. Trees clean the air, combat climate change, and create habitats for wildlife. They stand as symbols of hope, offering beauty and shade while fostering life for generations to come."
                </p>
            </div>
            <div className="content">
                <h1>About Us!</h1>
                <p>"We are a platform that turns tree planting into an exciting and rewarding experience. By gamifying environmental action, we let users earn points for every tree planted, which can later be converted into carbon credits. Together, we make sustainability fun, impactful, and rewarding for everyone!"</p>
            </div>
        </div>
        </div>

    );

}

export default Home;